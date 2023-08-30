export const handlePending = state => {
    state.isLoading = true;
    state.isRefreshing = true;
  };
  
  export const handleFulfilled = (state) => {
    state.isRefreshing = false;
    state.isLoading = false;
    state.error = '';
  };
  
  export const handleFulfilledReg = (state, action) => {
    state.user = action.payload.user;
    state.access_token = action.payload.token;
    state.isLoggedIn = true;
  };

  export const handleFulfilledLogIn = (state, action) => {
    state.user = action.payload.user;
    state.access_token = action.payload.token;
    state.isLoggedIn = true;
  };

  export const handleFulfilledLogOut = (state, action) => {
    state.user = "";
    state.access_token = ""
    state.isLoggedIn = false;
  };

  export const handleFulfilledcurrentLogin = (state, action) => {
    state.isRefreshing = true;
  };

  export const handleFulfilledCreate = (state, action) => {
    state.contactList.push(action.payload);
  };
  
  export const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };