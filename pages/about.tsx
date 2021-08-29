import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';

const Title = styled.h1`
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

const Text = styled.p`
    max-width: 900px;
    margin: 1rem auto;
    font-size: 1.1rem;
    line-height: 1.3;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 0.95rem;
        max-width: 90vw;
    }
`;

const List = styled.ul`
    margin: -5px auto 2rem;
    font-size: 1.1rem;
    width: fit-content;
    max-width: 500px;
    text-align: left;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 0.95rem;
        max-width: 90vw;
    }
`;

const ListItem = styled.li`
    margin: 3px 0;
`;

const AboutPage = () => {
    return (
        <>
            <Title>Who We Are</Title>
            <Text>
                With more than 12 years of experience in house-cleaning services,
                G+H Cleaning was created as a family-owned business in Long Island.
                We are specialized in residential cleaning and provide a wide range 
                of services, whether you want a weekly or bi-weekly help, or just a 
                one-time cleaning service. We will design your maid service around 
                your needs.
            </Text>
            <Text>
                Our cleaners are completely screened, trained, and ensured the 
                proper protection. House cleaning is available from Monday to 
                Saturday, providing you a convenient scheduling for you to choose
                the day that suits you best.
            </Text>
            <Text>
                We work with a wide variety of natural and non-toxic products, safe
                for children and pets.
            </Text>
            <Title>Safety Protocols</Title>
            <Text>
                The health and well-being or our customers is our main priority. 
                To ensure this we ask our employees to:
            </Text>
            <List>
                <ListItem>Follow social distancing.</ListItem>
                <ListItem>Wash their hands frequently.</ListItem>
                <ListItem>Wear gloves and a mask or face covering while working.</ListItem>
                <ListItem>
                    Pause their work if exposed to COVID-19, and resume their
                    activity until cleared by a medical professional.
                </ListItem>
                <ListItem>Receive the COVID vaccine.</ListItem>
            </List>
            <Text>
                Likewise, we wish to keep our cleaners safe. Prior to cleaning your
                household, let us know if you or other family member has:
            </Text>
            <List>
                <ListItem>Experienced COVID-19 symptoms.</ListItem>
                <ListItem>Tested positive for COVID-19.</ListItem>
                <ListItem>Had close contact with confirmed or suspected COVID-19 cases.</ListItem>
            </List>
        </>
    );
}

export default AboutPage;