import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {DefaultPage} from './component/DefaultPage'
import { Home } from './component/Main/home/Home'
import { ChiSiamo } from './component/Main/chisiamo/ChiSiamo'
import { Posts } from './component/Main/posts/Posts'
import { Try1 } from './component/componentses/try1'
import { Try2 } from './component/componentses/try2'
import { Try3 } from './component/componentses/try3'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultPage}>
          <Route path='/' Component={Home}></Route>
          <Route path='/chi_siamo' Component={ChiSiamo}></Route>

          <Route path='posts' Component={Posts}>
            <Route path='try1' Component={Try1}></Route>
            <Route path='try2' Component={Try2}></Route>
            <Route path='try3' Component={Try3}></Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
