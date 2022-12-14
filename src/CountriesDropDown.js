import React,{useState} from "react";

function CountriesDropDown (props){
    const onChange = (e)=>{    
        console.log(e.target.value)       
        props.selectedCountry(e.target.value)
    }
    const createSelectItems = ()=>{
        const res = fetch("https://api.covid19api.com//countries")
                    .then((res)=> res.json())         
                    .then((res)=>{                       
                        console.log(res)
                        setCountries(res)
                    })
        let items = []          
        countries.forEach(country =>{
            items.push(
                <option key = {country.Slug} value ={country.Slug}> 
                   {country.Country}
                </option>

            )
        })
        return items              
    }
    return(
        <div>
            <label htmlFor="countries">
                select Country:
            </label>
            <select onChange={onChange}>
                {createSelectItems()}

            </select>
        </div>
    )

}
export default CountriesDropDown;
