import React, { use, useState } from 'react';
import { Button, Input, notification } from 'antd';
import axios from 'axios';
import { createAPI } from '../../services/api.services';
const UserForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    console.log({fullName, email, password, phone});

    const handleSubmit = async (e) => {
        const res = await createAPI(fullName, email, password, phone);
        if(res.data){
            notification.success({
                message: "Create user successfully"
            })
        }
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