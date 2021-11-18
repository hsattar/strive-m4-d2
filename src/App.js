import MyNavbar from './components/MyNavbar'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

require('dotenv')
function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
