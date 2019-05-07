import axios from 'axios'

export const fetchLokasi = (jarak)=>{
    //console.log('id lemparan :',from)
    return (dispatch)=>{
        axios.get('https://private-anon-17232bf5ae-briapi.apiary-mock.com/v1/api/location/near/branch/'+jarak+'/0/0')
        .then(response=>{
            console.log(response)
            const lokasi_baru= response.data[0].data.map(
                (item)=>{
                    return {
                        unit_kerja : item.unit_kerja,
                        kode_uker : item.kode_uker,
                        alamat : item.alamat,
                        id:item.id,
                    }
                }
            )
            dispatch(updateMembers(lokasi_baru))
        }).catch(error =>{
            console.log('error')
            }   
        )
    }
}

export const updateMembers = (lokasi = []) => {
    return {
        type: 'UPDATE_LOKASI',
        payload : {
            lokasi:lokasi
        }
    }
}

