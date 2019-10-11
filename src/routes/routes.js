import React from 'react';

// import Components
import ourComp from './routes.components';

const routes = [
    {
        path: '/',
        exact: true,
        private: false,
        component: (props) => <ourComp.MainHome {...props} />
    },
    {
        path: '/offerList/:offer_name',
        exact: true,
        private: false,
        component: (props) => <ourComp.OfferList {...props} />
    },
    {
        path: '/details/:category/:id',
        exact: true,
        private: false,
        component: (props) => <ourComp.ProductDetail {...props} />
    },
    {
        path: '/all/:category/:subcategory',
        exact: true,
        private: false,
        component: (props) => <ourComp.ViewAllProduct {...props} />
    },
    {
        path: '/all/:category',
        exact: true,
        private: false,
        component: (props) => <ourComp.ViewAllProduct {...props} />
    },
    {
        path: '/details/:category/:subcategory/:id',
        exact: true,
        private: false,
        component: (props) => <ourComp.ProductDetail {...props} />
    },
    {
        path: '/:cat',
        exact: true,
        private: false,
        component: (props) => <ourComp.ViewAllProduct {...props} />
    },
];

export default routes;