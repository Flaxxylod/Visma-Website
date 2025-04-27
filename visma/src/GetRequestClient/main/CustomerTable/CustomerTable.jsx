import "./customerTable.css";
import Column from "./Column/Column";
import { useState, useEffect } from "react";
import axios from 'axios';

const CustomerTable = () => {
    const [customerData, setCustomerData] = useState([]);
    const [lotData, setLotData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const customersResponse = await axios.get('http://localhost:5000/api/users');
            const lotsResponse = await axios.get('http://localhost:5000/api/lots');
            setCustomerData(Array.isArray(customersResponse.data) ? customersResponse.data : []);
            setLotData(Array.isArray(lotsResponse.data) ? lotsResponse.data : []);
        } catch (error) {
            setError(error.message);
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteUser = async (customerCode) => {
        if (!window.confirm(`Удалить клиента ${customerCode} и все его лоты?`)) return;

        try {
            await axios.delete('http://localhost:5000/api/users/by-code', {
                data: { customer_code: customerCode }
            });

            setCustomerData(customerData.filter(user => user.customer_code !== customerCode));
            setLotData(lotData.filter(lot => lot.customer_code !== customerCode));

        } catch (error) {
            console.error("Delete user error:", error);
            alert("Ошибка при удалении клиента: " + (error.response?.data?.error || error.message));
        }
    };

    const handleDeleteLot = async (lotId, customerCode) => {
        if (!window.confirm("Удалить этот лот?")) return;

        try {
            await axios.delete('http://localhost:5000/api/lots', {
                data: { id: lotId, customer_code: customerCode }
            });
            setLotData(lotData.filter(lot => lot.id !== lotId));
        } catch (error) {
            console.error("Delete lot error:", error);
            alert("Ошибка при удалении лота: " + (error.response?.data?.error || error.message));
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="Table-content">
            {/* Таблица клиентов */}
            <div className="customerTable">
                <Column DataTable={customerData.map((item) => <section>{item.customer_code}</section>)}>Код контрагента</Column>
                <Column DataTable={customerData.map((item) => <section>{item.customer_name}</section>)}>Наименование</Column>
                <Column DataTable={customerData.map((item) => <section>{item.customer_inn}</section>)}>ИНН</Column>
                <Column DataTable={customerData.map((item) => <section>{item.customer_kpp}</section>)}>КПП</Column>
                <Column DataTable={customerData.map((item) => <section>{item.customer_legal_address}</section>)}>Юр.адрес</Column>
                <Column DataTable={customerData.map((item) => <section>{item.customer_postal_address}</section>)}>Почтовый адрес</Column>
                <Column DataTable={customerData.map((item) => <section>{item.customer_email}</section>)}>Электронная почта</Column>
                <Column DataTable={customerData.map((item) => (
                    <section>{item.is_organization ? "✅" : "❌"}</section>
                ))}>Вышестоящий контрагент</Column>
                <Column DataTable={customerData.map((item) => (
                    <section>{item.is_person ? "✅" : "❌"}</section>
                ))}>Юр.лицо</Column>

                {customerData.length > 0 && (
                    <Column
                        key="actions"
                        DataTable={customerData.map((item) => (
                            <section
                                onClick={() => handleDeleteUser(item.customer_code)}
                                className="clickable-section"
                            >
                                Удалить
                            </section>
                        ))}
                    >Действия</Column>
                )}
            </div>

            {/* Таблица лотов */}
            <div className="lotTable">
                <Column DataTable={lotData.map((item) => <section>{item.lot_name}</section>)}>Наименование лота</Column>
                <Column DataTable={lotData.map((item) => <section>{item.customer_code}</section>)}>Код клиента</Column>
                <Column DataTable={lotData.map((item) => <section>{item.price}</section>)}>Цена</Column>
                <Column DataTable={lotData.map((item) => <section>{item.currency_code}</section>)}>Валюта</Column>
                <Column DataTable={lotData.map((item) => <section>{item.nds_rate}</section>)}>Ставка НДС</Column>
                <Column DataTable={lotData.map((item) => <section>{item.place_delivery}</section>)}>Место поставки</Column>
                <Column DataTable={lotData.map((item) => <section>{item.date_delivery}</section>)}>Дата поставки</Column>

                {lotData.length > 0 && (
                    <Column
                        key="actions"
                        DataTable={lotData.map((item) => (
                            <section
                                onClick={() => handleDeleteLot(item.id, item.customer_code)}
                                className="clickable-section"
                            >
                                Удалить
                            </section>
                        ))}
                    >Действия</Column>
                )}
            </div>
        </div>
    );
};

export default CustomerTable;