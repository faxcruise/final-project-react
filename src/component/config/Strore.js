import {createStore, combineReducers,applyMiddleware} from 'redux'
import jadwal from '../reducer/Jadwal'
import lokasi from '../reducer/Lokasi'
import userdata from '../reducer/Userdata'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    jadwal,
    lokasi,
    userdata,
  })
  
  const middlewares = applyMiddleware(
    thunk,
  )
  
  export default createStore(reducers, middlewares)