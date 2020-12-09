import React,{useRef, useState, useContext, useEffect} from 'react';

import appModules from "../../../../../../constant/Pricing/applications";
import { PriceContext } from "../../../../../../context/pricing"
import { ArrowForward } from "@material-ui/icons"
import {Grid, ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails, Checkbox } from "@material-ui/core"
// import SubFeatures from './SubFeatures/SubFeatures';


const Features = () => {
    const { dispatch } = useContext(PriceContext)

    const [checked, setChecked] = React.useState({
        accounting: true,
        fixedAsset: false,
        fleet: false,
        enterprise: false
    });

   

    const handleChange = (event,id,title,price,included) => {
        if(event.target.checked){
            dispatch({
                type:'ADD_FEATURES',
                title: title,
                price: price,
                included: included,
                noOfAdditionalFeature: 0,
                additionalFeaturePrice: 0
            })          
        }
        else if(!event.target.checked){
            dispatch({
                type:'REMOVE_FEATURES',
                title: title,
            })
        }
        setChecked({...checked, [id]: event.target.checked});       
    };


    return (
        <div>
            <Grid container>
                {appModules.map((appModule) => {
                    const {id,icon,title,subtitle,features,included} = appModule
                    let featureList = null
                    const [ subChecked, setSubChecked ] = useState({});
                    useEffect(() => {
                        const featureCheckbox = {}
                        if(features){
                            features.forEach(feature => {
                                if(feature.price){
                                    featureCheckbox[`${feature.name}`]=false 
                                }
                            })
                            setSubChecked(featureCheckbox)
                        }
                    },[features])
                    const handleSubChange = (e,name,price) => {
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
                        setSubChecked({...subChecked,[name]:e.target.checked})
                    }                
                    if (features) {
                        featureList = features.map(({name, price}) => (
                            <Grid key={name} container justify="space-between" alignItems="center">
                                <Grid item container xs={6}>
                                    <ArrowForward />
                                    {name}
                                </Grid>
                                <Grid item container xs={6} justify="flex-end" alignItems="center">
                                    {price}
                                    <Checkbox disabled={!price} onChange={(e) => handleSubChange(e,name,price)}/>
                                </Grid>
                            </Grid>
                        ))
                    }
                    return (
                        <Grid key={id} item lg={6}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary>
                                    <Grid container direction="row" justify="space-between" alignItems="center">
                                        <Grid item container direction="row" alignItems="center" spacing={2} xs={10}>
                                            <Grid item xs={2}>
                                                {icon}
                                            </Grid>
                                            <Grid item container direction="column" xs={10}>
                                                <Grid item>
                                                    {title}
                                                </Grid>
                                                <Grid item>
                                                    {subtitle}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Checkbox 
                                                checked={checked[id]} 
                                                onChange={(e) => handleChange(e,id,title,subtitle,included)}/>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Grid container direction="column" justify="space-between">
                                        {featureList}
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Features;
