import React from 'react'
import { Typography, Grid, Button, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'


const Search = ({searchResults}) => {
    const people = ["Search", "Parker", "Baldwin", "Hi", "Hello", "Hey There"]

    return (
        <>        
            <Grid container spacing={2} sx={{pt: 2}}>
                {
                    searchResults.map(
                        (value, index) => {
                            return(
                                <Grid key={index} item xs={6} md={2}>
                                    <Card> 
                                        <CardContent>
                                            {value.name}
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