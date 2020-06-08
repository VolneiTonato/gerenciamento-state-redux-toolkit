import {ApiConfig } from './config'

export interface httpRequest {
    erro?: boolean,
    loading?: boolean,
    success?: boolean
}


export class EstadoApi extends ApiConfig{
    
    public async getAll<T>(){
        return await this.axios.get<T>('/estados')
    }
}