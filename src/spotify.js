import axios from 'axios'

const authEndPoint='https://accounts.spotify.com/authorize?';
const clientID='f688ec0560ae48189a71e0a02f7ebf2c';
const redirectUri='http://localhost:3001';
const scopes=['user-library-read','playlist-read-private']

export const loginEndPoint=`${authEndPoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;


const apiClient=axios.create({
    baseURL:'https://api.spotufy.com/v1/',
});

export const setClientToken=(token)=>{
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization='Bearer'+token;
        return config;
    } )
};
export default apiClient;