import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Avatar, Button,  Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import {login} from "../../_services/auth.service"
import { getAuth } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const auth = getAuth();

    const paperStyle = { padding: 20, width: 400, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const grid = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center ",
        alignContent: "center",
        height: "100vh"
    }
    const textFiled = { marginTop: "20px" }
    const loginBtn = { marginTop: "20px" }
    const haveAccount = { marginTop: "20px" }
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [passErr, setPassErr] = useState("");
	const [errorMsg, setErrorMsg] = useState();
	const formInputChangeHandler = (e) => {
		e.preventDefault();
		if (e.target.name == 'email') {
			setEmail(e.target.value)
		}
		if (e.target.name == 'password') {
			setPassword(e.target.value)
		}
		if (e.target.name == 'phone') {
			setPhoneNumber(e.target.value)
		}
		
	}
    async function loginClickHandler(e) {
		e.preventDefault();
		var data = {
			email: email,
			password: password,
			phone: phoneNumber,

		};
		signInWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
			console.debug("userCrredential", userCredentials)
			if (userCredentials) {
				navigate("/")
			} else {
				console.log(userCredentials);
			}
		}).catch((error)=>{
			console.error("Error Message :", error)
		})
		
	}
    return (
		<Grid style={grid}>
		<Paper elevation={10} style={paperStyle}>
			<Grid align='center'>
				<Avatar style={avatarStyle}><LockOutlined /></Avatar>
				<h2>Sign In</h2>
			</Grid>
			<TextField label='Email' placeholder='Enter Email' style={textFiled} name="email"
			 onChange={formInputChangeHandler}
			  type="email"variant="outlined" fullWidth required />
			<TextField label='Password' placeholder='Enter password' style={textFiled} name="password" 
			onChange={formInputChangeHandler}
			type='password' variant="outlined" fullWidth required />
			<TextField label='Phone Number' placeholder='Enter Phone Number' style={textFiled} name="phone" 
			onChange={formInputChangeHandler}
			type='text' variant="outlined" fullWidth />

			<Button type='submit' color='primary' variant="contained" style={loginBtn} fullWidth 
			onClick={(e)=>loginClickHandler(e)}
			>Login</Button>
		 {errorMsg} 
			<Typography style={haveAccount}> Do you have an account ?
				<Link href="/register" >
					Sign Up
				</Link>
			</Typography>
		</Paper>
	</Grid> 
	)
    }
// }

export default Login

