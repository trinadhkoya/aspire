import {get} from './APIClient';

export const getProfileInfo = id => get(`user/${id}`);
