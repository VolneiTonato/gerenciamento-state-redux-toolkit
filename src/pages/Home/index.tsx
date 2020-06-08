import React, { useEffect, useState, ChangeEvent, Fragment } from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import { ActionEstado } from '../../store/reducers/ReducerEstado'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import DetalheEstado from '../../components/DetalheEstado/detalhe-estado'

const useStyle = makeStyles((theme) => ({
    select : {
        padding:theme.spacing(2)
    }
}))


const HomePage = () => {

    const classes = useStyle()
    const distpatch = useDispatch()
    const { ReducerEstado } = useSelector((state: RootState) => state)
    const [readOnly, setReadonly] = useState(false)


    useEffect(() => {
        distpatch(ActionEstado.PesquisarEstados())

    }, [])

    const handlerOnChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        distpatch(ActionEstado.selecionarEstado(Number(e.target.value)))

    }

    useEffect(() => {
        if (ReducerEstado.httpRequest?.loading)
            setReadonly(true)
        else
            setReadonly(false)


    }, [ReducerEstado.httpRequest?.loading])

    const estados = ReducerEstado.data || []

    return (
        <Fragment>
            <Grid container alignContent="center">
                <Grid item xs={12}>
                    <Box textAlign="center">
                        <Typography variant="h3" component="h2">Selecione um estado!</Typography>
                    </Box>

                </Grid>
                <Grid item xs={12}>
                    <Box textAlign="center">
                        <select className={classes.select} disabled={readOnly} onChange={handlerOnChange} name="estado">
                            {estados.length > 0 ? (
                                <Fragment>
                                    <option value="0">Selecione</option>
                                    {estados.map(row =>
                                        <option value={row.id} key={row.id}>{row.nome}</option>
                                    )}
                                </Fragment>
                            ) : <option value="0">carregando...</option>}}


                    </select>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box textAlign="center">
                        {ReducerEstado.httpRequest?.loading && <Box>carregando....</Box>}
                        {ReducerEstado.httpRequest?.erro && <Box>Oops, ocorreu um erro ao pesquisar Estados.</Box>}
                    </Box>
                </Grid>
            </Grid>
            <Grid container  justify="center">
                <DetalheEstado />
            </Grid>
        </Fragment>
    )
}

export default HomePage