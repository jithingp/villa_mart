import axios from 'axios'

export const baseUrl ='https://bayut.p.rapidapi.com'



export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '4b74567686mshdf7a50365bee162p1e710cjsnacbf21dfe8aa'
          }
    })
    return data;
}