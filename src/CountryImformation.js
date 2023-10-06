import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const CountryImformation = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/capital', { state: location })
    }
  return (
    <div>
        <h1>Capital:{location.state[0]?.capital[0]}</h1>
        <h1>Population:{location.state[0]?.population}</h1>
        <h1>Longitude:{location.state[0]?.latlng[1]}</h1>
        <h1>Latitude:{location.state[0]?.latlng[0]}</h1>
        <img src={location.state[0]?.flags?.png} style={{height:200,width:200}}/>
        <button onClick={handleClick}>Capital Information</button>
    </div>
  )
}

export default CountryImformation