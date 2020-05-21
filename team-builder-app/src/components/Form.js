import React, { useState } from 'react'





function Form(props) {
    console.log(props)

    const [ formValue, setFormValue ] = useState({
        fname:"",
        lname:"",
        email:"",
        role:""
    })

    const handleChanges = e => {
        setFormValue({[e.target.name]: e.target.value}, ...formValue)
    }

    const submitForm = e => {
        e.preventDefault();
        props.addMember(formValue)
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">First Name</label>
                <input 
                    type="text"
                    id="fname"
                    placeholder="First Name"
                    name="fname"
                    value={formValue.fname}
                    onChange={handleChanges}
                    required
                    />
                <br />
                <label htmlFor="name">Last Name</label>
                <input
                    type="text"
                    id="lname"
                    placeholder="Last Name"
                    name="lname"
                    value={formValue.lname}
                    onChange={handleChanges}
                    required
                />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    name="email"
                    value={formValue.email}
                    onChange={handleChanges}
                    required
                />
                <br />
                <label htmlFor="role">
                    <select
                    name="role"
                    id="role"
                    value={formValue.role}
                    onChange={handleChanges}
                    >
                    <option value="none" selected>Select an Option</option> 
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="Fullstack Engineer">Full Stack Engineer</option>

                    </select>
                    <br/>
                </label>
                <br />
                <button type="submit" id="addformValue">Submit</button>
            </form>
        </div>
    );
};

export default Form
