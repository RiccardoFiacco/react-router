import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {DefaultPage} from './component/DefaultPage'
import { Home } from './component/Main/home/Home'
import { ChiSiamo } from './component/Main/chisiamo/ChiSiamo'
import { Posts } from './component/Main/posts/Posts'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultPage}>
          <Route path='/' Component={Home}></Route>
          <Route path='/chi_siamo' Component={ChiSiamo}></Route>
           <Route path='/posts' Component={Posts}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
