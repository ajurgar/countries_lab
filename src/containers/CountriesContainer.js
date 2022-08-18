import React, { useEffect, useState } from "react";
import CountrySelector from "../components/CountrySelector";
import CountryDetail from "../components/CountryDetail";
import FavouriteList from "../components/FavouriteList";


const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountry, setFavouriteCountry] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])


    const onCountrySelected = (country) => {
        setSelectedCountry(country);
    }


    const getCountries = function () {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(countriesData => setCountries(countriesData))
    }

    const addFavourite = (country) => {
        const newFavourite = [...favouriteCountry, country];
        if (favouriteCountry.includes(country) === false) {
            setFavouriteCountry(newFavourite)
        }
    }



    return (
        <div>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail country={selectedCountry} addFavourite={addFavourite} /> : null}
            <h2>Favourites: </h2>
            {favouriteCountry.length > 0 ? <FavouriteList favouriteCountry={favouriteCountry} /> : null}

            {/* <CountryDetail addFavourite={addFavourite}/> */}







        </div>
    )
}

export default CountriesContainer;