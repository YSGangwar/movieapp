import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
export const SkeletonCard =() =>{

    return(
        <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    )
}