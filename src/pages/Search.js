import React from 'react'
import { Typography, Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom'


const Search = () => {

    return (
        <>        
            <Grid container spacing={2}>
                <Grid item xs={6} md={2}>
                    <Typography variant='h2'> I am the search page! </Typography>
                </Grid>
                <Grid item xs={6} md={2}>hello</Grid>
                <Grid item xs={6} md={2}>yo</Grid>
                <Grid item xs={6} md={2}>helllllllo</Grid>
                <Grid item xs={6} md={2}>hiya</Grid>
                <Grid item xs={6} md={2}>heyo</Grid>

            </Grid>
            
            <Typography>I'm the Search</Typography>

            <Button component={Link} to='/testgrid' variant='outlined'>TestGrid</Button>
        </>


    )
}

export default Search