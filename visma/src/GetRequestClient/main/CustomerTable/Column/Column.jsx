
import "./column.css"
const Column = ({ children, DataTable }) => {


    return (
        <div className="Colum-content">
            <section>{children}</section>
            {DataTable}
        </div>
    );
}

export default Column;