import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

import type { Props as ServiceSectionProps } from 'components/ServiceSection';

import ServiceSection from 'components/ServiceSection';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons/faCloudSun';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons/faHouseUser';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { faBath } from '@fortawesome/free-solid-svg-icons/faBath';
import { faBed } from '@fortawesome/free-solid-svg-icons/faBed';

const Container = styled.div`
    margin-top: 90px;
`;

const SECTIONS: ServiceSectionProps[] = [
    {
        title: 'Our services',
        subtitle: 'We offer a wide range of services to satisfy every need.',
        services: [
            'Whole house',
            'Deep cleaning: Weekly, bi-weekly or monthly',
            'Tenant cleaning',
            'Move in/out cleaning',
            'Vacation rental cleaning',
            'Organizing/decluttering garage',
            'Event/party cleaning',
            'Basement',
            'Front porch/balcon/terrace',
        ],
        icon: faCloudSun,
        iconAlignment: 'left'
    },
    {
        title: 'Whole house',
        subtitle: 'From the ceilings to the floor, we can clean every space in your home.',
        services: [
            'Ceiling and fan cobweb removal',
            'Dust surfaces/baseboards',
            'Dust furniture',
            'Polish wood/appliances',
            'Dust blinds/windows insides',
            'Vacuum/sweep/mop floors, including tile and carpet flooring',
            'Empty trash and replace liners',
            'Vacuum and clean halls and stairs',
            'Clean power switches and sockets',
            'Clean glass, mirrors and lightning'
        ],
        icon: faHome,
        iconAlignment: 'right'
    },
    {
        title: 'Deep cleaning',
        subtitle: 'Reaching the deep and stubborn dirt.',
        services: [
            'Clean front and back doors',
            'Wipe glass photo frames',
            'Organize and clean medicine cabinets',
            'Laundry service: Wash/dry/fold/put away',
            'Organize toys and playrooms',
            'Wipe fans and lamps',
            'Help with moving furniture',
            'Sofa cleaning',
            'Change/wash/dry/fold bed sheets and liners',
            'Clean windows interiors/exteriors, including sashes'
        ],
        icon: faHouseUser,
        iconAlignment: 'left'
    },
    {
        title: 'Kitchen',
        services: [
            'Clean the inside and outside of microwaves, toaster and other appliances.',
            'Wipe the countertops',
            'Deep clean the oven stove',
            'Desinfect and polish sinks',
            'Shine stainless-steel appliances',
            'Clean/wipe refrigerator insides',
            'Clean/wipe kitchen cabinets and drawers',
            'Clean dining tables and chairs',
            'Wipe the kitchen backsplash',
            'Organize/wipe bathroom drawers',
            'Clean oven insides',
            'Dishes/sink load'
        ],
        icon: faUtensils,
        iconAlignment: 'right'
    },
    {
        title: 'Bathroom',
        services: [
            'Sanitize the toilet',
            'Deep clean the shower, tub and sink',
            'Clean the walls and floors',
            'Wipe the mirrors and glass fixtures'
        ],
        icon: faBath,
        iconAlignment: 'left'
    }, 
    {
        title: 'Bedroom',
        services: [
            'Make the beds',
            'Clean the windows and floors',
            'Dust the furniture',
            'Dust reachable lamps and fans'
        ],
        icon: faBed,
        iconAlignment: 'right'
    }
];

const ServicesPage = () => (
    <Container>
        {SECTIONS.map(sectionProps => 
            <ServiceSection key={uuid()} { ...sectionProps } />
        )}
    </Container>
);

export default ServicesPage;