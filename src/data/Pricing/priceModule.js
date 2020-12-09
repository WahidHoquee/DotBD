import React from 'react';

import Users from '../../components/Pricing/PriceModule/Modules/users'
import Branches from '../../components/Pricing/PriceModule/Modules/branches'
// import Applications from '../../components/Pricing/PriceModule/Modules/applications'
// import Users from '../components/Pricing/PriceModule/Modules/users'
// import Users from '../components/Pricing/PriceModule/Modules/users'
// import Users from '../components/Pricing/PriceModule/Modules/users'
// import Users from '../components/Pricing/PriceModule/Modules/users'
// import Users from '../components/Pricing/PriceModule/Modules/users'

export default [
    {
        id: 'users',
        title: 'Users',
        components: <Users/>        
    },
    {
        id:'branches',
        title:'Branches',
        components: <Branches/>              
    },
    {
        id:'applications',
        title:'Applications',
        // components: <Applications/>        
    },
    {
        id:'extraIntegration',
        title:'Extra Integration'        
    },
    {
        id:'support',
        title:'Support (Yearly)'        
    },
    {
        id:'training',
        title:'Training & Implementation'    
    },
    {
        id:'customization',
        title:'Customization'        
    },
    {
        id:'hosting',
        title:'Hosting (Monthly)'        
    }

]