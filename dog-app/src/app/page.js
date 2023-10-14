"use client" // This is a client component 👈🏽
import { useEffect,useState } from 'react'
import globals from '../app/globals.css'
import Image from 'next/image'

import axios from 'axios';
import DogCard from './components/DogCard';
// MUI Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';

export default function Home() {
  const [dogImages, setDogImages] = useState([]);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const populateDogs = () => {
    // Fetch dog images and breeds when the button is clicked
    axios
      .get('https://dog.ceo/api/breeds/image/random/10')
      .then((response) => {
        const imageURLs = response.data.message;
        setDogImages(imageURLs);

        // Extract breed names from image URLs (you can improve this logic)
        const breeds = imageURLs.map((url) => {
          const parts = url.split('/');
          const breed = parts[parts.length - 2];
          return breed.charAt(0).toUpperCase() + breed.slice(1);
        });
        setDogBreeds(breeds);
      })
      .catch((error) => {
        console.error('Error fetching dog images', error);
      });

    // Set the buttonClicked state to true
    setButtonClicked(true);
  };

  return (
    <div>
      <Button variant="outlined" startIcon={<PetsIcon />} onClick={populateDogs}>
        What Dog are you today?
      </Button>

      {/* Render DogCard components if the button has been clicked */}
      {buttonClicked && (
        dogImages.map((dogImage, index) => (
          <DogCard key={index} dogImages={dogImage} dogBreed={dogBreeds[index]} />
        ))
      )}
    </div>
  );
}
