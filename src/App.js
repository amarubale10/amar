import { useState } from "react";
import "./App.css";

import BMIScore from "./bmicomponents/BMIScore";
import BMIForm from "./bmicomponents/BMIForm";


function App() {
  const [bmi, setBmi] = useState(18);
  const [bmiType, setBmiType] = useState("Overweight");
  const onFormSubmit=(w,h)=>
  {
    console.log(w+":"+h);
    let b= calculateBMI(w,h);
    setBmi(b);
    let bType=weightType(b);
    setBmiType(bType);
  }
  const calculateBMI =(w,h)=>(w/(h*h)).toFixed(2);
  const weightType=bmi=>
  {
    if(bmi<18.5)
    {
      return"Underweight";
    }
    else if(18.5<bmi<24.9)
    {
      return "Normal";
    }
    else
    return "Overweight";
  }

  return (
    <div className="App">
      <h2>Welcome to React</h2>
    <BMIForm getData={onFormSubmit}/>
    <BMIScore bmi={bmi} BmiType={bmiType}/>
    </div>
  );
}


export default App;
   