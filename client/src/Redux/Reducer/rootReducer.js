import {combineReducer} from "redux";

import restaurant from "./restaurant/restaurant.reducer";

const rootReducer= combineReducer({restaurant});

export default rootReducer;
