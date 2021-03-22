import axios from 'axios';

export const getUpcomingLaunches = () => {
    return axios.get('https://some-test-api.com');
};