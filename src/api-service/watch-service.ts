/* eslint-disable @typescript-eslint/no-unused-vars */
import {SigninInterface} from '../model/login-model';
import api from './Api-service';
import state from '../store';

interface props {
  headers: {
    Authorization: string;
  };
}
export class WatchService {
  static getall = async (item: props) => {
    const response = await api
      .get('/myaccount/watches', item)
      .catch(err => console.log(err));
    if (!response) {
      state.isLoading = false;
      return;
    }
    state.isLoading = false;
    return response.data;
  };
}
