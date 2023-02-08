// import Banner from "./components.jsx/Banner";
// import About from "./components.jsx/About";
import Sort from "./components.jsx/Sort";
import Categories from "./components.jsx/Categories";
import Mainbody from "./components.jsx/Mainbody";
 import { ProductsProvider } from "./components.jsx/Context/ProductContext";

function App() {
  return (
    <>
     <ProductsProvider>
     {/* <Banner/>
    <About/> */}
    <Sort/> 
 
    <div className="flex justify-between">
     <Categories />
      <Mainbody/>
    </div>
  </ProductsProvider>
    </>
  );
}

export default App;
