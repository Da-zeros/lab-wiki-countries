import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const CountryDetails = ({countryListProp2}) => {
    
    const flagUri = " https://flagpedia.net/data/flags/icon/72x54/"
    const format = ".png"

    const [countryDetail, setCountryDetail] = useState({})
    const [filteredList, setfilteredList] = useState([])
    const [code3, setCode3] = useState()

    const { alpha3Code } = useParams();
    
    useEffect(()=>{
        if(!alpha3Code)return
        const detailData = async () =>{
           try{

               const data = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
               setCountryDetail(data.data)

                const filtered = countryListProp2&& countryListProp2.filter(country =>{
                return data.data.borders.includes(country.alpha3Code)})

                setCode3(filtered)

            }
            catch(err){console.log(err)}
        }
        detailData()
        
    },[alpha3Code])
    useEffect(()=>{console.log(code3)},[])

    return (
        
    <div>
        {countryDetail&&countryDetail.alpha2Code&& 
            <>
            <img src={`${flagUri}${countryDetail.alpha2Code.toLowerCase()}${format}`}/>
            <h2>{countryDetail.name.common}</h2>
            <p>Capital: {countryDetail.capital}</p>
            <hr></hr>
            <p>Area: {countryDetail.area}</p>
            <hr></hr>
            {code3 && code3.length!=0
            ?
                
                code3.map(country=>{
                    return(
                            <>
                            <Link 
                                to={`/${country.alpha3Code}`}>
                                    {country.name.common}   
                            </Link>
                            <br></br>
                            </>)
                })
                
            :<p>No borders to show...</p>}
            <hr></hr>
            </>
        }
       
    </div>
  )
}

export default CountryDetails