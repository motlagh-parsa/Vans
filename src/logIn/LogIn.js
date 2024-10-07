import {Alert, Box, Button, FormControl, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {
    Form,
    redirect,
    useActionData,
    useLoaderData,
    useLocation,
    useNavigate, useNavigation,
    useSearchParams
} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {loginUser} from "../api";

export const loginLoader = ({request}) => {
    return new URL(request?.url).searchParams.get('message')
}

export const action = async ({request}) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const data = {email, password}
    const pathName = new URL(request.url).searchParams.get('pathName')
    console.log(pathName, 'pathNameeeeeee')
    // const result = await loginUser(data)
    //     .then((res) => localStorage.setItem('token', JSON.stringify(res.token)))
    //     // .then(() => redirect('/host'))
    //     .catch((err) => {
    //         console.log(err, 'err')
    //         localStorage.removeItem('token')
    //     })
    // console.log(result, 'result')

    try {
        const res = await loginUser(data)
        localStorage.setItem('token', JSON.stringify(res.token))
    } catch (err) {
        localStorage.removeItem('token')
        return err
    }
    if (localStorage.getItem('token')) {
        throw redirect(pathName ? pathName : '/')
        // throw redirect('/')
    } else return 'couldn\'t log in'
}

export function LogIn() {

    const [logInFormData, setLogInFormData] = useState({email: '', password: ''})
    // const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    const navigation = useNavigation()
    console.log(navigation, 'navigation')
    const actionError = useActionData()

    function handleSubmit(e) {
        e.preventDefault()
        setError(null)
        // setStatus("submitting")
        loginUser(logInFormData)
            // .then(data => navigate(-1))
            .then(data => navigate('/host', {replace: true}))
            // .then(data => navigate('/'))
            .catch((err) => {
                console.log(err, 'err')
                setError(err)
                // setStatus('idle')
            })
        // .finally(() => setStatus('idle'))
    }


    const handleChange = (event) => {
        const {name, value} = event.target
        setLogInFormData(prevState => ({...prevState, [name]: value}))
    }

    // const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams.get('message'), 'searchParams.get(message)')
    const loc = useLocation()
    // console.log(loc, 'loc')
    const loaderMessage = useLoaderData()
    const showLogInMessage = () => {
        toast.warning(loaderMessage, {
            position: "top-center"
        })
    }
    const showErrorMessage = () => {
        // toast.error(error.message.concat(' ', error.status, ' ', error.statusText), {
        toast.error(actionError.message.concat(' ', actionError.status, ' ', actionError.statusText), {
            position: "top-center"
        })
    }
    return (
        <>
            {/*{searchParams.get('message') &&*/}
            {/*    <div style={{display: 'flex', justifyContent: 'center'}}>*/}
            {/*        <Alert severity="warning">{searchParams.get('message')}</Alert>*/}
            {/*    </div>*/}
            {/*}*/}

            {/*{(loaderMessage) &&*/}
            {/*    <div>*/}
            {/*        /!*<Alert severity="warning">{loaderMessage}</Alert>*!/*/}
            {/*        {showLogInMessage()}*/}
            {/*        <ToastContainer limit={1}/>*/}
            {/*    </div>*/}
            {/*}*/}

            {/*{error &&*/}
            {actionError &&
                <div>
                    {/*<Alert severity="warning">{loaderMessage}</Alert>*/}
                    {showErrorMessage()}
                    <ToastContainer limit={1}/>
                </div>
            }
            <div className={'login-container'}>
                <Form method={"post"} replace
                    // onSubmit={handleSubmit}
                      className={'login-form'}>
                    <h1 style={{margin: 'auto'}}>Sign in to your account</h1>

                    <input name={'email'}
                        // onChange={handleChange} value={logInFormData.email}
                           type={'email'} placeholder={'email'}/>

                    <input name={'password'}
                        // onChange={handleChange} value={logInFormData.password}
                           type={"password"} placeholder={"password"}/>

                    <button disabled={navigation.state === 'submitting'}>
                        {navigation.state === 'idle' ? 'Log in' : 'Logging in ...'}
                    </button>
                </Form>
            </div>
        </>
    )
}