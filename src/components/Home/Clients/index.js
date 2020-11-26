import React from 'react';
import Image from "gatsby-image"
import { useMediaQuery, Container, Grid } from '@material-ui/core';

import styles from './index.module.scss'
import Title from '../../Utils/Title'
import useClientImage from '../../../hooks/useClientImage';

const Clients = () => {    
    const clientImage = useClientImage();
    const sm = useMediaQuery(theme => theme.breakpoints.down(800));
    const xs = useMediaQuery(theme => theme.breakpoints.down(600));

    return (
    <Container fluid className={styles.wrapper}>
        <Title>Our Clients</Title>
        <Grid container className={styles.root} justify="center" alignItems="center">
        {clientImage.map(client => 
            <Grid item xs={xs ? 6 : sm ? 4 : 3} key={client.base} className={styles.card}>
                <div className={styles.cardClient}>
                    <div className={styles.clientBox} >
                        <Image fixed={client.image.fixed} alt={client.base} className={styles.logo}/> 
                        <p className={styles.location}>Bangladesh</p>
                    </div>
                </div>
            </Grid>
        )}
        </Grid>
    </Container>
    )
}

export default Clients;

