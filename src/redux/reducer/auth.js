const initStateRegisters = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export const registerReducer = (state = initStateRegisters, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }
  return state;
};
