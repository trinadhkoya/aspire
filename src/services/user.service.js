import {get, put} from './APIClient';

export const getProfileInfo = id => get(`user/${id}`);
export const updateProfileInfo = (id, data) => put(`user/${id}`, data);
