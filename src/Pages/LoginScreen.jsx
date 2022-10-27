import axios, { Axios } from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/loginScreen.css'

const LoginScreen = () => {

    const { handleSubmit, register, reset } = useForm()

    const [isLogged, setIsLogged] = useState(false)

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        }else {
            setIsLogged(false)
        }
    }, [])
    
    const handleIsLogout = () => {
        localStorage.getItem('token')
        setIsLogged(false)
    }


    if (isLogged) {
        return (
            <div className='login-container'>
                <h2>User Logged ✔</h2>
                <button onClick={handleIsLogout}>Logout</button>
            </div>
        )
    }

    return (
        <div>
            <form className='logout-container' onSubmit={handleSubmit(submit)}>
                <div>
                    <label className='logout-container-inputs' htmlFor="email">Email</label>
                    <input className='logout-container-inputs' type="email" id='email' {...register('email')} />
                </div>
                <div>
                    <label  className='logout-container-inputs' htmlFor="password">Password</label>
                    <input className='logout-container-inputs' type="password" id='password'  {...register('password')} />
                </div>
            </form>
            <button>Login</button>
        </div>
    )
}

export default LoginScreen