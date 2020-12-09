import React,{useContext, useState} from 'react';
import {Grid, ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails, Checkbox } from "@material-ui/core"

import appModules from "../../../../../../constant/Pricing/applications";
import { PriceContext } from "../../../../../../context/pricing"

import SubFeatures from './SubFeatures/SubFeatures';


const Features = () => {
    const { dispatch } = useContext(PriceContext)

    const [checked, setChecked] = useState({
        accounting: true,
        fixedAsset: false,
        fleet: false,
        enterprise: false
    });
    const [subFeatureHandler,setSubFeatureHandler] = useState(false)

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
            setSubFeatureHandler(false)
        }
        else if(!event.target.checked){
            dispatch({
                type:'REMOVE_FEATURES',
                title: title,
            })
            setSubFeatureHandler(true)
            // console.log('Hello')
            // child.current.featureReset(event)
        }
        setChecked({...checked, [id]: event.target.checked});        
    };

    return (
        <div>
            <Grid container>
                {appModules.map((appModule) => {
                    const {id,icon,title,subtitle,included} = appModule
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
                                        <SubFeatures 
                                            appModule={appModule} 
                                            parentFeatureController={handleChange} 
                                            subFeatureHandler={subFeatureHandler}
                                        />
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
