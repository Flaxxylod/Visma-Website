import "./checkboxForm.css"

const CheckboxForm = ({ children, Checkced, OnChange }) => {
    return (
        <div className="Checkbox-content">
            <input checked={Checkced} onChange={OnChange} type="checkbox" />
            <span>{children}</span>
        </div>
    );
}

export default CheckboxForm;