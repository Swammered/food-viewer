import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";


const SearchResults = ({food, title}) => {
    return(
        <>
            {
                (food.length > 0) ? (
                    <Typography variant='h2'>{title}</Typography>
                ) : (
                    <></>
                )
            }

            <Grid container spacing={2} sx={{pt: 2}}>
                {
                    food.map(
                        (value, index) => {
                            return(
                                <Grid key={index} item xs={6} md={2}>
                                    {/* <Card> 
                                        <CardContent>
                                            {value.name}
                                        </CardContent>
                                    </Card> */}
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={value.image_url}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            {value.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            {value.location.address1} <br/>
                                            {value.location.city}, {value.location.state}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">{value.rating} / 5</Button>
                                            {/* <Button size="small">Learn More</Button> */}
                                        </CardActions>
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

export default SearchResults