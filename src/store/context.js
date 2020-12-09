import React, { createContext, useReducer } from "react";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import priceReducer from "./reducer";


const PriceContextProvider = ({ apps, children }) => {
    const store = configureStore({
        reducer: priceReducer, 
    });
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default PriceContextProvider


    // // apps
    // const [pricing, dispatch] = useReducer(priceReducer, {
    //     users: {
    //         ammount: 1,
    //         price: '4,000',
    //     },
    //     branches: {
    //         ammount: 1,
    //         price: '24,000',
    //     },
    //     applications: [
    //         {
    //             type: "Accounting",
    //             price: '45,000',
    //             included: 3,
    //             noOfAdditionalFeature: 0,
    //             additionalFeaturePrice: 0,
    //         }
    //     ]
    // })
