import './Color.css';

const Color = ({ 
    id, 
    color='var(--blue-60)', 
    name="colors",
    checked,
    onClick=null }) => {

    const css = `
        #${id ? id : color} .color-radio::after {
            background-color: ${color}
        }
    `;

    return (
        <>
            <style>{css}</style>
            <label className="radio" id={id} onClick={onClick}>
                <input type="radio" className='radio__input' name={name} defaultChecked={checked} />
                <div className="color-radio" 
                    style={{ borderColor: color }}></div>
            </label>
        </>
    );
}
 
export default Color;