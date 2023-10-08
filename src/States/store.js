import { configureStore } from "@reduxjs/toolkit";
import incdecReducer  from "./reducers/index";


export default configureStore({
    reducer:{
        number : incdecReducer
    }
},window._REDUX_DEVTOOL_EXTENSION_ && window._REDUX_DEVTOOL_EXTENSION_())