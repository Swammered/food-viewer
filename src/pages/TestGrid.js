import React from 'react'
import { Typography, Grid, Button} from '@mui/material'
import { Link } from 'react-router-dom'



const TestGrid = () => {

    return (
        <>        
            <Grid container spacing={2}>
                <Grid item xs={6} md={2}>hi</Grid>
                <Grid item xs={6} md={2}>hello</Grid>
                <Grid item xs={6} md={2}>yo</Grid>
                <Grid item xs={6} md={2}>helllllllo</Grid>
                <Grid item xs={6} md={2}>hiya</Grid>
                <Grid item xs={6} md={2}>heyo</Grid>

            </Grid>

            <Typography>I'm the TestGrid</Typography>

            <Button component={Link} to='/search' variant='outlined'>Search</Button>
        </>
    )
}

export default TestGrid