import { Skeleton } from '@mui/material';
import { SkeletonCardImage, sx } from './skeletons.styles';
import {
    CardPrimaryStyled,
    CardImgContainer,
    Article,
} from './skeletons.styles'

const SkeletonFeedList = () => {
    const skeletonArticles = Array(10).fill(0);
    return (
        <>
            {skeletonArticles.map((_, index) => (
                <CardPrimaryStyled key={`skeleton-card-${index}`}>
                    <CardImgContainer>
                        <SkeletonCardImage
                            sx={sx}
                            variant='rounded'
                            width={'100%'}
                            height={'100%'}
                        />
                    </CardImgContainer>
                    <Article >
                        <Skeleton
                            variant='text'
                            sx={sx}
                            width={'30%'}
                            height={'1.375rem'}
                        />
                        <div>
                            <Skeleton
                                variant='text'
                                sx={sx}
                                width={'95%'}
                                height={'2.5rem'}
                            />
                        </div>
                        <Skeleton
                            variant='text'
                            sx={sx}
                            width={'50%'}
                            height={'1.375rem'}
                        />
                        <div>
                            <Skeleton variant='text' sx={sx} width={'100%'} />
                            <Skeleton variant='text' sx={sx} width={'100%'} />
                            <Skeleton variant='text' sx={sx} width={'100%'} />
                            <Skeleton variant='text' sx={sx} width={'100%'} />
                        </div>
                    </Article>
                </CardPrimaryStyled>
            ))}
        </>
    );
};

export default SkeletonFeedList;
