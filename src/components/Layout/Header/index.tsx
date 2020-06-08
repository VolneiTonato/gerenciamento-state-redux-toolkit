import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core'
import { useSelector} from 'react-redux'
import {RootState} from '../../../store'

const HeaderLayout = () => {

    const {ReducerEstado} = useSelector((state:RootState) => state)

    return (
        <AppBar position="static">
            <Toolbar title="Header">
                <Box textAlign="center">
                    <Typography variant="body1">{ReducerEstado.estadoSelected?.nome}</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderLayout