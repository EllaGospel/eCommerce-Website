import {useEffect, useState, createContext} from 'react';

const ProductContext = createContext();

export const ProductsProvider = ({children}) => {
  const [Products, setProducts] = useState([]);

  const fetchData = () =>{
    fetch('https://dummyjson.com/products').then(res => res.json())
    .then((data)=> setProducts(data.products))
    
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (

    <ProductContext.Provider value={{Products}}>
      {children}
    </ProductContext.Provider>
    
  )

}
  
export default ProductContext;
