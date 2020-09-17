import {combineReducers} from 'redux';
import {gameOanTuTiReducer} from './gameOanTuTiReducer'

export const rootReducer = combineReducers({
    // Khai báo các state của ứng dụng 
    stateGameOanTuTi: gameOanTuTiReducer,
})