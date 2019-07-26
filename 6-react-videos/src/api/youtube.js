import axios from 'axios';

const KEY = 'AIzaSyAUwCsNNDjFKoiJuu46KvAC6woKTE8Z6Lg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
