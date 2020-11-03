import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    "button": {
        backgroundColor: "#e0e0e0"
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
