// import React from 'react'
// import miku from '../images/miku - just 1.png'
// import logo from '../images/Logo.png'
// import { withStyles } from '@material-ui/core/styles'
// import Button from '@material-ui/core/Button'
// import '../index.css'
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from '@material-ui/core/styles';


// const StyledButton = withStyles({
//     root: {
//         backgroundColor: '#2F2F2F',
//         color: '#fff',
//         padding: '0.5rem 1rem',
//         borderRadius: '3px',
//         width: '100%',
//         weight: '700',

//     },
// })(Button);

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));


// const Login = () => {
//     const classes = useStyles();

//     return (
//         <section >
//             <div className="container-large  h-screen  bg-fill ">
//                 <div className="container-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl " >
//                     <div className=" md:flex ">
//                         <div className="img-miku md:flex-shrink-0">
//                             <img class=" h-48 w-full object-cover md:h-full md:w-48" src={miku} alt="miku" />
//                         </div>
//                         <div className="  pt-8 md:px-24 sm:max-w-full   anisky-container " >
//                             <div className="container--form" >

//                                 <div className="flex items-center justify-center  ">
//                                     <img className="items-center justify-center " src={logo} alt="img" />
//                                     <div className="ml-4 font-bold text-3xl ">
//                                         AniSky
//                                     </div>
//                                 </div>
//                                 <span className="ml-24 font-medium text-maincolor text-sm ">Quản trị viên</span>
//                                 <div className="form-input">


//                                     <div className="text-xl text-center font-bold mt-8">
//                                         Đăng nhập
//                                     </div>

//                                     <div className=" w-full mx-auto mt-8 border-white">
//                                         <form className={classes.form} noValidate autoComplete="off">

//                                             <TextField
//                                                 variant="outlined"
//                                                 margin="normal"
//                                                 required
//                                                 fullWidth
//                                                 id="email"
//                                                 label="Email Address"
//                                                 name="email"
//                                                 autoComplete="email"
//                                                 autoFocus
//                                             />
//                                             <TextField
//                                                 variant="outlined"
//                                                 margin="normal"
//                                                 required
//                                                 fullWidth
//                                                 name="password"
//                                                 label="Password"
//                                                 type="password"
//                                                 id="password"
//                                                 autoComplete="current-password"
//                                             />
//                                             <div className="flex items-center">
//                                                 <input type="checkbox" className="h-4 w-4" />
//                                                 <label className="ml-2 text-sm ">Ghi nhớ đăng nhập</label>
//                                             </div>
//                                             <StyledButton className="button-customized"  >Đăng nhập</StyledButton>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Login
