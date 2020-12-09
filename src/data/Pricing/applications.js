import React from "react"
import {
    AssessmentTwoTone,
    PieChartTwoTone,
    CenterFocusStrongTwoTone,
    LiveTvTwoTone,
} from "react-icons/md";

export default [
    {
        id: "accounting",
        icon: <AssessmentTwoTone />,
        title: "Accounting",
        subtitle: "45,000.00",
        included: 3,
        features: [
            {
                name: "Year Closing ",
            },
            {
                name: "Account",
            },
            {
                name: "COA",
            },
            {
                name: 'Branch COA',
                price: '10,000.00'
            },
            {
                name: 'Budget',
                price: '20,000.00'
            },
        ],
    },
    {
        id: "fixedAsset",
        icon: <PieChartTwoTone />,
        title: "Fixed Asset Management",
        subtitle: "100,000.00",
    },
    {
        id: "fleet",
        icon: <CenterFocusStrongTwoTone />,
        title: "Fleet Management",
        subtitle: "20,000.00",
    },
    {
        id: "enterprise",
        icon: <LiveTvTwoTone />,
        title: "Enterprise Asset Management",
        subtitle: "60,000.00",
        included: 2,
        features:[
            {
                name: "Voucher",
            },
            {
                name: "Year Closing ",
            },
            {
                name: 'Cost Center',
                price: '16,000.00'
            },
            {
                name: 'Receipt Books',
                price: '80,000.00'
            },
        ]
    },
]
