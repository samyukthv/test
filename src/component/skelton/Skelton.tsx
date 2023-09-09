
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Grid container className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from(new Array(10)).map((item, index) => (
        <>
        <div className='p-5 hidden md:flex'>
        <Skeleton key={index} variant="rectangular" width={330} height={400} />

        </div>
        <div className='p-5  md:hidden'>
        <Skeleton key={index} variant="rectangular" width={150} height={250} />

        </div>
        </>
))}
    </Grid>
  );
}

export default function YouTube() {
  return (
    <Box>
      <Media loading />
    </Box>
  );
}
