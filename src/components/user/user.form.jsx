import React, { use, useState } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios';
const UserForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    console.log({fullName, email, password, phone});

    const handleSubmit = () => {
        const URL_BE = "https://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone
        }
        axios.post(URL_BE, data)
    }
    return (
        <div>
            <div>
                <span>Full Name</span>
                <Input placeholder="Full Name"  onChange={(e)=>{
                    setFullName(e.target.value);
                }}/>
            </div>
            <div>
                <span>Email</span>
                <Input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <span>Password</span>
                <Input.Password placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <span>Phone</span>
                <Input placeholder="Phone"  onChange={(e)=> setPhone(e.target.value)}/>
            </div>
            <Button type="primary" onClick={(e)=>handleSubmit(e)}>Submit</Button>
        </div>
    )
}

export default UserForm;