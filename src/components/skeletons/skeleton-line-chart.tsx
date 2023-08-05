import { Skeleton } from '@mui/material'
import {
    SkeletonSecondaryCardContainer,
    StyledSkeletonAreaChart,
    sx,
} from './skeletons.styles';

const SkeletonAreaChart = () => {
    return (
        <SkeletonSecondaryCardContainer>
            <StyledSkeletonAreaChart
                variant='rectangular'
                width={'100%'}
                height={'70%'}
                sx={sx}
            />
            <Skeleton variant='text' sx={sx} width={'100%'} height={'1.375rem'} />
        </SkeletonSecondaryCardContainer>
    );
};

export default SkeletonAreaChart;
