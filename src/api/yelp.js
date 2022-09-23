import axios from 'axios'

export default async (location, tern) =>{
    const respondse = await axios({
        method : 'get',
        url: `https://yelp-backend.netlify.app/.netlify/functions/search?location=${location}&term=${term}`
    })
    return
}
