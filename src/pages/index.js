import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ReactDOM from 'react-dom';
import Reducer from '../state/reducer/index';
import ReactHtmlParser from 'react-html-parser';
import { ConnectedWatchDemoButton, ConnectedGetPricingButton } from '../components/buttons';
import { ConnectedModal } from '@/Components/modals';
import { openModal, closeModal } from '../state/action-creator';


const store = createStore(Reducer);
const Index = ({ products }) => {
  return (

    
    <Provider store={store}>
      <div className="w-full text-justify mx-10 space-x-14 flex flex-row">
        <div className='w-2/6'>
        {products.data.map((item) => (
          <div key={item.id}>
            {ReactHtmlParser(item.attributes.content)}
          </div>
        ))}
        </div>
        <div className='flex flex-row h-14 space-x-5 ' >
        <ConnectedWatchDemoButton />
      <ConnectedGetPricingButton />
      <ConnectedModal/>
        </div>

      </div>
      </Provider>
   
  );
};

export async function getServerSideProps(context) {
  const response = await axios.get('http://127.0.0.1:1337/api/articles?populate=1');
  const products = response.data;

  return {
    props: {
      products,
    },
  };
}

export default Index;
