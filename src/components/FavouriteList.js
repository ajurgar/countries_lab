import React from "react";


const FavouriteList = ({favouriteCountry}) =>{

const listFavourites = favouriteCountry.map((country, index) => {
   
    return (
        <div key={index}>
    
        <h3>{country.name.common}</h3>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <img src={country.flags.png}></img>
        </div>

    ) 
    
    
})

return(
    <>
    {listFavourites}
    </>
)
   
}



export default FavouriteList;