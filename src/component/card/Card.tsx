
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import User from '../../model/UserInterface';

export default function UserCard({ user }: { user: User })  {

    
  return (
   
      <div className='p-4'>
          <Card sx={{ maxWidth: 345 }}    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={user?.picture?.large}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user?.name?.last}
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </div>
    
  );
}
