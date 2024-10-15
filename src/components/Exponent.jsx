const Exponent = ({ count, exponent }) => {
    let string = `${count} `;
    for (let i = 0; i < exponent - 1; i++) {
        string = `${string} * ${count}`;
    }
    return (
        <div className="exponent-counter-container">
            <p className="exponent-label">{count}<sup>{exponent}</sup></p>
            <p className="exponent-result">{string} = <br/>
                <span className="total">{(count ** exponent).toLocaleString("de")}</span>
            </p>
        </div>
    )
};

export default Exponent;