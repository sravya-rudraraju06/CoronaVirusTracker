import React,{useState} from "react";
import './App.css';
import CountriesDropDown from "./CountriesDropDown";
import CovidInfo from "./CovidInfo";

function App() {
  //props 
  const [country,setCountry] = useState("")
  const countrySelected =(childData)=>{
    // this data is coming from child component to parent component
    console.log(childData)
    setCountry(childData)      // dynamically it is setting

  }
  return (
    <div className ="App">
      <h1>
        Covid19 Tracker App in react
      </h1>
      <CountriesDropDown selectedCountry={countrySelected}></CountriesDropDown>
      <CovidInfo country={country}></CovidInfo>                          
    </div>
  );
}
// props variable country = {country} actual country and define them in above with useState hook

export default App;
