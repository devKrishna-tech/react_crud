import React, { useState, useEffect } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button,Typography } from '@material-ui/core';
import useStyles from './editStyles';
import {editUser, getUsers} from '../api';
import { useHistory, useParams } from 'react-router';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Edit = () => {
    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone} = user;
    const { id } = useParams();
    const classes = useStyles();
    const history= useHistory();

    const onValueChange = (e) => {
            setUser({...user, [e.target.name]: e.target.value})
            console.log(user);
        }

        const editUserFunc = async () => {
            await editUser(id, user);
            history.push('/');
        }

        useEffect(() => {
            loadUserData();
        }, []);
         

        const loadUserData = async () => {
            const response = await getUsers(id);
            setUser(response.data);
        }


        return (
            <FormGroup className={classes.form}>
                <Typography variant="h3" component="h2" align='center' color='textSecondary' gutterBottom>Edit User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={e => onValueChange(e)} name='name' value={name}/>
                    </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={e => onValueChange(e)} name='username'value={username}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={e => onValueChange(e)} name='email' value={email}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={e => onValueChange(e)} name='phone' value={phone}/>
                </FormControl>
                <Button 
                variant="text" 
                onClick={() => editUserFunc()} 
                className={classes.button}>EDIT USER</Button>
            </FormGroup>

        )
    }


export default Edit
