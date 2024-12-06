import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {DefaultPage} from './component/DefaultPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultPage}>
          <Route path='/'></Route>
          {/* 
          <Route path='/' Component={}></Route>
          <Route path='/' Component={}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
