  import React from 'react';
  import Button from '@material-ui/core/Button';
  import { connect } from 'react-redux';
  import { openModal } from '../../state/action-creator/index';

  const WatchDemoButton = ({ openModal }) => {
    const handleOpen = () => {
      openModal('watchDemo');
    };
  
    return (
      <>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Watch Demo
        </Button>
      </>
    );
  };
  
  const GetPricingButton = ({ openModal }) => {
    const handleOpen = () => {
      openModal('getPricing');
    };
  
    return (
      <>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Get Pricing
        </Button>
      </>
    );
  };
  
  const mapDispatchToProps = { openModal };

  export const ConnectedWatchDemoButton = connect(
    null,
    mapDispatchToProps
  )(WatchDemoButton);

  export const ConnectedGetPricingButton = connect(
    null,
    mapDispatchToProps
  )(GetPricingButton);
