import React from 'react';
import Slider from './Slider';
import { useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Vada from '../Images/Vada.jpeg';
import '../css/Home.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons
import View from './View';

import Header from './Header';
import Fashion from '../Images/Fashion.jpg';
import Chicken from '../Images/Food1.jpg';
import idli from '../Images/Idli.jpeg';
import Upma from '../Images/Upma.jpeg';
import Burger from '../Images/Burger.jpeg';
import Biriyani from '../Images/Biriyani.jpeg';
import Noodles from '../Images/Noodles.jpeg';
import Coffee from '../Images/Coffee.jpeg';


// Reusable CustomCard component
const CustomCard = ({ image, title }) => (
  <Card sx={{ maxWidth: 200, textAlign: "center", padding: "10px" }}>
    <CardMedia
      component="img"
      alt={title}
      height="140"
      image={image}
      sx={{
        width: "100px", 
        height: "100px",
        borderRadius: "50%", 
        objectFit: "cover",
        margin: "auto"
      }}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
    </CardContent>
  </Card>
);



export default function Home() {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div style={{width:"100%"}}>

  <Header />

<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

<div className="Home">
      
    <div style={{ width: "100%", textAlign: "left", paddingLeft: "350px" }}>
    Choose the Food..
      </div>
      <div className="Image" style={{ 
        display: 'flex', 
        gap: '20px', 
        boxShadow: "none",
        paddingBottom: '10px', 
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <CustomCard image={Chicken} title="Chicken" />
        <CustomCard image={Burger} title="Burger" />
        <CustomCard image={Biriyani} title="Biriyani" />
        <CustomCard image={Noodles} title="Noodle" />
        <CustomCard image={Coffee} title="Coffee" />
        <CustomCard image={Fashion} title="Fashion" />
        <CustomCard image={Fashion} title="Fashion" />
        <CustomCard image={Fashion} title="Fashion" />
        <CustomCard image={Fashion} title="Fashion" />

        <button onClick={scrollRight} className="arrow-button right">
          <FaChevronRight />
        </button>

      </div>
      <div className="slider-container">
  <Slider />
</div>


     
     
        <View />
      </div>
    </div>
    </div>
  
    )
}