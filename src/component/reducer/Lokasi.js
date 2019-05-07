const INITIAL_STATE = {
    lokasi: [],
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case 'UPDATE_LOKASI':
        return {
          ...state,
          lokasi: action.payload.lokasi,
        }
      default:
        return state
    }
}