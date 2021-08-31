import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';

import Image from 'next/image';
import homeImg from 'public/images/home-main.jpg';

const Hero = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    background-color: ${props => props.theme.colors.lightGreen};
`;

const ImageWrapper = styled.div`
    width: 40vw;
    height: 400px;
    position: relative;
    margin-right: 3vw;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 0;

    @media(max-width: ${BREAKPOINTS.sm}) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.h2`
    font-weight: 400;
    font-style: italic;

    @media(max-width: ${BREAKPOINTS.sm}) {
        font-size: 1.5rem;
    }
`;

const HomePage = () => (
    <Hero>
        <ImageWrapper>
            <Image
            src={homeImg}
            alt="G+H Cleaning"
            layout="fill"
            objectFit="cover"
            placeholder="blur" />
        </ImageWrapper>
        <div>
            <Title>G+H Cleaning</Title>
            <Subtitle>More than cleaning: Caring</Subtitle>
        </div>
    </Hero>
);

export default HomePage
