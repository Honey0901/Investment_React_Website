

export default function UserInput({onChange,inputValues}) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
            <input 
            type="number" 
            value={inputValues.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)} />
        </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value={inputValues.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number"
                value={inputValues.expectedReturn} 
            onChange={(e) => onChange("expectedReturn", e.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" value={inputValues.duration}
            onChange={(e) => onChange("duration", e.target.value)} />
            </p>
        </div>
    </section>
}