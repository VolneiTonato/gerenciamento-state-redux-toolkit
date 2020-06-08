import axios, { AxiosInstance } from 'axios'



const apiAxios = axios.create({baseURL:"https://servicodados.ibge.gov.br/api/v1/localidades"})

export abstract class ApiConfig{

    public readonly axios: AxiosInstance = apiAxios
}


//export const Api = {...apiAxios, IhttpRequest: {error:false, success:false, loading:false} as httpRequest}