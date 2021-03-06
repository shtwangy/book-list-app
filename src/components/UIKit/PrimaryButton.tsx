import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import {BookDescription} from "../../types/BookDescription";

const useStyles = makeStyles({
    "button": {
        backgroundColor: "#4dd0e1",
        color: '#000',
        fontSize: 16,
        height: 40,
        width: 160
    }
});

type PrimaryButtonProps = {
    label: string;
    onClick: () => void;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
    const classes = useStyles();
    return (
        <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
            {props.label}
        </Button>
    )
};

export default PrimaryButton;
