import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import {useState} from "react";

export function LogIn() {

    const [logInFormData, setLogInFormData] = useState({userName: '', password: ''})
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value, 'event.target.value')
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setLogInFormData(prevState => ({...prevState, [name]: value}))
        console.log(logInFormData, 'logInFormData')
    }

    return (
        <FormControl onSubmit={handleSubmit}
                     sx={{display: 'flex', flexDirection: 'column', gap: '16px', width: '35%', margin: 'auto'}}>
            <h1 style={{margin: 'auto'}}>Sign in to your account</h1>

            <TextField name={'userName'} onChange={handleChange} value={logInFormData.userName} fullWidth
                       label={'Username'}/>

            <TextField name={'password'} onChange={handleChange} value={logInFormData.password} fullWidth
                       label={'Password'} type={"password"}/>

            <Button style={{backgroundColor: "#FF8C38", height: '60px', color: 'black'}}>Log in</Button>
        </FormControl>
    )
}