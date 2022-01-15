import React from 'react';
import API from '../../Axios/baseAxios';

import styled from './Modal.module.css';

const CreateUser = () => {

    const [formValueEl, setformValueEl] = React.useState({
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        password: '',
        password_confirmation: '',
        avatar:null
    });

    const handleChange = (e) => { setformValueEl({ ...formValueEl, [e.target.name]: e.target.value })};
        
    const handleChangeFile = (e) => setformValueEl( {...formValueEl, avatar: e.target.files[0]} );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

                       // -----  перебирает ключи в обьекте -----
        Object.keys(formValueEl).forEach((key) => { formData.append(key, formValueEl[key] ); });

        const config = { headers: { "Content-Type": "multipart/form-data" } };
        await API.post('users', formData, config)
        .then((response)=>response.data)
        .catch((error)=>console.log(error));
    }
    
    
    const { email, first_name, last_name, phone, password, password_confirmation, } = formValueEl;

    return (
        <div className={styled.modal}>
            <form onSubmit={handleSubmit}>
            
                <input type='email' name='email' placeholder='@Email' value={ email } onChange={handleChange}/>
                
                <input type='text' name='first_name' placeholder='Name'  value={ first_name }  onChange={handleChange}/>
                
                <input type='text' name='last_name' placeholder='Last Name' value={ last_name } onChange={handleChange}/>
               
                <input type='text' name='phone' placeholder=' Phone' value={ phone } onChange={handleChange}/>
              
                <input type='password' name='password' placeholder='Password' value={ password } onChange={handleChange}/>
               
                <input type='password' name='password_confirmation' placeholder='Confirm Password' value={ password_confirmation } onChange={handleChange}/>
                
                <input type='file' name='avatar' onChange={handleChangeFile} accept="image/png, image/jpeg"/>
                 
                 <input type='submit'/>
            </form>
        </div>
    )
}

export default CreateUser;