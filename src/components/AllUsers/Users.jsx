import React, {useEffect, useState} from 'react';
import { getUsers, deleteUser } from '../api';
import { TableFooter, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import useStyles from './userStyle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';


const Users = () => {

        const classes = useStyles();

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
      const response = await getUsers();
       setUsers(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <div>
            <Typography variant="h3" component="h2" align='center' color='textSecondary' gutterBottom className={classes.heading}>All Users</Typography>
            <TableContainer component={Paper} className={classes.table}>
                <Table>
                    <TableHead >
                    <TableRow className={classes.tableHead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map(user => (
                                <TableRow>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell >
                                    <IconButton aria-label="delete" onClick={() => deleteUserData(user.id)}>
                                        <DeleteIcon color="secondary" />
                                        </IconButton>
                                    <IconButton aria-label="edit" component={Link} to={`/edit/${user.id}`}> 
                                    <EditIcon color="primary" />
                                    </IconButton>
                                    </TableCell>
                                </TableRow>
    ))
                        }
                    </TableBody>
                    <TableFooter className={classes.tableHead}>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableFooter>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Users
