import React from 'react'
import { Typography, Grid, Button, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchResults from '../components/SearchResults'


const Search = ({searchResults}) => {
    const people = ["Search", "Parker", "Baldwin", "Hi", "Hello", "Hey There"]
    const cheapFood = searchResults.filter((value) => value.price === "$")
    const moderateFood = searchResults.filter((value) => value.price === "$$")
    const expensiveFood = searchResults.filter((value) => value.price === "$$$")

    return (
        <>   
            <SearchResults food={cheapFood} title={"Cheap Food"} />
            <SearchResults food={moderateFood} title={"Moderate Food"} />
            <SearchResults food={expensiveFood} title={"Expensive Food"} />

        </>
    )
}

export default Search