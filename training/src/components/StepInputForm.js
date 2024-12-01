import Headers from "./Headers";
import {useState} from "react";

function StepInputForm(props) {
    const InputFormHeaderList=['Дата (ДД.ММ.ГГГГ)','Пройдено км',''];
    const [newDate,setNewDate]=useState('');
    const [newDistance,setNewDistance]=useState('');
    const {addStep}=props;

    const addStepToList=()=> {
        if (newDate != '' && newDistance != '') {
            //Проверяем дату
            let checkedDate= new Date(newDate.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
            if (checkedDate=="Invalid Date"){
                alert('Ошибка! Неверная дата!');
                return;
            }

            //Проверяем расстояние
            let isNumber= isFinite (newDistance);
            if (!isNumber) {
                alert('Ошибка! Неверное расстояние!');
                return;
            }

            //Добавляем в лист
            addStep(newDate,newDistance);
            setNewDate('');
            setNewDistance('');
            return;
        }
    };

    return (
        <div>
            <Headers headerList={InputFormHeaderList}/>
            <div className="inputContainer">
                <input
                    className="inputElement"
                    type="text" name="date"
                    value={newDate}
                    onChange={(event)=>{setNewDate(event.target.value)}}
                />
                <input
                    className="inputElement"
                    type="text" name="distance"
                    value={newDistance}
                    onChange={(event)=>{setNewDistance(event.target.value)}}
                />
                <button className="button" onClick={addStepToList}>
                    ОК
                </button>
            </div>
        </div>
    )
}

export default StepInputForm;


/*<div className="contentContainer">
    <span className="headerElement">Дата (ДД.ММ.ГГ)</span>
    <span className="headerElement">Пройдено км</span>
    <span className="headerElement"></span>
</div>*/