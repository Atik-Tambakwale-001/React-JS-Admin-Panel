import React,{useState} from 'react'
import { Box, Typography,Button,TextField } from '@mui/material'

export default function ProductForm({addProduct}) {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: ''
  });

  const handleConstantChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    addProduct(product);
    setProduct({
      id: '',
      name: '',
      price: '',
      description: ''
    })
  };

  return (
    <div>
      <Box component='form' onSubmit={handleSubmit} sx={{display:'flex',flexDirection:'column',gap:2,maxWidth:400}}>
        <Typography variant='h6'>
          Add New Products
        </Typography>
        <TextField label='ID' name='id' value={product.id} onChange={handleConstantChange} required/>
        <TextField label='Name' name='name' value={product.name} onChange={handleConstantChange} required/>
        <TextField label='Price' name='price' value={product.price} onChange={handleConstantChange} required/>
        <TextField label='Description' name='description' value={product.description} onChange={handleConstantChange} required/>
        <Button type='submit' variant='contained'>
          Add Product
        </Button>
      </Box>
    </div>
  )
}
