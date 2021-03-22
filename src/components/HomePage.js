import { useStyles } from "./Styles";
import {
    CssBaseline,
} from '@material-ui/core';

const HomePage = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline/>
            <div className={classes.test}>TEST!!!</div>
        </>
    );
};

export default HomePage;