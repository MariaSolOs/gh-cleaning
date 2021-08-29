import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';

import Image from 'next/image';

const Hero = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    background-color: ${props => props.theme.colors.lightGreen};
`;

const ImageWrapper = styled.div`
    width: 47vw;
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

const IMAGE_URL = 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80';

const HomePage = () => (
    <Hero>
        <ImageWrapper>
            <Image
            src={IMAGE_URL}
            alt="G+H Cleaning"
            layout="fill"
            objectFit="cover" />
        </ImageWrapper>
        <div>
            <Title>G+H Cleaning</Title>
            <Subtitle>More than cleaning: Caring</Subtitle>
        </div>
    </Hero>
);

export default HomePage
