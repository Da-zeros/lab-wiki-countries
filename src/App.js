import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar.js"
import CountriesList from "./components/CountriesList.js";
import CountryDetails from "./components/CountryDetails.js"
import countryJsonData from "./countries.json"
import { useState, useEffect } from 'react';
import axios from 'axios'


function App() {

  const [countryList, setCountryList] = useState([])

  useEffect(()=>{
    
    try {

      const getCountryData =  async () => {
        const countryData = await axios
        .get("https://ih-countries-api.herokuapp.com/countries")
        setCountryList(countryData.data)
      }

      getCountryData()

    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <div className="App">
      <NavBar/>
      <div className="mainContainer">
        <CountriesList countryListProp={countryList}/>
        <Routes>
          <Route path="/:alpha3Code" element={<CountryDetails countryListProp2={countryList}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
