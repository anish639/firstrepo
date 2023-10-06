import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './Style.css'


const WeatherApp = () => {
    const [country, setCountry] = useState('')
    const [sub, setSub] = useState(true)
    const [data, setData] = useState([])
   const navigate = useNavigate()

    const handleChange = (e) => {
        if(e.target.value){
         setSub(false)   
         setCountry(e.target.value)
        }else{
            setSub(true)
        }   
       
    }

    const handleClick = () =>{
     navigate('/state',{ state:data })
    }

    useEffect(()=>{
        const getCountry = async() =>{
          try{
             const response = await fetch(`https://restcountries.com/v3.1/name/${country}`) 
             const responseData = await response.json()
             if(!responseData){
                console.log('api error')
             }else{
                setData(responseData)
             }             
          }catch(error){
            console.log(error,'errorCountryApi')
          }
        }

        getCountry()
    },[country])

    console.log(data?.name?.nativeName?.hin?.official,'<<<<<<<<<<<>>>>>>>>>>>>')
    return (
        <div className='mainContainer'>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
                placeholder='Enter Country Name'
                autoFocus={true}
                onChange={(e) => handleChange(e)}
            />
            <button disabled={sub}
            onClick={handleClick}
            >Submit</button>
        </div>
    )
}

export default WeatherApp