"use client";
import * as React from 'react';
import { experimentalStyled as styled, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import Image from 'next/image';
import CardImg from '@/assets/product.png';
import { Container, Card, CardActions, IconButton, Button } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore } from '@mui/icons-material';

const theme = responsiveFontSizes(createTheme());

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MergedComponent() {
  const [value, setValue] = React.useState(2);

  return (
    <div style={{ padding: '130px 0' }}>
      <ThemeProvider theme={theme}>
        <div style={{ textAlign: 'center' }}>
          <Typography color={'#FF3811'} fontSize={'20'} fontWeight={'700'}>
            Popular Products
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: '#151515',
              fontSize: '45px',
              fontWeight: '700',
              my: '20px',
            }}
          >
            Browse Our Products
          </Typography>
          <Typography
            width={{ xs: 'auto', sm: 717 }}
            mx={{ xs: 0, sm: 'auto' }}
          >
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Typography>
        </div>
      </ThemeProvider>
      <Container sx={{ padding: '50px 0' }}>
        <Grid container spacing={3}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={1}>
              <Card sx={{ maxWidth: 364, padding: '25px', margin:'0 auto' }}>
                <Image src={CardImg} height={500} alt="Product Image" />

                <Box pt={'20px'}>
                  <Typography
                    variant="h6"
                    fontSize="25px"
                    fontWeight="700"
                    // textAlign={'center'}
                    color={'#444444'}
                  >
                   Engine Diagnostics
                  </Typography>


        
                  <Typography
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                    color={'#FF3811'}
                    fontSize="20px"
                    fontWeight="600" >
                   Price : $20.00
                   <IconButton >
                  <FavoriteIcon />
                </IconButton>
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" marginTop={'50px'}>
      <Button variant="outlined">More Services</Button>
    </Box>
      </Container>
    </div>
  );
}
