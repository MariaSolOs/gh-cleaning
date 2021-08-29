import { createRoute } from 'next-typed-routes';

const routes = {
    home: createRoute('/'),
    about: createRoute('/about'),
    services: createRoute('/services'),
    request: createRoute('/request')
}

export default routes;