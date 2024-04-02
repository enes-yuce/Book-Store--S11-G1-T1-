import { createContext, useContext, useState } from 'react';
import { data } from '../data';
// import { CartContext } from './CartContext';

export const ProductContext = createContext();

// const a = '1234';

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(data);
  // const { addItem } = useContext(CartContext);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);

/*
export const ProductContext = createContext();
export default ProductContextProvider; */
