
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Layout = ({children}) => {
  return (
      <div>
          <Navbar/>
              {children}
          <Footer/>
      </div>
  )
}


function App() {
  return (
      <div className="App">
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/favs' element={<Favs/>}/>
              <Route path='/dentist/:id' element={<Detail/>}/>
              <Route path='/*' element={<Navigate to={"/home"} />} />
            </Routes>
          </Layout>
      </BrowserRouter>
      </div>
  );
}

export default App;
