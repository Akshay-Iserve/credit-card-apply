import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const allBanksReducer = (banks = [], action) => {
    if (action.type === "FETCH_BANKS") {
        return action.payload
    }
    return banks;
}

const ccEligibleOffers = (ccoffers = null, action) => {
    if (action.type === "CC_ELIGIBLE_OFFERS") {
        return action.payload
    }
    return ccoffers;
}

const authReducer = (auth = { token: null, mobile_verified: false, profile: null }, action) => {

    if (action.type == "SET_AUTH") {
        return action.payload
    }
    return auth;
}

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    banks: allBanksReducer,
    ccOffers: ccEligibleOffers
});