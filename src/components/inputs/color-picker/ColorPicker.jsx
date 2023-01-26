import './Color.css';
import Color from './Color';

const ColorPicker = ({ setColor }) => {

    return (
        <div className="color-picker vertical-align">
            <Color onClick={() => setColor('var(--red-50)')} id="red" color="var(--red-60)" checked={true} />
            <Color onClick={() => setColor('var(--magenta-50)')} id="magenta" color="var(--magenta-60)" />
            <Color onClick={() => setColor('var(--purple-50)')} id="purple" color="var(--purple-60)" />
            <Color onClick={() => setColor('var(--blue-50)')} id="blue" color="var(--blue-60)" />
            <Color onClick={() => setColor('var(--cyan-40)')} id="cyan" color="var(--cyan-60)" />
            <Color onClick={() => setColor('var(--teal-50)')} id="teal" color="var(--teal-60)" />
            <Color onClick={() => setColor('var(--green-40)')} id="green" color="var(--green-60)" />
            <Color onClick={() => setColor('var(--cool-gray-40)')} id="cool-gray" color="var(--cool-gray-60)" />
        </div>
    );
}
 
export default ColorPicker;