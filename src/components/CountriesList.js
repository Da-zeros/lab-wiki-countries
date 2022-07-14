import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


function CountriesList({countryListProp}) {

    console.log(countryListProp)
    
    return (
       <>
        <ul>
        {countryListProp && countryListProp.map(country=>{
                return (
                    <ul><Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>{country.name.common}</Link></ul>
                )
            })}
        </ul>
       </> 
  )
}

export default CountriesList
