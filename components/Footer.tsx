import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

const Bar = styled.footer`
    width: 100vw;
    padding: 20px 30px;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.darkBlue};
    color: #FFF;
`;

const HoursTitle = styled.h4`
    margin: 0 0 1rem;
    font-size: 1.5rem;
`;

const List = styled.ul`
    padding: 0;
    list-style-position: inside;
    margin: 0;
`;

const ListItem = styled.li`
    margin: 3px 0;
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

const Footer = () => {
    return (
        <Bar>
            <HoursTitle>Business Hours</HoursTitle>
            <List>
                {DAYS.map(day => 
                    <ListItem key={uuid()}>
                        {day}: {day === 'Sunday' ? 'Closed' : '7am - 6pm'}
                    </ListItem>
                )}
            </List>
        </Bar>
    );
}

export default Footer;