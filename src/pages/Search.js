import React from 'react'
import SearchResults from '../components/SearchResults'


const Search = ({searchResults, setRestId}) => {
    const cheapFood = searchResults.filter((value) => value.price === "$")
    const moderateFood = searchResults.filter((value) => value.price === "$$")
    const expensiveFood = searchResults.filter((value) => value.price === "$$$")

    return (
        <>   
            <SearchResults food={cheapFood} title={"Cheap Food"} setRestId={setRestId} />
            <SearchResults food={moderateFood} title={"Moderate Food"} setRestId={setRestId} />
            <SearchResults food={expensiveFood} title={"Expensive Food"} setRestId={setRestId} />

        </>
    )
}

export default Search