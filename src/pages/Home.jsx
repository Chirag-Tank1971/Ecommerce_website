import { Navbar, Main, Product, Footer } from "../components";
import {Hoome} from "../pages/hoome.css";

function  Home() {
  return (
    <>
    <div className="main_home">
    <Navbar />
      <Main />
      <Product />
      <Footer />
    </div>
      
    </>
  )
}

export default Home