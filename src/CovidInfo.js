import React, { useState } from 'react';

const CovidInfo = (props) => {
    const [covidData,setCovidData] = useState([])
    const InfoData = ()=> {
         console.log(props.country)
         let items = []
         const response = fetch("https://api.covid19api.com/total/country/" + props.country)
                         .then((res)=>res.json())
                         .then((res)=>{
                            console.log(res)
                            const index = res.length - 1    
                            setCovidData(res[index])
                            console.log(index)
                         })
    }
    return (
        <div>
            {/* <h1>Covid Info</h1> */}
            <button onClick = {InfoData}>Take Data</button>
            <h1>Total Cases:{covidData.Confirmed}</h1>
            <h1>Total Active:{covidData.Active}</h1>
            <h1>Total Deaths:{covidData.Deaths}</h1>
            <h1>Total Recovered:{covidData.Recovered}</h1>
        </div>
    );
};


export default CovidInfo;
