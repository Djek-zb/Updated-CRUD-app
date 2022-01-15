import { Box, Modal } from '@mui/material';
import React from 'react';

const UpdateForm = ({edit, setEdit, handleOpen, open, handleClose, handleChange, handleUserUpdate}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 515,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const { first_name, last_name, email, phone, password, password_confirmation } = edit;

    return (
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClick={handleOpen}
      >  
        <Box sx={style}>

        <form onSubmit={handleUserUpdate} >
            
                <input type='email' name='email' placeholder='@Email' value={email} onChange={handleChange}/>
                
                <input type='text' name='first_name' placeholder='Name'  value={ first_name }  onChange={handleChange}/>
                
                <input type='text' name='last_name' placeholder='Last Name' value={ last_name } onChange={handleChange}/>
               
                <input type='text' name='phone' placeholder=' Phone' value={ phone } onChange={handleChange}/>
              
                <input type='text' name='password' placeholder='Password' value={ password || '' } onChange={handleChange}/>
               
                <input type='text' name='password_confirmation' placeholder='Confirm Password' value={ password_confirmation || '' } onChange={handleChange}/>
                
                 <input type='submit'/>

            </form>

        </Box>

      </Modal>
    </div>
    )
}

export default UpdateForm;
