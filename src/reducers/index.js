
const initialState = {
  currentpath:'/',
  selItem:null
};

const itemReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "SETCURRENTPATH":
      return{
        ...state,
        currentpath: action.payload.currentpath,
      }
       

    case "STOREITEM":
      return {
        ...state,
        selitem:action.payload.selItem
      }
      
      default : return newState;
  }
  
};
export default itemReducer;