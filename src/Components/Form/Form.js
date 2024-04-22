import React, { useState } from 'react'

export default function Form() {

    const [user, setUser] = useState({name: '', email: '', password: ''})
    const {name, email, password} = user

    // const handleChange = (e) => {
    //     const fieldName = e.target.name;
    //     if (fieldName === 'name') {
    //         setUser({name: e.target.value, email, password});
    //     }
    //     if(fieldName === 'email'){
    //         setUser({name, email: e.target.value, password});
    //     }
    //     if(fieldName === 'password'){
    //         setUser({name, email, password: e.target.value});
    //     }
    // }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) =>{
        console.log('Form is submitted !');
        let userInfo = {
            name: name,
            email: email,
            password: password,
        }
        console.log(userInfo);
        e.preventDefault();
    }

    return (
        <div className='card mt-5'>
            <h3>Register Now</h3>
            <p>Fill up the all information</p>
            <form action='' onSubmit={handleSubmit}>
                <div className='my-2'>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' className='form-control' placeholder='Name' onChange={handleChange} name='name' value={name} id='name' required/>
                </div>
                <div className='my-2'>
                    <label htmlFor='name'>Email: </label>
                    <input type='email' className='form-control' placeholder='Email' onChange={handleChange} name='email' value={email} id='email' required/>
                </div>
                <div className='my-2'>
                    <label htmlFor='name'>Password: </label>
                    <input type='password' className='form-control' placeholder='Password' onChange={handleChange} name='password' value={password} id='password' required/>
                </div>
                <div className='login-btn mt-4'>
                    <button type='submit' className='btn btn-success'> Submit </button>
                </div>
            </form>
        </div>
    )
}
