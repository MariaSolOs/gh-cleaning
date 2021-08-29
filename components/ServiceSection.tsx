import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Section = styled.section`
    display: flex;
    width: 100vw;
`;

const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.lightGreen};
    width: 40vw;
    min-height: 100%;

    @media(max-width: ${BREAKPOINTS.md}) {
        width: 30vw;
    }
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 6rem;
    color: ${props => props.theme.colors.darkGreen};

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 4rem;
    }
`;

const ListBox = styled.div`
    width: 60vw;
    padding: 10px 40px;
    box-sizing: border-box;

    @media(max-width: ${BREAKPOINTS.md}) {
        width: 70vw;
    }

    @media(max-width: ${BREAKPOINTS.sm}) {
        padding: 10px 20px;
    }
`;

const ServiceDescription = styled.p`
    margin: 10px 0 1rem;
    color: ${props => props.theme.colors.darkGreen};
`;

const ServiceTitle = styled.span`
    font-weight: 600;
    font-size: 1.3rem;
    margin-right: 10px;
`;

const List = styled.ul`
    padding: 0;
    list-style-position: inside;
    margin: 0;

    @media(max-width: ${BREAKPOINTS.sm}) {
        font-size: 0.9rem;
    }
`;

const ListItem = styled.li`
    margin: 5px 0;
`;

export type Props = {
    title: string;
    subtitle?: string;
    services: string[]; 
    icon: IconDefinition;
    iconAlignment: 'left' | 'right';
}

const ServiceSection = (props: Props) => (
    <Section>
        {props.iconAlignment === 'left' && 
            <IconBox><Icon icon={props.icon} /></IconBox>}
        <ListBox>
            <ServiceDescription>
                <ServiceTitle>{props.title}:</ServiceTitle> {props.subtitle}
            </ServiceDescription>
            <List>
                {props.services.map(service => 
                    <ListItem key={uuid()}>{service}</ListItem>
                )}
            </List>
        </ListBox>
        {props.iconAlignment === 'right' && 
            <IconBox><Icon icon={props.icon} /></IconBox>}
    </Section>
);

export default ServiceSection;