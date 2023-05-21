import axios from "axios";

import {HOST} from './const';

export const getStateInstance = (instance, token) => {
  axios({
    method: 'GET',
    url: `${HOST}/waInstance/${instance}/getStateInstance/${token}`,
    withCredentials: false,
  })
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
}
