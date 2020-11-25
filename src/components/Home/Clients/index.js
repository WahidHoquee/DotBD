import React from 'react';
import Image from "gatsby-image"
import { Container, Grid } from '@material-ui/core';

import styles from './index.module.scss'
import Title from '../../Utils/Title'
import useClientImage from '../../../hooks/useClientImage';

const Clients = () => {    
    const clientImage = useClientImage();
    return (
        <Container fixed style={{padding: '10rem'}}>
            <Title>Our Clients</Title>
            <Grid container style={{padding:'5rem'}} justify="center" alignItems="center">
                {
                    clientImage.map(client => 
                        <Grid item sm={3} key={client.base}>
                            <div className={styles.root}>
                                <div className={styles.clientBox} >
                                    <Image fixed={client.image.fixed} alt={client.base} className={styles.logo}/> 
                                    <p className={styles.location}>Bangladesh</p>
                                </div>
                            </div>
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}

export default Clients;

