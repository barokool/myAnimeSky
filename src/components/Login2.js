import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, ThemeProvider, Button } from "@material-ui/core";
import miku from '../images/miku - just 1.png'
import logo from '../images/Logo.png'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2F2F2F"
        }
    }
});

export default function SignIn() {

    return (
        <div className="mx-20 relative">


            <div className="container--form mt-28 mx-auto flex max-w-xl rounded-xl bg-white border-2 items-center">

                <div className="img-miku md:flex-shrink-0">
                    <img class=" h-48 w-full object-cover md:h-full md:w-48" src={miku} alt="miku" />
                </div>
                <div className="flex mx-12  flex-col">
                    <div className="flex items-center justify-center  ">
                        <img className="items-center justify-center " src={logo} alt="img" />
                        <div className="ml-4 font-bold text-3xl ">
                            AniSky
                        </div>
                    </div>
                    <span className="mb-8 ml-auto font-medium text-maincolor text-sm ">Quản trị viên</span>
                    <h1 className="text-center text-2xl font-bold">
                        Sign in
                    </h1>
                    <form className="w-full" noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email "
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <ThemeProvider theme={theme}>
                            <Button type="submit"
                                fullWidth
                                variant="contained"
                                color="primary" >
                                đăng nhập
                            </Button>
                        </ThemeProvider>

                    </form>
                </div>

            </div >

        </div >

    );
}