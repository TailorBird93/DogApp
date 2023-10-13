"use client" // This is a client component 👈🏽

import axios from 'axios';
import { useState,useEffect } from 'react';
// MUI Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DogCard() {
    const [dogImage,setDogImage]=useState('');
    // Fetch Random image from dog.ceo API
    useEffect(()=>{
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then((response)=>{
                setDogImage(response.data.message)
            })
            .catch((err)=>{
                console.err('Error fetching dog image',err);
            })
    },[])

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={dogImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }