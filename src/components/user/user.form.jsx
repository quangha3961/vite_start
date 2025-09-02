import React from 'react';
import { Button, Input } from 'antd';
const UserForm = () => {
    return (
        <div>
            <div>
                <span>Full Name</span>
                <Input placeholder="Full Name" />
            </div>
            <div>
                <span>Email</span>
                <Input placeholder="Email" />
            </div>
            <div>
                <span>Password</span>
                <Input.Password placeholder="Password" />
            </div>
            <div>
                <span>Phone</span>
                <Input placeholder="Phone" />
            </div>
            <Button type="primary">Submit</Button>
        </div>
    )
}

export default UserForm;