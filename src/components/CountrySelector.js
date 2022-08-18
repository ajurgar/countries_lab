import React from "react";


const CountrySelector = ({ countries, onCountrySelected }) => {


    const countrySelections = countries.map(( country, index) => {
    return <option value ={index} key={index}>{country.name.common}</option>

})

const handleChange = (event) => 
{ const chosenCountry =  countries [event.target.value];
    onCountrySelected(chosenCountry)
    
}

return(
    <select defaultValue="" onChange={handleChange}>
    <option value=""> Choose a Country </option>

    {countrySelections}
    
    </select>

)


}


export default CountrySelector;