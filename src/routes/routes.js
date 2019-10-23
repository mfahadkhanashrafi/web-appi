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
        path: '/login',
        exact: true,
        private: false,
        component: (props) => <ourComp.AuthO {...props} />
    },
    {
        path: '/signup',
        exact: true,
        private: false,
        component: (props) => <ourComp.AuthO {...props} />
    },
    // {
    //     path: '/login/login',
    //     exact: true,
    //     private: false,
    //     component: (props) => <ourComp.AuthO {...props} />
    // },
    // {
    //     path: '/offerList/login/login',
    //     exact: true,
    //     private: false,
    //     component: (props) => <ourComp.AuthO {...props} />
    // },
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
    // {
    //     path: '/:cat',
    //     exact: true,
    //     private: false,
    //     component: (props) => <ourComp.ViewAllProduct {...props} />
    // },
    
    {
        path: '/Test',
        exact: true,
        private: false,
        component: (props) => <ourComp.Test {...props} />
    },
];

export default routes;