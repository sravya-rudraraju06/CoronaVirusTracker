import React,{useState} from "react";

function CountriesDropDown (props){

    const [countries,setCountries] = useState([])    //data holding countries(functions settings countries )which is USESTATE_HOOK which is in react
    // we r passing dynamically countries through usestae and passing res in down WITH SetCOUNTRIES..
    // onchange is holding e parameter e , as it is in select box
    const onChange = (e)=>{    
        console.log(e.target.value)        // it  will print the value which the user has been selceted. 
        
        // onchange after e.target.value 
        // we need to pass props above  and selected country coming from app.js
        props.selectedCountry(e.target.value)
    }
    const createSelectItems = ()=>{
        const res = fetch("https://api.covid19api.com//countries")
                    .then((res)=> res.json())            // handles with promise (.then ) convert  res into json)
                    .then((res)=>{                       // return res to us
                        console.log(res)
                        setCountries(res)
                    })
        let items = []          
         // list of countries holding
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