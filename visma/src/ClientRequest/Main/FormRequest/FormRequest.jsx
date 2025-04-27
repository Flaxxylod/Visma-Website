import { useState } from "react";
import "./FormRequest.css";
import InputForm from "./InputForm/InputForm";
import CheckboxForm from "./CheckboxForm/CheckboxForm";
import ComboBox from "./ComboBox/ComboBox.jsx"

const FormRequest = () => {
    const [formData, setFormData] = useState({
        customer_code: '',
        customer_name: '',
        customer_inn: '',
        customer_kpp: '',
        customer_legal_address: '',
        customer_postal_address: '',
        customer_email: '',
        customer_code_main: '',
        is_organization: false,
        is_person: false,
    });

    const [orderData, setOrderData] = useState({
        customer_code: '',
        lot_name: '',
        price: '',
        currency_code: '',
        nds_rate: '',
        place_delivery: '',
        date_delivery: '', // Добавлено поле для даты доставки
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleOrderChange = (e) => {
        const { name, value } = e.target;
        setOrderData({
            ...orderData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked,
        });
    };

    const handleSubmitUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Ошибка при отправке данных');

            const data = await response.json();
            console.log('Пользователь добавлен:', data);

            // Очистка формы после успешной отправки
            setFormData({
                customer_code: '',
                customer_name: '',
                customer_inn: '',
                customer_kpp: '',
                customer_legal_address: '',
                customer_postal_address: '',
                customer_email: '',
                customer_code_main: '',
                is_organization: false,
                is_person: false,
            });

        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmitOrder = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/lots', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) throw new Error('Ошибка при отправке данных о заказе');

            const data = await response.json();
            console.log('Заказ успешно добавлен:', data);

            // Очистка формы после успешной отправки
            setOrderData({
                customer_code: '',
                lot_name: '',
                price: '',
                currency_code: '',
                nds_rate: '',
                place_delivery: '',
                date_delivery: ''
            });

        } catch (error) {
            console.error('Ошибка при отправке данных о заказе:', error);
        }


    }

    return (
        <div className="container">
            <div className="FormRequest-content">
                <h3 style={{ marginBottom: "30px", textAlign: "center" }}>Справочник контрагентов</h3>

                <form onSubmit={handleSubmitUser} className="Form-content">
                    <InputForm Name="customer_code" OnChange={handleChange}>Код контрагента</InputForm>
                    <InputForm Name="customer_name" OnChange={handleChange}>Наименование</InputForm>
                    <InputForm Name="customer_inn" OnChange={handleChange}>ИНН</InputForm>
                    <InputForm Name="customer_kpp" OnChange={handleChange}>КПП</InputForm>
                    <InputForm Name="customer_legal_address" OnChange={handleChange}>Юр.адрес</InputForm>
                    <InputForm Name="customer_postal_address" OnChange={handleChange}>Почтовый адрес</InputForm>
                    <InputForm Name="customer_email" OnChange={handleChange}>Электронная почта</InputForm>
                    <InputForm Name="customer_code_main" OnChange={handleChange}>Вышестоящий контрагент</InputForm>

                    <CheckboxForm
                        children="Юр.лицо"
                        type="checkbox"
                        name="is_organization"
                        Checked={formData.is_organization}
                        OnChange={handleCheckboxChange}
                    />
                    <CheckboxForm
                        children="Физ.лицо"
                        type="checkbox"
                        name="is_person"
                        Checked={formData.is_person}
                        OnChange={handleCheckboxChange}
                    />

                    {/* Кнопка отправки для пользователя */}
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "30px" }}>
                        <button type="submit">Отправить данные о контрагенте</button>
                    </div>

                </form>

                <form onSubmit={handleSubmitOrder} className="Form-content">
                    <InputForm Name="customer_code" OnChange={handleOrderChange}>Код контрагента</InputForm>
                    <InputForm Name="lot_name" OnChange={handleOrderChange}>Наименование лота</InputForm>
                    <InputForm Name="price" OnChange={handleOrderChange}>Начальная стоимость</InputForm>
                    <InputForm Name="place_delivery" OnChange={handleOrderChange}>Грузополучатель</InputForm>
                    <InputForm Name="date_delivery" OnChange={handleOrderChange}>Дата доставки</InputForm>
                    <ComboBox  ComboType="NDS" OnChange={handleOrderChange}>НДС</ComboBox>
                    <ComboBox ComboType="Currency" OnChange={handleOrderChange}>Валюта</ComboBox>
                    {/* Кнопка отправки для заказа */}
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <button type="submit">Отправить данные о заказе</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default FormRequest;