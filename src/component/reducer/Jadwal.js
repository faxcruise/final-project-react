const INITIAL_STATE = {
    tanggal: '',
    imsak: '',
    subuh: '',
    dzuhur: '',
    ashar: '',
    maghrib: '',
    isya: ''

}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case 'UPDATE_MUTASI':
        return {
          ...state,
          tanggal: action.payload.tanggal,
          imsak: action.payload.imsak,
          subuh: action.payload.subuh,
          dzuhur: action.payload.dzuhur,
          ashar: action.payload.ashar,
          maghrib: action.payload.maghrib,
          isya: action.payload.isya
        }
      default:
        return state
    }
  }