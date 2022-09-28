import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";


const SearchResults = ({food, title}) => {
    return(
        <>
            <Typography variant='h2'>{title}</Typography>     
            <Grid container spacing={2} sx={{pt: 2}}>
                {
                    food.map(
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

//include picture, title, ratings, number of ratings
//go to mui card
//choose a card, copy from card to card
//replace card in search results with copied code

export default SearchResults