const INITIAL_STATE = {
    ip : '',
    latitude : '',
    longitude : '',
    city : '',
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case  'UPDATE_USER':
        return{
            ...state,
            ip: action.payload.ip,
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
            city: action.payload.city            
        }
        default : return state
    }
}