import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { openModal } from '../../state/action-creator/index';
import Image from 'next/image';
import cvid1 from '../cardvid.webp';
import { FaYoutube } from 'react-icons/fa';


const handleOpenModal = (modalType, modalProps) => {
  dispatch(ModalActions.showModal(modalType, modalProps));
};


  const WatchDemoButton = ({ openModal, product }) => {
    const handleOpen = () => {
      openModal('watchDemo', product);
    };

    return (
      <>
        <Button variant="contained" style={{ backgroundColor: '#FFA810', color: 'white', width: "160px", height: "40px", fontSize: "16px" }} onClick={handleOpen} >
          Watch Demo
        </Button>
      </>
    );
  };
 export const WatchDemoCard = ({ openModal, product }) => {
    const handleOpen = () => {
      openModal('watchDemo', product);
    };

    return (
      <>
        <div className='relative pl-2 text-gray-500 hover:cursor-pointer hover:text-red-700' onClick={handleOpen}>
          
          <img src={`http://127.0.0.1:1337${product.attributes.image2.data[0].attributes.url}`} height={"80px"} width={"200px"} />
        
          <FaYoutube className='absolute top-0 my-6 mx-16 text-5xl  ' />
        </div>
      </>
    );
  };

  const GetPricingButton = ({ openModal, product }) => {
    const handleOpen = () => {
      openModal('getPricing',product);
    };

    return (
      <>
        <Button variant="contained" style={{ backgroundColor: '#439FD3', color: 'white', width: "160px", height: "40px", fontSize: "16px" }} onClick={handleOpen}>
          Get Pricing
        </Button>
      </>
    );
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      openModal: (modalType, product) => dispatch(openModal(modalType, product)),
    };
  };
  

  export const ConnectedWatchDemoButton = connect(
    null,
    mapDispatchToProps
  )(WatchDemoButton);

  export const ConnectedGetPricingButton = connect(
    null,
    mapDispatchToProps
  )(GetPricingButton);

  export const ConnectedWatchDemoCard = connect(
    null,
    mapDispatchToProps
  )(WatchDemoCard);
