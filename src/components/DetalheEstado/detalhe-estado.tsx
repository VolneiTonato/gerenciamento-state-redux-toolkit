import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Grid, Box, Paper, makeStyles, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
    }
}))

const DetalheEstadoSelecionado = () => {

    const { ReducerEstado } = useSelector((state: RootState) => state)
    const classes = useStyles()

    const estado = ReducerEstado.estadoSelected

    if (!estado?.id)
        return null


    return (

        <Grid className={classes.root} item xs={8}>
            <Paper >
                <Alert severity="info">Estado Selecionado</Alert>
                <Typography variant="subtitle1" component="h2">ID: {estado.id}</Typography>
                <Typography variant="subtitle1" component="h2">Nome: {estado.nome}</Typography>
                <Typography variant="subtitle1" component="h2">UF: {estado.sigla}</Typography>
            </Paper>

        </Grid>

    )
}

export default DetalheEstadoSelecionado