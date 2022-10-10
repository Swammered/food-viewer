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
    const [results, setResults] = useState([])
    const [restId, setRestId] = useState("nothing to see here")

    const searchApi = async (term) => {
        const response = await yelp("24416", term)
        console.log(response.data.businesses)
        setResults(response.data.businesses)

        const response2 = await fetch("/api/yelp")
        const data = await response2.json()
        console.log("hi", data)
        //response.data.businesses
    }

    const doSearch = (e) => {
        setSearchText(e.target.value)
        searchApi(e.target.value)
    }

    useEffect(() => {
        searchApi("Chinese")
    }, [])

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
                                                    doSearch(e)
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
                                </Typography>
                                <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>

                    <Typography variant="h6">Your search results are {searchText}</Typography>
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