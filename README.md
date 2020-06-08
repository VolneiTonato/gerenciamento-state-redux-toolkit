# Gerenciamento de State com React e @redux/toolkit

Este projeto foi criado para simplificar o uso de compartilhamento de estados do react usando a biblioteca redux-toolkit.

## Exemplo


State inicial da página, já com a busca dos estados do Brasil pelo reducer.

![Image of Estado Inicial Pagina](/assets/estado-inicial.png)





State alterado após selecionar um estado do Brasil. Veja que nesse exemplo foi atualizado em 3 componentes sem ligação alguma.
* Component Header
* Component Footer
* Component DetalheEstado


![Image of Estado Change Pagina](/assets/estado-change.png)






# 

Código do ReducerEstado que controla os seguintes states:
*Busca asyncrona de estados pela api do IBGE
*Controla os states de loading, error e success do http
*Armazena o estado selecionado após a seleção do elemento select do html.


```javascript
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Api , httpRequest} from '../../services'
const NAME = 'StateEstados'


interface entityEstado {
    id: number,
    sigla: string,
    nome: string
}

interface stateResponse {
    data?: Array<entityEstado>
    estadoSelected?: entityEstado
}


type stateEstadoType = stateResponse & { httpRequest?: httpRequest }


const initialState: stateEstadoType = {
    data: [],
    estadoSelected: {} as entityEstado,
    httpRequest: {
        erro: false,
        loading: false,
        success: false
    }
}


const PesquisarEstados = createAsyncThunk(
    `${NAME}/PESQUISAR_ESTADOS`,
    async (state?: entityEstado, argsThunk?: any): Promise<entityEstado[]> => {

        await new Promise(resolve => setTimeout(resolve, 1000))

        let { data } = await Api.ibgeService.estadoApi.getAll<entityEstado[]>()

        return data
    }
)



const StateEstado = createSlice({
    name: NAME,
    initialState,
    reducers: {
        updateState: (state: stateEstadoType, action: PayloadAction<stateEstadoType>) => {
            return { ...state, ...action.payload }
        },

        selecionarEstado: (state: stateEstadoType, action: PayloadAction<number>) => {
            let estado = state.data?.find(row => row.id === action.payload)

            return { ...state, estadoSelected: estado }
        }
    },
    extraReducers: builder => {
        builder.addCase(PesquisarEstados.pending, (state) => {
            return { ...state, httpRequest: { loading: true, erro: false, success: false } }
        })

        builder.addCase(PesquisarEstados.fulfilled, (state, action: PayloadAction<entityEstado[]>) => {
            return { ...state, data: action.payload, httpRequest: { loading: false, erro: false, success: true } }
        })

        builder.addCase(PesquisarEstados.rejected, (state) => {
            return { ...state, httpRequest: { loading: false, erro: true, success: false } }
        })
    }
})

export const ActionEstado = { ...StateEstado.actions, PesquisarEstados }
export const ReducerEstado = StateEstado.reducer


```



