import axios from 'axios'

export const fetchJadwal = (namaKota,tanggal)=>{
    return (dispatch)=>{
        //console.log(namaKota + 'XXXX')

        // axios.get('https://api.banghasan.com/sholat/format/json/kota/nama/'+namaKota)
        // .then(response=>{
        //     //console.log(response.data.kota[0])

        //     let dataJadwal = getJadwalSholat(response.data.kota[0].id, tanggal)

        //     dispatch(updateJadwal(dataJadwal.tanggal, dataJadwal.imsak, dataJadwal.subuh, dataJadwal.dzuhur, dataJadwal.ashar, dataJadwal.maghrib, dataJadwal.isya))

        // }).catch(error =>{
        //     console.log('error get kode kota')
        // })

        let kodeKota = '667' //jakarta

        axios.get('https://api.banghasan.com/sholat/format/json/jadwal/kota/'+kodeKota+'/tanggal/'+tanggal)
        .then(response=>{
            //console.log(response.data.jadwal.data)
            const tanggal = response.data.jadwal.data.tanggal
            const imsak = response.data.jadwal.data.imsak
            const subuh = response.data.jadwal.data.subuh
            const dzuhur = response.data.jadwal.data.dzuhur
            const ashar = response.data.jadwal.data.ashar
            const maghrib = response.data.jadwal.data.maghrib
            const isya = response.data.jadwal.data.isya

            dispatch(updateJadwal(tanggal, imsak, subuh, dzuhur, ashar, maghrib, isya))
        }).catch(error =>{
            console.log('error get jadwal sholat')
            }   
        )
        
    }
}

function getJadwalSholat(kota, tanggal) {
    let dataSholat = {
        tanggal: '',
        imsak: '',
        subuh: '',
        dzuhur: '',
        ashar: '',
        maghrib: '',
        isya: ''
    }
    
    axios.get('https://api.banghasan.com/sholat/format/json/jadwal/kota/'+kota+'/tanggal/'+tanggal)
    .then(response=>{
        console.log(response.data.jadwal.data)
        dataSholat.tanggal = response.data.jadwal.data.tanggal
        dataSholat.imsak = response.data.jadwal.data.imsak
        dataSholat.subuh = response.data.jadwal.data.subuh
        dataSholat.dzuhur = response.data.jadwal.data.dzuhur
        dataSholat.ashar = response.data.jadwal.data.ashar
        dataSholat.maghrib = response.data.jadwal.data.maghrib
        dataSholat.isya = response.data.jadwal.data.isya

        return dataSholat
    }).catch(error =>{
        console.log('error get jadwal sholat')

        return dataSholat
    })

}

export const updateJadwal = (tanggal, imsak, subuh, dzuhur, ashar, maghrib, isya) => {
    return {
        type: 'UPDATE_MUTASI',
        payload : {
            tanggal,
            imsak,
            subuh,
            dzuhur,
            ashar,
            maghrib,
            isya
        }
    }
}