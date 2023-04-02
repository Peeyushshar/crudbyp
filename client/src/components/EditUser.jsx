import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from "@mui/material";
import { editUser, getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";



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


const EditUser=()=>{
    
    const [user, setUser] = useState({defaultValue});

    const navigate = useNavigate();
    const {id}= useParams();

    useEffect(()=>{
        loadUserDetails();
    },[])

    const loadUserDetails = async() =>{
        const response = await getUser(id);
        // console.log(response.data);
        setUser(response.data);
    }

    const onValueChange=(e)=>{
        // console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const editUserDetails = async () =>{
       await editUser(user, id);
       navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Hobbies</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="hobbies" value={user.hobbies}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )

}
export default EditUser;