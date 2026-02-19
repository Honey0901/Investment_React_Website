import { useEffect, useState } from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const calculatedResults = calculateInvestmentResults(input);
        setResults(calculatedResults);
    }, [input]);

    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {results.length > 0 && results.map(yearData => {
                        const totalInterest =
                            yearData.valueEndOfYear -
                            yearData.annualInvestment * yearData.year -
                            input.initialInvestment;

                        const totalAmount = yearData.valueEndOfYear - totalInterest;
                        return <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmount)}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    );
}


