"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CardImg from '@/assets/product.png'
import Image from 'next/image'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';


export default function Products() {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    const [value, setValue] = React.useState(2);
  return (

    <>
<ThemeProvider theme={theme}>
  <div style={{ textAlign: 'center' }}>
    <Typography variant="h4">Popular Products</Typography>
    <Typography variant="h2">Browse Our Products</Typography>
    <Typography>
      The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
    </Typography>
  </div>
</ThemeProvider>




   

    <Card sx={{ maxWidth: 345, padding:'25px' }}>
     <Image
      src={CardImg}
      width={500}
      height={500}
      alt="Picture of the author" />
      <CardContent>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }} >
      <Typography textAlign={'center'}>Controlled</Typography>
      <Rating
        sx={{display:'flex', justifyContent:'center'}}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} />
     
    </Box>
      </CardContent>
      <Typography textAlign={'center'}>$20.00</Typography>
    </Card>
    </>
  );
}