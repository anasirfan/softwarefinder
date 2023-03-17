const initialState = {
  modal: {
    isOpen: false,
    modalType: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modal: {
          isOpen: action.payload.isOpen,
          modalType: action.payload.modalType
        }
      };
    default:
      return state;
  }
};

export default reducer;
