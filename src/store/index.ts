import {proxy} from 'valtio';

interface Props {
  isLoading: boolean;
  error: string;
  token: string;
}

const state: Props = proxy({
  isLoading: false,
  error: '',
  token: '',
});

export default state;
