import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const CountryDetails = ({countryJsonDataProp}) => {
    
    const uri = " https://flagpedia.net/data/flags/icon/72x54/"
    const format = ".png"

    const [countryDetail, setCountryDetail] = useState({})
    const [alpha2Code, setAlpha2Code] = useState("")
    
    const { alpha3Code } = useParams();
    
    useEffect(()=>{
        
        

        const filteredCountry = countryJsonDataProp.filter((country)=>{
            return country.alpha3Code === alpha3Code})
            
            setCountryDetail(filteredCountry[0])    
            setAlpha2Code(filteredCountry[0].alpha2Code.toLowerCase())  
    },[])
    
    useEffect(()=>{
        console.log(alpha2Code)
        
    },[countryDetail])

    
    
    return (
    <>
        <div>CountryDetails</div>
        <img src={`${uri}${alpha2Code}${format}`}/>

        <Link to="/">Back to CountryList</Link>
    </>
  )
}

export default CountryDetails