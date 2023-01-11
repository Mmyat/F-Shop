import React from 'react'
import ProductProvider from './pages/Productprovider';
import Routing from './pages/Routing';
const App = () => {
  return (
    <ProductProvider>
      <Routing/>
    </ProductProvider>
  )
}

export default App;