import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Products, LaunchedToday, TrendingProducts } from './Products';
import { JobProfiles } from './JobProfiles';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            todayLaunch: LaunchedToday,
            trending: TrendingProducts,
            jobProfiles: JobProfiles,
            
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}