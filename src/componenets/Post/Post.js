import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Post = ({value}) => {

    return(
        <div className='pt-4'>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={value.image}
            // alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {value.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {value.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    )

}

export default Post;