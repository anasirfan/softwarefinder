import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import Reducer from '../state/reducer/index';

const store = createStore(Reducer);
export default function App({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider> 
}
