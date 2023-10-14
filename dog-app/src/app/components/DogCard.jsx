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

export default function DogCard({dogImages,dogBreed}) {

    return (
      <Card sx={{ maxWidth: 240 }}>
        <CardMedia
          sx={{ height: 240, width:240 }}
          image={dogImages}
          title={dogBreed}
        />
        <CardContent>
          <Typography  className='flex flex-wrap' gutterBottom variant="h5" component="div">
            {dogBreed}
          </Typography>
        </CardContent>
      </Card>
    );
  }