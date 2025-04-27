import "./InputForm.css"
const InputForm = ({ children, Name, Placeholder ,OnChange }) => {
    return (
        <div className="InputForm-content">
            <span style={{ fontWeight: "600", fontSize: "13px", marginBottom: "10px",  textTransform: "uppercase"}}>{children}</span>
            <input type="text" name={Name} placeholder={Placeholder} onChange={OnChange} required/>
        </div>
    );
}

export default InputForm;