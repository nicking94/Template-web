import Clients from "./components/Clients"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Reviews from "./components/Reviews"
import Works from "./components/Works"
import Services from "./components/Services"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Clients />
      <Works />
      <Reviews />
      <Services />
      <Footer />
     </div>
    </>
  )
}

export default App
