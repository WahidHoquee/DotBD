import React, { useState, useContext, useEffect } from 'react'

import { Grid, Checkbox } from "@material-ui/core"
import { ArrowForward } from "@material-ui/icons"

import { PriceContext } from "../../../../../../../context/pricing"

const SubFeatures = (props) => {
    const {id,title,subtitle,features,included} = props.appModule;
    const { pricing, dispatch } = useContext(PriceContext)

    const [ checked, setChecked ] = useState({});
    useEffect(() => {
        const featureCheckbox = {}
        if(features){
            features.forEach(feature => {
                if(feature.price){
                    featureCheckbox[`${feature.name}`]=false 
                }
            })
            setChecked(featureCheckbox)
        }
        console.log(2)
    },[features])
    // useEffect(()=> {
    //     const featureBox = {};
    //     console.log(props.subFeatureHandler);
        
    //     if(props.subFeatureHandler && features){
    //         console.log(1);
            
    //         features.forEach(feature => {
    //             if(feature.price){
    //                 featureBox[`${feature.name}`]=false 
    //             }
    //         })
    //         setChecked({...featureBox})
    //         console.log(checked)
    //     }
    // },[props.subFeatureHandler])

    const handleChange = (e,name,price) => {
        if(e.target.checked){
            if(pricing.applications.some(app => app.type === title)){
                dispatch({
                    type: 'ADD_ADDITIONAL_FEATURES',
                    title:title,
                    price:price
                })
            }
            else{
                props.parentFeatureController(e,id,title,subtitle,included)
                dispatch({
                    type: 'ADD_ADDITIONAL_FEATURES',
                    title:title,
                    price:price
                })
            }
        }
        else{
            dispatch({
                type: 'REMOVE_ADDITIONAL_FEATURES',
                title:title,
                price:price
            })
        }
        setChecked({...checked,[name]:e.target.checked})
    }
    
    
    let featureList = null
    if (features) {
        featureList = features.map(({name, price}) => {
            let sub =  checked[name];
            if(props.subFeatureHandler){
                sub = false;
            }
            return (
            <Grid key={name} container justify="space-between" alignItems="center">
                <Grid item container xs={6}>
                    <ArrowForward />
                    {name}
                </Grid>
                <Grid item container xs={6} justify="flex-end" alignItems="center">
                    {price}
                    <Checkbox disabled={!price} checked={sub} onChange={(e) => handleChange(e,name,price)}/>
                </Grid>
            </Grid>
        )})
    }
    return <div>{featureList}</div>
}

export default SubFeatures;
