import React, { useState } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button,Typography } from '@material-ui/core';
import useStyles from './addStyles';
import {addUser} from '../api';
import { useHistory } from 'react-router';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Add = () => {
    const [user, setUser] = useState(initialValue);
    const classes = useStyles();
    const history= useHistory();

    const onValueChange = (e) => {
            setUser({...user, [e.target.name]: e.target.value})
            console.log(user);
        }

        const addUserFunc = async () => {
            await addUser(user);
            history.push('./');
        }

        return (
            <FormGroup className={classes.form}>
                <Typography variant="h3" component="h2" align='center' color='textSecondary' gutterBottom>Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={e => onValueChange(e)} name='name' />
                    </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={e => onValueChange(e)} name='username'/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={e => onValueChange(e)} name='email'/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={e => onValueChange(e)} name='phone'/>
                </FormControl>
                <Button 
                variant="text" 
                onClick={() => addUserFunc()} 
                className={classes.button}>ADD USER</Button>
            </FormGroup>

        )
    }


export default Add
