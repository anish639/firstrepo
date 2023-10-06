import React from 'react'
import WeatherApp from './WeatherApp'
import CountryImformation from './CountryImformation'
import Capital from './Capital'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import AddTodo from './Component/AddTodo'
import Todos from './Component/Todos'
const App = () => {

  return (
      // <Router>
      //    <Routes>
      //    <Route exact path="/" element={<WeatherApp/>} />
      //    <Route path="/state" element={<CountryImformation/>} />
      //    <Route path="/capital" element={<Capital/>} />
      // </Routes>
      // </Router>
     <>
      <AddTodo /><Todos /></>
  
  )
}

export default App
