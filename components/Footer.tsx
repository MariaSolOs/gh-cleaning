import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import brandLogo from 'public/images/brand-clear.png';

const Bar = styled.footer`
    width: 100vw;
    padding: 20px 30px;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.darkBlue};
    color: #FFF;
    display: flex;

    @media(max-width: ${BREAKPOINTS.md}) {
        flex-direction: column;
        padding: 0 0 20px;
    }
`;

const Section = styled.div`
    margin-right: 100px;

    @media(max-width: ${BREAKPOINTS.md}) {
        margin: 10px auto;
    }
`;

const Title = styled.h4`
    margin: 0 0 1rem;
    font-size: 1.5rem;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 1.25rem;
    }
`;

const List = styled.ul`
    padding: 0;
    list-style-position: inside;
    margin: 0;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 0.95rem;
    }
`;

const ListItem = styled.li`
    margin: 3px 0;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 1rem;
`;

const Link = styled.a`
    color: #FFF;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 0.95rem;
    }
`;

const Brand = styled.div`
    align-self: flex-end;
    margin-left: auto;
    height: 80px;
    width: 150px;
    position: relative;

    @media(max-width: ${BREAKPOINTS.md}) {
        height: 70px;
        width: 130px;
        margin: 0 auto;
    }
`;

const DAYS = [ 
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
] as const;

const Footer = () => (
    <Bar>
        <Section>
            <Title>Business Hours</Title>
            <List>
                {DAYS.map(day => 
                    <ListItem key={uuid()}>
                        {day}: {day === 'Sunday' ? 'Closed' : '7am - 6pm'}
                    </ListItem>
                )}
            </List>
        </Section>
        <Section>
            <Title>Contact Us</Title>
            <p>
                <Icon icon={faEnvelope} />
                <Link href="mailto:ghc.ecoclean@gmail.com">
                    ghc.ecoclean@gmail.com
                </Link>
            </p>
        </Section>
        <Brand>
            <Image
            src={brandLogo}
            alt="G+H Cleaning"
            layout="fill"
            priority />
        </Brand>
    </Bar>
);

export default Footer;