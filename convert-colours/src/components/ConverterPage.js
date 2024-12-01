import {useState} from "react";

function ConverterPage(){
    const defaultColor='rgb(255, 255, 255)';
    const errorColour='rgb(255,0,0)';
    const errorText='Ошибка!';

    const [backColor, setBackColor] = useState(defaultColor);
    const [rgbValue, setRgbValue] = useState('');

    const handlerConverter=(event)=>{
        const {target}=event;
        const {value}=target;

        setBackColor(defaultColor);
        setRgbValue('');

        if (value.length === 7 && value[0] === '#') {
            const inputString = value.slice(1);
            //console.log(inputString);
            let intList = inputString.split('');
            for (const symbol of intList) {
                let hInt = parseInt(symbol, 16);
                if (isNaN(hInt)) {
                    setBackColor(errorColour);
                    setRgbValue(errorText);
                    return;
                }
            }
            let rgbList = [];
            for (let i = 0; i < inputString.length; i = i + 2) {
                rgbList.push(parseInt(`${inputString[i]}${inputString[i + 1]}`, 16));
            }
            let resultColor = `rgb(${rgbList[0]}, ${rgbList[1]},${rgbList[2]})`;
            setBackColor(resultColor);
            setRgbValue(resultColor);
        }
    }

    return(
        <div className="container"
             style={{
                 backgroundColor: backColor,
        }}>
            <input
                type="text"
                className="input"
                placeholder="Введите цвет в формате HEX"
                maxLength="7"
                onChange={handlerConverter}
            />
            <div className="output">{rgbValue}</div>
        </div>
    );
}

export default ConverterPage;