import { Skeleton } from '@mui/material';
import { feedListTitleSx } from './skeletons.styles';

const SkeletonFeedTitle = () => {
    return (
        <>
            {/* <Article > */}
            <Skeleton
                variant='text'
                sx={feedListTitleSx}
                width={'20%'}


            />

            {/* </Article> */}
        </>
    );
};

export default SkeletonFeedTitle;
