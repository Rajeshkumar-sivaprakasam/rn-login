/* eslint-disable @typescript-eslint/no-unused-vars */
import {SigninInterface} from '../model/login-model';
import api from './Api-service';
import state from '../store';

export class LoginService {
  static signin = async (item: SigninInterface) => {
    const response = await api
      .post('/authentication/signin', item)
      .catch(() => null);
    if (!response) {
      state.isLoading = false;
      return;
    }
    state.isLoading = false;
    state.token = response.data.token;
    return response.data;
  };
}
