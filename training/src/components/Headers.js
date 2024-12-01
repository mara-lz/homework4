function Headers(props) {
    const {headerList} = props;
    return (
        <div className="contentContainer">
            {
                headerList.map((item, idx) => {
                    return (
                        <span className="headerElement" key={idx}>{item}</span>
                    )
                })
            }
        </div>
    )
}

export default Headers;