import { Table, TableBody, TableCell, TableHead, TableRow , styled, Button} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser, sendEmail } from '../service/api';

<script src="https://smtpjs.com/v3/smtp.js"></script>

const StyledTable = styled(Table)`
    width:90%;
    margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
     background: #000000;
     & > th {
        color: #fff;
        font-size: 20px;
     }  
`

const TBody = styled(TableRow)`
    & > td {
       font-size: 20px; 
    }
`

const AllUsers=()=>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers();
    }, []);

    const getAllUsers = async () =>{
        let response = await getUsers();
        setUsers(response.data);
    }

    const deleteUserDetails = async (id)=>{
        await deleteUser(id);
        getAllUsers();
    }

   const sendEmailDetails = async (id)=>{
    await sendEmail(id);
   }

   
    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Hobbies</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {   
                   users.map(user =>(
                        <TBody key={user._id}>
                           <TableCell>{user._id}</TableCell>
                           <TableCell>{user.name}</TableCell>
                           <TableCell>{user.email}</TableCell>
                           <TableCell>{user.hobbies}</TableCell>
                           <TableCell>{user.phone}</TableCell>
                           <TableCell>
                            <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant="contained" style={{marginRight:10}} color="secondary" onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                            <Button variant="contained" color="secondary" onClick={()=>sendEmailDetails(user._id)}>Send To Mail</Button>
                           </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;