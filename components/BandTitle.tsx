import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';

export default styled.h1`
    text-align: center;
    width: 100vw;
    background-color: ${props => props.theme.colors.lightGreen};
    color: ${props => props.theme.colors.darkGreen};
    padding: 10px 0;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 1.3rem;
        padding: 8px 0l
    }
`;