import { useState } from "react";
import Header from "./components/header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
    const [inputValues, setInputValues] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputisValid = inputValues.duration >=1 ;

     function handleChange(inputIdentifier,newValue){
        setInputValues((prevInputValues)=>{
            return {
                ...prevInputValues,
                [inputIdentifier]: +newValue
            };
        });
    }

  return (
    <>
      <Header />
      <UserInput inputValues={inputValues} onChange={handleChange} />
      {!inputisValid && 
      <p className="center"> Duration must be at least 1 year.</p>}
      {inputisValid && <Results input={inputValues} />}
    </>
  );
}

export default App
