import "./comboBox.css";
import { NdsRateAndCurrency } from "./ComboBoxData";
import React, { useState } from 'react';

const ComboBox = ({ children, ComboType }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (

        <div className="ComboBox-content">
            <span style={{ fontWeight: "600", fontSize: "13px", marginBottom: "10px",  textTransform: "uppercase"}}>{children}</span>
            <select
                id="simple-select"
                value={selectedValue}
                onChange={handleChange}
            >
                
                {NdsRateAndCurrency.map(item => ( ComboType === "NDS" ? 
                    <option>{item.nds}</option> 
                    :
                    <option>{item.Currency}</option>
                ))}

            </select>
        </div>
    );
}
export default ComboBox;