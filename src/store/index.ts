import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import {Reducers} from './reducers'


export type RootState = ReturnType<typeof Reducers>

const store = configureStore({
    reducer: Reducers,
    middleware: getDefaultMiddleware({serializableCheck:true})
})

export {store}