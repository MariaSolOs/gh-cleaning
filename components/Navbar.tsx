import styled from 'styled-components';

import routes from 'routes';
import { BREAKPOINTS } from 'global-constants';

import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/brand.jpg';

const Bar = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 10px;
    height: 90px;
    box-sizing: border-box;

    @media(max-width: ${BREAKPOINTS.sm}) {
        flex-direction: column;
    }
`;

const Brand = styled.a`
    margin: 0 auto 0 0;
    position: relative;
    min-width: 150px;
    height: 70px;

    @media(max-width: ${BREAKPOINTS.md}) {
        height: 50px;
        min-width: 90px;
    }

    @media(max-width: ${BREAKPOINTS.sm}) {
        margin: 0;
    }
`;

const NavLinks = styled.div`
    margin-left: auto;

    @media(max-width: ${BREAKPOINTS.sm}) {
        margin: 5px 0 0;
    }
`;

const NavLink = styled.a`
    color: ${props => props.theme.colors.darkBlue};
    font-weight: 600;
    margin-right: 2rem;
    font-size: 1rem;
    white-space: nowrap;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 0.9rem;
    }

    @media(max-width: ${BREAKPOINTS.sm}) {
        margin: 0 5px 0;
    }
`;

const Navbar = () => (
    <Bar>
        <Link { ...routes.home } passHref>
            <Brand>
                <Image
                src={logo}
                alt="G+H Cleaning"
                layout="fill"
                objectFit="contain"
                priority />
            </Brand>
        </Link>
        <NavLinks>
            <Link { ...routes.about } passHref>
                <NavLink>About us</NavLink>
            </Link>
            <Link { ...routes.services } passHref>
                <NavLink>Services</NavLink>
            </Link>
            <Link { ...routes.request } passHref>
                <NavLink>Submit a request</NavLink>
            </Link>
        </NavLinks>
    </Bar>
);

export default Navbar;