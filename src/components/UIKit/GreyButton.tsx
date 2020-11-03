import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    "button": {
        backgroundColor: theme.palette.grey['300'],
        fontSize: 16,
        height: 48,
        marginBottom: 16,
        width: 256
    }
}));

type GreyButtonProps = {
    label: string;
    onClick: () => void;
};

const GreyButton = (props: GreyButtonProps) => {
    const classes = useStyles();
    return (
        <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
            {props.label}
        </Button>
    )
};

export default GreyButton;
