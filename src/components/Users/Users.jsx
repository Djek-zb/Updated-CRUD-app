import React from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import API from '../../Axios/baseAxios';
import UpdateForm from './UpdateForm';

import styled from './Users.module.css';

const Users = () => {
    const users = useSelector((state) => state.users.usersArray);

    const [userId, setUserId] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [edit, setEdit] = React.useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: ''
      });

//======= delete func==============
    const handleDelete = (id) => {
        if (window.confirm("Delete-?")) {
            API.delete(`users/${id}`)
          }
    }

    const updateUser = (id) => {
        const singleUser = users.find((dt) => dt.id === id);
        setUserId(id)
        setEdit({
          first_name: singleUser.first_name,
          last_name: singleUser.last_name,
          email: singleUser.email,
          phone: singleUser.phone,
          password: singleUser.password,
          password_confirmation: singleUser.password_confirmation,
        })
      };

      const handleChange = (e) => {
        let { name, value } = e.target;
        setEdit({ ...edit, [name]: value });
      }

      const handleUserUpdate = (e) => {
        e.preventDefault();
       
        API.put(`users/${userId}`, edit).then(response => console.log(response))
        
        setOpen(false)
      };

    //   ======= change image =====================
    const inputFile = useRef(null);
    const [avatarId, setAvatarId] = React.useState(null);

    const handleChangeImage = (e) => {
        e.preventDefault();
        
      };

      const openImageUpdate = (id) => {
        setAvatarId(id)
        inputFile.current.click();
      };

      const onChangePhoto = (e) => {
        let formData = new FormData();
        const onChangeImage = e.target.files[0];
        formData.append('avatar', onChangeImage);
         
         const config = { headers: { "Content-Type": "multipart/form-data" } }
          API.post(`users/${avatarId}/avatars`, formData, config)
    
        console.log('onchange', onChangeImage );
      }
    
    return (
            <div className={styled.usersBorder}>

                {users.map((user) =>
                    <div key={user.id} className={styled.userMap}>

                        <div className={styled.second}>

                           <img onClick={() => openImageUpdate(user.id)} src={ user.avatar } alt={user.avatar} className={styled.userAvatar} />
                        
                           <h2>{ user.first_name }</h2> 
                        </div>

                         <div className={styled.btn}>

                        <button onClick={() => updateUser(user.id)} className={styled.btnUp}>
                            <span onClick={handleOpen} >Update</span>
                        </button>

                           <button onClick={ () => handleDelete(user.id) } className={styled.btnDel}>Delete</button>

                         </div>
                        
                    </div>

                )}
                     <UpdateForm 
                        handleUserUpdate={handleUserUpdate} 
                        handleChange={handleChange} 
                        edit={edit} 
                        setEdit={setEdit} 
                        open={open}  
                        handleClose={handleClose}/>    
                        <form onSubmit={handleChangeImage} autoComplete='off'>
                                <input style={{display:'none'}} name='avatar' type='file' id='file' ref={inputFile} onChange={onChangePhoto} />
                        </form>
            </div>
    )
};

export default Users;