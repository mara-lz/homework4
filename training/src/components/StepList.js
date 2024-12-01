import Headers from "./Headers";
import Step from "./Step";
import {useState} from "react";

function StepList(props){
    const InputFormHeaderList=['Дата (ДД.ММ.ГГГГ)','Пройдено км','Действия'];
    const {stepList, deleteStep}=props;

    return(
        <div>
            <Headers headerList={InputFormHeaderList}/>
            <div className="outputContainer">
                {stepList.map((item,idx) => (
                    <Step key={idx} step={item} deleteStep={deleteStep}></Step>
                ))}
            </div>

        </div>
    )
}

export default StepList;