import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        videoCategoryId: '10',
        type: 'video'
    }
})

// prefix env variable with REACT_APP
// and restart dev server