import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { auth } from './config/firebase'
import { useCurrentUser } from './custom-hooks/currentUser'
import About from './pages/About'
import View from './pages/View'
import Add from './pages/Add'
import AuthChecker from './auth/AuthChecker'

function App() {

  const currentUser = useCurrentUser(auth);

console.log(window.location.pathname)

  return (
    <BrowserRouter>
        <Navbar userNow={currentUser} />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/about' element= {<About/>} />
          <Route path='/add' element= {<AuthChecker><Add userNow={currentUser}/></AuthChecker>}/>
          <Route path='/view' element= {<AuthChecker><View userNow={currentUser}/></AuthChecker>}/>
        </Routes>
    </BrowserRouter>
  )
}


export default App