import { useDispatch } from "react-redux";

import { loginSuccess, logout } from "./reducer/authSlice";

const useDispatcher = () =>{
    const dispatch = useDispatch();

    return {
        login:(accessToken, refreshToken, user)=>{
            dispatch(loginSuccess(accessToken, refreshToken,user))
        },

        logout: ()=>{
            dispatch(logout());
        }
    }
};


export default useDispatcher;