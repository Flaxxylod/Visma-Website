const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'DBvirson',
    port: 5432,
});

db.connect()
    .then(() => {
        console.log('Connected to PostgreSQL');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Connection error', err.stack);
        process.exit(1);
    });

// Маршрут для получения всех пользователей
app.get('/api/users', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM customer');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при получении пользователей' });
    }
});

// Маршрут для добавления пользователя
app.post('/api/users', async (req, res) => {
    const {
        customer_code,
        customer_name,
        customer_inn,
        customer_kpp,
        customer_legal_address,
        customer_postal_address,
        customer_email,
        customer_code_main,
        is_organization,
        is_person
    } = req.body;

    if (!customer_code || !customer_name) {
        return res.status(400).json({ error: 'Необходимы поля customer_code и customer_name' });
    }

    try {
        const result = await db.query(
            'INSERT INTO customer (customer_code, customer_name, customer_inn, customer_kpp, customer_legal_address, customer_postal_address, customer_email, customer_code_main, is_organization, is_person) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
            [
                customer_code,
                customer_name,
                customer_inn,
                customer_kpp,
                customer_legal_address,
                customer_postal_address,
                customer_email,
                customer_code_main,
                is_organization,
                is_person
            ]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при создании пользователя' });
    }
});

// Эндпоинт для получения данных из таблицы lots (переписан с использованием async/await)
app.get('/api/lots', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM lot');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        res.status(500).json({ error: 'Ошибка при получении данных' });
    }
});

// Эндпоинт для добавления данных в таблицу lots (переписан с использованием async/await)
app.post('/api/lots', async (req, res) => {
    const { lot_name, customer_code, price, currency_code, nds_rate, place_delivery, date_delivery } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO lot (lot_name, customer_code, price, currency_code, nds_rate, place_delivery, date_delivery) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [lot_name, customer_code, price, currency_code, nds_rate, place_delivery, date_delivery]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        res.status(500).json({ error: 'Ошибка при добавлении данных' });
    }
});

// Удаление клиента по customer_code
app.delete('/api/users/by-code', async (req, res) => {
    const { customer_code } = req.body;

    if (!customer_code) {
        return res.status(400).json({ error: 'Код клиента обязателен' });
    }

    try {
        await db.query('BEGIN');
        
        // 1. Сначала удаляем все связанные лоты
        await db.query('DELETE FROM lot WHERE customer_code = $1', [customer_code]);
        
        // 2. Затем удаляем самого клиента
        const result = await db.query(
            'DELETE FROM customer WHERE customer_code = $1 RETURNING *',
            [customer_code]
        );

        if (result.rowCount === 0) {
            await db.query('ROLLBACK');
            return res.status(404).json({ error: 'Клиент не найден' });
        }

        await db.query('COMMIT');
        res.json({ 
            message: 'Клиент и связанные лоты удалены',
            deletedUser: result.rows[0]
        });
    } catch (error) {
        await db.query('ROLLBACK');
        console.error('Ошибка при удалении:', error);
        res.status(500).json({ error: 'Ошибка сервера', details: error.message });
    }
});

// Удаление лотов по customer_code
app.delete('/api/lots', async (req, res) => {
    const { customer_code } = req.body;

    if (!customer_code) {
        return res.status(400).json({ error: 'Код клиента (customer_code) обязателен' });
    }

    try {
        // Удаляем все лоты с указанным customer_code
        const result = await db.query(
            'DELETE FROM lot WHERE customer_code = $1 RETURNING *',
            [customer_code]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ 
                message: 'Лоты с указанным кодом клиента не найдены',
                deletedCount: 0
            });
        }

        res.status(200).json({
            message: 'Лоты успешно удалены',
            deletedCount: result.rowCount,
            deletedLots: result.rows
        });

    } catch (error) {
        console.error('Ошибка при удалении лотов:', error);
        res.status(500).json({ 
            error: 'Ошибка при удалении лотов',
            details: error.message
        });
    }
});

process.on('SIGINT', async () => {
    await db.end();
    console.log('Подключение к базе данных закрыто');
    process.exit(0);
});