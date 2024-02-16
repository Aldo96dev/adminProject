import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './Layout/AuthLayout'
import Login from './Paginas/Login'
import ConfirmarCuenta from './Paginas/ConfirmarCuenta'
import Registrar from './Paginas/Registrar'
import OlvidePasswornd from './Paginas/OlvidePasswornd'

function App() {
  
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>
          <Route path='registrar' element={<Registrar/>}/>
          <Route path='olvide-password' element={<OlvidePasswornd/>}/>
        </Route>

        
      </Routes>
    </BrowserRouter>
  )
}

export default App


