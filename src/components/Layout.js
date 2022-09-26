import React, {useState} from 'react'
import { Typography, Box, AppBar, Toolbar, IconButton, Button, TextField, InputAdornment, Paper} from '@mui/material'
import TestGrid from '../pages/TestGrid'
import MenuIcon from '@mui/icons-material/Menu'
import Search from '../pages/Search'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { Start } from '@mui/icons-material'
import yelp from '../api/yelp'

const Layout = () => {
    const [searchText, setSearchText] = useState("I'm here. Good")
    const [results, setResults] = useState([])
    let mySearchTest = "im here"

    const searchApi = async () => {
        const response = await yelp("24416", "Sushi")
        console.log(response.data.businesses)
        setResults(response.data.bisuniesses)
        //response.data.businesses
    }

    const doSearch = (e) => {
        setSearchText(e.target.value)
        searchApi()
    }

    return (
        <>
            <Paper sx={{backgroundColor : "#eeeeee", pb: 2}}>
                <BrowserRouter>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <TextField 
                                onKeyPress={
                                    (e)=> {
                                        if (e.key === "Enter"){
                                            doSearch(e)       
                                        }
                                    }
                                }
                                label="Search" 
                                variant="outlined"
                                // inputProps={{
                                //     startAdornment: (
                                //         <InputAdornment position="start">
                                //             <SearchIcon />
                                //         </InputAdornment>
                                //     )
                                // }}
                                
                                />
                            </Typography>
                            <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                        </Box>

                    <Typography variant="h6">Your search results are {searchText}</Typography>
                    <Routes>
                        <Route exact path='/' element={<TestGrid/>} />
                        <Route exact path='/testgrid' element={<TestGrid/>} />
                        <Route exact path='/search' element={<Search searchResults={results}/>} />
                    </Routes>

                </BrowserRouter>
            </Paper>
        </>
    )
}

export default Layout