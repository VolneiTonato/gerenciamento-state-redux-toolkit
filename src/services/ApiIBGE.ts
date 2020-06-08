import {ApiConfig } from './config'


export class EstadoApi extends ApiConfig{
    
    public async getAll<T>(){
        return await this.axios.get<T>('/estados')
    }
}