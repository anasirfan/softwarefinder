import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../state/action-creator/index';
import Image from 'next/image';
import wdlogo from '../modals/watchdemo-logo.png';
import {
  Modal,
  Box,
  Paper,
  Typography,
  IconButton,
  Divider,
  Slide,
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@mui/icons-material/Close';
import Form from '../form';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: theme.zIndex.modal + 1,
  },
  paper: {
    position: 'relative',
    width: 1150,
    minHeight: '580px',
    overflowY: 'auto',
    padding: theme.spacing(3),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'space-between',
    marginBottom: theme.spacing(3),
    
  },
  logo: {
    height: 80,
    padding: "2px",
    marginRight: theme.spacing(2),
  },
  headerText: {
    flex: 1,
    fontSize: "15px",
    textAlign: 'justify',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
  banner: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  checkbox: {
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

const WatchDemoModal = ({ closeModal , product }) => {
  const classes = useStyles();
  const handleClose = () => {
    closeModal();
  };
  console.log('product:', product); 
  return (  
    <Modal
      open={true}
      onClose={handleClose}
      className={classes.modal}
      disableBackdropClick
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '9999'
      }}
    >
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Paper className={classes.paper}>
          <Box className={`flex flex-row space-x-96 mx-5`}>
         
            <div>
            <Typography variant="h6" className={classes.headerText}>
            Join thousands of other professionals and get personalized recommendations based on what businesses like you are using. There is no obligation to buy.
            </Typography>
            <IconButton className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            </div>
          </Box>
          <Divider />
          <div className='flex flex-row space-x-4 w-full'>
            <div className='w-1/3 h-full'>
              <Image src= {wdlogo}/>
            </div>
         
          <Box className={classes.main}>
            <Box className={classes.banner}></Box>
            <Box className="flex flex-col pl-40 -mr-5 ">
              <Typography variant="h6" className={classes.formHeader}>
                Get Our Best Software Advice Through SMS
              </Typography>
             <Form/>
            </Box>
          </Box>
          </div>
        </Paper>
      </Slide>
    </Modal>
  );
  
  };

  const GetPricingModal = ({ closeModal }) => {
    const classes = useStyles();
    const handleClose = () => {
      closeModal();
    };

    return (
      <Modal
      open={true}
      onClose={handleClose}
      className={classes.modal}
      disableBackdropClick
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '9999'
      }}
    >
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Paper className={classes.paper}>
          <Box className={`flex flex-row space-x-96 mx-5`}>
            <Image src={wdlogo} alt="Logo" className={`${classes.logo}`} />
            <div>
            <Typography variant="h6" className={classes.headerText}>
            Hidden charges, implementation fees, long term costs? Get the complete picture from us to simplify your software selection.
            </Typography>
            <IconButton className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            </div>
          </Box>
          <Divider />
          <div className='flex flex-row space-x-4 w-full'>
            <div className='w-1/3 h-full'>
              <Image src= {wdlogo}/>
            </div>
         
          <Box className={classes.main}>
            <Box className={classes.banner}></Box>
            <Box className="flex flex-col pl-40 -mr-5 ">
              <Typography variant="h6" className={classes.formHeader}>
              Get pricing for AthenaHealth EMR Software
There is no obligation to buy.
              </Typography>
              <form>
                <div className='flex flex-col space-y-3 -mr-5 w-full'>
                  <div item xs={12} sm={6}>
                    <TextField
                      id="name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                  <div item xs={12} sm={6}>
                    <TextField
                      id="phone"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                  <div item xs={12} sm={6}>
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                  <div item xs={12} sm={6}>
                    <TextField
                      id="message"
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                    />
                  </div>
                  <div item xs={12}>
                    <FormControlLabel
                      control={<Checkbox name="checkedB" color="primary" />}
                      label="Get our best software advice through SMS"
                    />
                  </div>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
          </div>
        </Paper>
      </Slide>
    </Modal>
    );
  };

  const ModalContent = ({ modalType, closeModal }) => {
    if (modalType === 'watchDemo') {
      return <WatchDemoModal closeModal={closeModal} />;
    } else if (modalType === 'getPricing') {
      return <GetPricingModal closeModal={closeModal} />;
    } else {
      return null;
    }
  };

  const mapStateToProps = (state) => {
    return {
      modalType: state.modal.modalType,
    };
  };

  const mapDispatchToProps = { closeModal };

  export const ConnectedModal = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalContent);


  