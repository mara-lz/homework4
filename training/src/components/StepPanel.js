import StepInputForm from "./StepInputForm";
import StepList from "./StepList";
import {useState} from "react";

function StepPanel() {
    const [stepList,setStepList]=useState([]);

    const deleteStep=(date)=>{
        let deletedStep= stepList.find((item)=>{
            return (item.date==date);
        });
        if (deletedStep){
            let idxDeleted = stepList.indexOf(deletedStep);
            let tmpList=[...stepList];
            tmpList.splice(idxDeleted,1);
            setStepList(tmpList);
        }
    };

    const addStep=(date,distance)=>{
        let updateStep= stepList.find((item)=>{
            return (item.date==date);
        });
        if (updateStep){
            let idxUpdated = stepList.indexOf(updateStep);
            if (idxUpdated !== -1) {
                const updateItem = {
                    date,
                    distance: Number(stepList[idxUpdated].distance) + Number(distance),
                };
                const tmpSteps = [...stepList];
                tmpSteps.splice(idxUpdated, 1, updateItem);
                setStepList(tmpSteps);
                return;
            }
        }
        else {
            const tmpSteps = [...stepList];
            tmpSteps.push({
                date,
                distance: Number(distance),
            });
            tmpSteps.sort((a,b)=>{
                let dt1= new Date(a.date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
                let dt2= new Date(b.date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
                if (dt1 > dt2) return -1;
                if (dt1 == dt2) return  0;
                if (dt1 < dt2) return  1;
            });
            setStepList(tmpSteps);
        }
    }

    return (
        <div className="wrapperContainer">
            <StepInputForm addStep={addStep}/>
            <StepList stepList={stepList} deleteStep={deleteStep}/>
        </div>
    )
}

export default StepPanel;