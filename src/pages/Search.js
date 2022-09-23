import React from 'react'
import { Typography, Grid, Button, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'


const Search = () => {
    const people = ["Search", "Parker", "Baldwin", "Hi", "Hello", "Hey There"]

    return (
        <>        
            <Grid container spacing={2} sx={{pt: 2}}>
                {
                    people.map(
                        (value) => {
                            return(
                                <Grid item xs={6} md={2}>
                                    <Card> 
                                        <CardContent>
                                            {value}
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        }
                    )
                }
            </Grid>
        </>
    )
}

export default Search