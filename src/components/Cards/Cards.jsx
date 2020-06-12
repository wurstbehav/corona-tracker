import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import Countup from 'react-countup'
import moment from 'moment'
import cx from 'classnames'
import styles from './Cards.module.css'


const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {

    const lastUpdateDate = moment(lastUpdate).format("ddd, MMMM Do YYYY");

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography varient='h5'>
                            <Countup start={0} end={confirmed.value} duration={1.5} separator="," />
                        </Typography>
                        <Typography color='textSecondary'>{lastUpdateDate}</Typography>
                        <Typography varient='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography varient='h5'><Countup start={0} end={recovered.value} duration={1.5} separator="," /></Typography>
                        <Typography color='textSecondary'>{lastUpdateDate}</Typography>
                        <Typography varient='body2'>Number of recoveies by COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography varient='h5'>
                            <Countup start={0} end={deaths.value} duration={1.5} separator="," />
                        </Typography>
                        <Typography color='textSecondary'>{lastUpdateDate}</Typography>
                        <Typography varient='body2'>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>


            </Grid>


        </div>
    )
}

export default Cards
