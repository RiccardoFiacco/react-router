import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultPageLayout}>
          <Route path='/' Component={DefaultPageLayout}></Route>
          <Route path='/' Component={DefaultPageLayout}></Route>
          <Route path='/' Component={DefaultPageLayout}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
