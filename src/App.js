import MyNavbar from './components/MyNavbar'
import Home from './components/home/Home'
import Footer from './components/Footer'
require('dotenv')
function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <Footer />
    </>
  )
}

export default App;
