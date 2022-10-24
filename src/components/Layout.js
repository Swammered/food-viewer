import React, { useState, useEffect } from 'react'
import { Typography, Box, AppBar, Toolbar, IconButton, Button, TextField, InputAdornment, Paper } from '@mui/material'
import Detail from '../pages/Detail'
import MenuIcon from '@mui/icons-material/Menu'
import Search from '../pages/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import yelp from '../api/yelp'

const Layout = () => {
    const [searchText, setSearchText] = useState("I'm here. Good")
    const [searchZip, setZipText] = useState("I'm zip")
    const [results, setResults] = useState([])
    const [restId, setRestId] = useState("nothing to see here")

    const searchApi = async (term, location) => {
        // const response = await yelp(zip, term)
        // console.log(response.data.businesses)
        // setResults(response.data.businesses)
        // const location = '76048'

        const response2 = await fetch(`/api/yelp?term=${term}&location=${location}`)
        const data = await response2.json()
        console.log("hi", data)

        setResults(data.businesses)

        //response.data.businesses
    }
    // const doSearch = (e) => {
    //     setSearchText(e.target.value)
    //     searchApi(e.target.value)
    // }
    const doSearch = (term, location) => { //add zip back into (term, zip)
        console.log('trying to do the search:', term, location)
        searchApi(term, location)
    }
    const setSearch = (e) => {
        console.log(e)
        setSearchText(e)
    }
    const setZip = (e) => {
        console.log(e)
        setZipText(e)
    }

    return (
        <>
            <Paper sx={{ backgroundColor: "#eeeeee", pb: 2 }}>
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
                                            (e) => {
                                                if (e.key === "Enter") {
                                                    setSearch(e.target.value)
                                                }
                                            }
                                        }
                                        label="Search"
                                        variant="outlined"
                                        inputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <TextField
                                        onKeyPress={
                                            (e) => {
                                                if (e.key === "Enter") {
                                                    setZip(e.target.value)
                                                }
                                            }
                                        }
                                        label="Zip-Code"
                                        variant="outlined"
                                        sx={{ml: 1}}
                                        inputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <Button color='inherit' variant="outlined" sx={{ml: 1, mt: 1}} onClick={ () => doSearch(searchText, searchZip)}>Search</Button>
                                </Typography>
                                <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>

                    <Typography variant="h6">Your search results are looking for {searchText} around {searchZip}</Typography>
                                    
                    <Routes>
                        <Route exact path='/' element={<Search searchResults={results} setRestId={setRestId} />} />
                        <Route exact path='/search' element={<Search searchResults={results} setRestId={setRestId} />} />
                        <Route exact path='/detail' element={<Detail restId={restId} />} />
                    </Routes>

                </BrowserRouter>
            </Paper>
        </>
    )
}

export default Layout