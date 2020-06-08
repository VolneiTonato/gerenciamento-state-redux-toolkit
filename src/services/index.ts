import {EstadoApi} from './ApiIBGE'

export interface httpRequest {
    erro?: boolean,
    loading?: boolean,
    success?: boolean
}


class ApiCall{


    public readonly ibgeService = {
        estadoApi: new EstadoApi()
    }
}


export const Api = new ApiCall()