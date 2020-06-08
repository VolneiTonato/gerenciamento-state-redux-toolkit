import React, { Fragment, Children } from 'react'
import Header from './Header'
import Footer from './Footer'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import {Container} from '@material-ui/core'

interface Props {
    children: any
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    }
}));

const Layout = (props: Props) => {
    const classes = useStyles()
    return (
        <Fragment>
            <div className={classes.root}>

                <CssBaseline />
                <Header />
                <Container component="main" className={classes.main}>

                    {props.children}
                </Container>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Layout