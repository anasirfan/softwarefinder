export const toggleModal = (isOpen, modalType) => {
  return {
    type: 'TOGGLE_MODAL',
    payload: {
      isOpen,
      modalType
    },
  };
};


export const openModal = (modalType) => {
  return toggleModal(true, modalType);
};

export const closeModal = () => {
  return toggleModal(false, null);
};
