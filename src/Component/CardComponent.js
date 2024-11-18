import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button} from '@mui/material';
import styled from 'styled-components';

const ImageContainer = styled(CardMedia)`
 height:142px;
`
//set default props of Card media
ImageContainer.defaultProps = {
 component:"img",
 image:`${(props) => props.image}`,
 alt:`${(props) => props.alt}`
}

const ImageCard = styled(Card)`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    padding: 3px;
`

const ImageDiv = styled.div`
 
`

const CardComponent = ({ image, title, price, onClick , id}) => {
  return (
    <ImageCard>
      <ImageDiv>
        <ImageContainer image={image} alt={title}/>
      </ImageDiv>
      <CardContent>
        <Typography variant="h6" color="primary">
          ${price}
        </Typography>
      </CardContent>
      <Button size="small" onClick={() => onClick(id)}>View Details</Button>
    </ImageCard>
  );
};

export default CardComponent;
