import { createContext, useReducer } from "react";
import fashionerReducer from "../reducers/fashionerReducer";
import axios  from "axios";

const initialState = {
  loading: true,
  fashioners: [],
  error: null,
};

export const FashionersContext = createContext();

const FashionersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fashionerReducer, initialState);
  //get all fashioners
  async function getFashioners () {
    const res = await axios.get(
      "https://fashioners-app.herokuapp.com/api/v1/fashioners"
    );
    try {
      dispatch({
        type: "GET_ALL_FASHIONERS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  
  }
    return (
      <FashionersContext.Provider
        value={{getFashioners,
          fashioners: state.fashioners,
          loading: state.loading
        }}
      >
        {children}
      </FashionersContext.Provider>
    );
};
export default FashionersContextProvider;
