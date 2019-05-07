import axios from 'axios'

export const fetchMember = ()=>{    
    return (dispatch)=>{
        axios({
            method:'get',
            url:'https://api.ipdata.co/?api-key=849e40c713440f75c251d1ae7e77f82002df77a65e23cea56151ee8f',            
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            //console.log(response)
            const ip = response.data.ip
            const latitude = response.data.latitude
            const longitude = response.data.longitude
            const city = response.data.city
            
            dispatch(updateMembers(ip, latitude, longitude, city))
        }).catch(error =>{
            console.log('error')
            }   
        )
    }
}
export const updateMembers = (ip, latitude, longitude, city) => {
    return {
        type: 'UPDATE_USER',
        payload : {
            ip,
            latitude,
            longitude,
            city
        }
    }
}