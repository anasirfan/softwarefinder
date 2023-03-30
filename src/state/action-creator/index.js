export const toggleModal = (isOpen, modalType) => {
  return {
    type: 'TOGGLE_MODAL',
    payload: {
      isOpen,
      modalType
      
    },
  };
};


export const openModal = (modalType, product) => {
  return toggleModal(true, modalType ,product);
};

export const closeModal = () => {
  return toggleModal(false, null);
};
