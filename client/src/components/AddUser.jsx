import { useState } from "react";
import styled from "@emotion/styled";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from "@mui/material";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";


const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`

const defaultValue = {
    name: '',
    email: '',
    hobbies: '',
    phone: '',

}


const AddUser=()=>{
    
    const [user, setUser] = useState({defaultValue});

    const navigate = useNavigate();

    const onValueChange=(e)=>{
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const addUserDetails = async () =>{
       await addUser(user);
       navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Hobbies</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="hobbies"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )

}
export default AddUser;