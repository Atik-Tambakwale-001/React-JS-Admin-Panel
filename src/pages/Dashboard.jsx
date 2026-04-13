import React,{useState} from 'react'
import { Box,Container } from '@mui/material'
import ProductForm from '../components/ProductForm'
import ProductTable from '../components/ProductTable'

export default function Dashboard() {
  const [products,setProducts] = useState([
    // { id: 1, name: 'Product 1', price: '$10', description: 'This is product 1' }
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  }

  // const updateProduct = (products) => {
  //   setProducts(products.map((p) => p.id === products.id ? products : p));
  // }

  return (
    <div>
      <Container>
        <Box sx={{display:'flex',flexDirection:'column',gap:4,alignItems:'center'}}>
          <ProductForm addProduct={addProduct} />
          <ProductTable products={products} deleteProduct={deleteProduct} />
        </Box>
      </Container>
    </div>
  )
}
 