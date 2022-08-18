import React from "react";
import './CountryDetail.css';


const CountryDetail = ({country, addFavourite}) =>{

    const handleFavouriteClick = () =>{
        addFavourite(country)
    }

    const borders = country.borders ? country.borders.map((border, index) =>{
        return <li key={index}>{border}</li>
    }) : []

  

    return (

        <div>
        <h3>{country.name.common}</h3>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p className="borders"> Neighbouring:{borders}</p>
        <img src={country.flags.png}></img>

        <button className="btn" onClick={handleFavouriteClick}> Add to favorites </button>


        </div>
    )

}



export default CountryDetail;