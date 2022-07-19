import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import CountryDetails from './CountryDetails';


function CountriesList({countryListProp, children}) {

    const flagUri = " https://flagpedia.net/data/flags/icon/72x54/"
    const format = ".png"

    return (
        <div className="list">
            <ul class="listStyle">
            {countryListProp && countryListProp.map(country=>{
                    return (
                    <Link  key={country.alpha3Code} to={`/${country.alpha3Code}`}>
                        <li className="lista-li">
                            {country.name.common}
                            <img src={`${flagUri}${country.alpha2Code.toLowerCase()}${format}`}/>
                        </li>
                    </Link>
                    )
                })}
            </ul>
        </div>
  )
}

export default CountriesList
