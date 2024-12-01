function Step(props) {
    const {step, deleteStep}=props;
    return (
        <div className="element">
            <div>{step.date}</div>
            <div>{step.distance}</div>
            <div onClick={()=>{deleteStep(step.date)}}>X</div>
        </div>
    )
}

export default Step;