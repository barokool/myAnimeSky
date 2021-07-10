import React from 'react'
import miku from '../images/miku - just 1.png'
import logo from '../images/Logo.png'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import '../index.css'
import TextField from "@material-ui/core/TextField";


const StyledButton = withStyles({
    root: {
        backgroundColor: '#2F2F2F',
        color: '#fff',
        padding: '0.5rem 1rem',
        borderRadius: '3px',
    },
})(Button);

const Login = () => {
    return (
        <section>
            <div className="container-large  h-screen  bg-fill ">
                <div className="container-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl " >
                    <div className=" md:flex ">
                        <div className="img-miku md:flex-shrink-0">
                            <img class=" h-48 w-full object-cover md:h-full md:w-48" src={miku} alt="miku" />
                        </div>
                        <div className="  pt-8 md:px-24 sm:max-w-full   anisky-container " >
                            <div className="container--form" >

                                <div className="flex items-center justify-center  ">
                                    <img className="items-center justify-center " src={logo} alt="img" />
                                    <div className="ml-4 font-bold text-3xl ">
                                        AniSky
                                    </div>
                                </div>
                                <span className="ml-24 font-medium text-maincolor text-sm ">Quản trị viên</span>
                                <div className="form-input">


                                    <div className="text-lg text-center font-medium mt-8">
                                        Đăng nhập
                                    </div>

                                    <div className=" w-full mx-auto mt-8 border-white">
                                        <form className="form-input space-y-6 " noValidate autoComplete="off">

                                            <div  >
                                                <TextField
                                                    id="outlined-required"
                                                    label="Email"
                                                    variant="outlined"
                                                    fullWidth   
                                                />

                                            </div>
                                            <div >
                                                <TextField
                                                    id="outlined-password-input"
                                                    label="Password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    variant="outlined"
                                                    required
                                                />
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="h-4 w-4" />
                                                <label className="ml-2 text-sm ">Ghi nhớ đăng nhập</label>
                                            </div>
                                            <StyledButton className="button-customized"  >Đăng nhập</StyledButton>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
