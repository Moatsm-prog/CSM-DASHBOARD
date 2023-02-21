 import React from 'react'
 import GridViewIcon from '@mui/icons-material/GridView';
 import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
 import CreditCardIcon from '@mui/icons-material/CreditCard';
 import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
 import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
 import MapIcon from '@mui/icons-material/Map';
 export const SidebarData=[
    {
        title:"Dashboard",
        icon:<GridViewIcon />,
        link:"/dashboard",
    },
    {
        title:"Cards",
        icon:<CreditCardIcon />,
        link:"/cards",
    },
    {
        title:"Stations",
        icon:<LocalGasStationIcon />,
        link:"/stations",
    },
    {
        title:"Users",
        icon:<PeopleAltIcon />,
        link:"/users",
    },
    {
        title:"Accounts",
        icon:<AccountBalanceIcon />,
        link:"/accounts",
    },
    {
        title:"Map",
        icon:<MapIcon />,
        link:"/map",
    },

]

 