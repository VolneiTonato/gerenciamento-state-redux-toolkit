import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core'
import {useSelector} from 'react-redux'
import {RootState} from '../../../store'

const useStyles = makeStyles((theme) => ({

    footer: {
        color:"#FFF",
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: "#3f51b5"
        //theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

const FooterLayout = () => {

    const classes = useStyles()

    const {ReducerEstado} = useSelector((state:RootState) => state)

    return (

        <Paper variant="elevation" className={classes.footer}>
            <footer >
                <Container maxWidth="sm">
                    <Typography variant="body1">Estado Selecionado: {ReducerEstado.estadoSelected?.sigla || 'Nenhum estado selecionado' }</Typography>
                </Container>
            </footer>
        </Paper>

    )
}

export default FooterLayout