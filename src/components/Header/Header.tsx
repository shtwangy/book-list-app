import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {PrimaryButton} from "../UIKit";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }),
);

type HeaderProps = {
    onClickBookAd: () => void;
};

const Header = (props: HeaderProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant={"h6"} className={classes.title}>
                        読みたい本リスト
                    </Typography>
                    <PrimaryButton label={'本を追加'} onClick={props.onClickBookAd} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
