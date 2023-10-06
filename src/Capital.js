import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
const Capital = () => {
 const location = useLocation()
 const [capita,setCapital] = useState()
 console.log(capita?.wind_speed,'<<<<<<<<>>>>>>>>>.')
 useEffect(()=>{
     const getCapital = async() =>{
        try{
         const res = await fetch(`http://api.weatherstack.com/current?access_key=d15d41d937fab84c2ad4a5a53b1c0f68&query=${location.state.state[0]?.capital[0]}`)
         const resData = await res.json()
         if(resData){
            setCapital(resData)
         }else{
            console.log('no api data')
         }
        }catch(err){
            console.log(err,'err')
        }
     }
     getCapital()
 },[location])

  return (
    <div>
        <h1>Tempetaure:{capita?.current?.temperature}</h1>
        <h1>wind_speed:{capita?.current?.wind_speed}</h1>
        <h1>precipitation:{capita?.current?.precip}</h1>
        <img src={`${capita?.current?.weather_icons}`} style={{height:200,width:200}}/>

    </div>
  )
}

export default Capital

// - temperature
// - weather_icons (render the image from the URL provided in the response) -
// - wind_speed
// - precipitation
