"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  List,
  Icon,
} from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "none",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));


  
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'white', 
    background: 'rgba(65, 65, 65, 1)', 
    borderRadius: 999, 
    padding: '16px',
    fontSize: 24,
  };

export default function Footer() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/Services",
    },
    {
      name: "Blog",
      link: "/Blog",
    },
    {
      name: "Contact",
      link: "/Contact",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid xs={12} md={5} lg={4}>
            <Typography variant="h6" sx={{ my: 2 }}>
              MUI
            </Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
            </Typography>
            <Item sx={{ display: 'flex', gap: '15px' }}>
            <Link href="/google" >
        <Icon style={linkStyle}>
          <GoogleIcon />
        </Icon>
      </Link>

      <Link href="/twitter" >
        <Icon style={linkStyle}>
          <TwitterIcon />
        </Icon>
      </Link>

      <Link href="/linkedin" >
        <Icon style={linkStyle}>
          <LinkedInIcon />
        </Icon>
      </Link>

      <Link href="/instagram" >
        <Icon style={linkStyle}>
          <InstagramIcon />
        </Icon>
      </Link>
            </Item>
          </Grid>
          <Grid container xs={12} md={7} lg={8}>
            <Grid xs={6} lg={3}>
              <Item>
                <Typography variant="h6" sx={{ my: 2 }}>
                  About
                </Typography>
           
                <List >
                  {navItems.map((post) => (
                    console.log(post),
                    <ListItem key={post.name} component="div" sx={{ padding: 0 }}>
                      <Link href={post.link}>
                        <ListItemText primary={post.name} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Item>
            </Grid>
            <Grid xs={6} lg={3}>
              <Item>
                <Box
                  id="category-b"
                  sx={{ fontSize: "12px", textTransform: "uppercase" }} >
                  Category B
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  <li>Link 2.1</li>
                  <li>Link 2.2</li>
                  <li>Link 2.3</li>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6} lg={3}>
              <Item>
                <Box
                  id="category-c"
                  sx={{ fontSize: "12px", textTransform: "uppercase" }}>
                  Category C
                </Box>
                <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                  <li>Link 3.1</li>
                  <li>Link 3.2</li>
                  <li>Link 3.3</li>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6} lg={3}>
              <Item>
                <Box
                  id="category-d"
                  sx={{ fontSize: "12px", textTransform: "uppercase" }}
                >
                  Category D
                </Box>
                <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                  <li>Link 4.1</li>
                  <li>Link 4.2</li>
                  <li>Link 4.3</li>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
