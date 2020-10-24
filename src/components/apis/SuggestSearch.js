import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

// get search suggestions from google
// we create a new axios instance to set the base URL

// it also takes a q param for the search term
// we'll specify in the request

// ditch the jsonAdapter
// we use cors everywhere
//cd node_modules/cors-anywhere/lib/ && npm run start

const ORIGIN = process.env.REACT_APP_ORIGIN

export default axios.create({
    baseURL: `${ORIGIN}/https://suggestqueries.google.com/complete/search?`,
    params:{
        client: 'firefox', //response style (youtube style response is jsonp)
        ds: 'yt', //restricted to a particular domain
        hl: 'en', //language
    }
});