import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const handleClick = (e) => {
        console.log("success");
        e.preventDefault();
        
 
    }
        const[inputs,setInputs]=useState({
            username:'',
            email:'',
            password:'',
            cpassword:''
        })
 
        const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setInputs({...inputs,[name]:value})
        }
        
        const[focus,setFocus]=useState({
            errName:'fasle',
            errEmail:'fasle',
            errPass:'false',
            errCpass:'false'
        })

      
    return (
         <form onSubmit={handleClick}> 
        <div className='form'>
            <h1 className='title'>FORM VALIDATION </h1>

            <div className='content'>
            
                <div className='input_container'>
                <label>Username</label>
                    <input
                        type="text"
                        placeholder='Enter username'
                        className='input_box'
                        id='name'
                        name='username'
                        value={inputs.username}
                        onChange={ handleChange}
                        pattern='^[A-za-z0-9].{2,16}'
                        onBlur={()=>setFocus({...focus,errName:true})}
                        focus={focus.errName.toString()}
                        required

                      
                       
                    /> 
                    
                    <span >Username should have 3-16 characters</span>
                    
                </div>

                <div className='input_container'>
                  <label>Email</label>
                    <input
                        type="text"
                        placeholder='Enter email'
                        className='input_box'
                        id='email'
                        name='email'
                        value={inputs.email}
                        onChange={ handleChange}
                        onBlur={()=>setFocus({...focus,errEmail:true}) }
                        focus={focus.errEmail.toString()}
                        required

                    />
                    <span>Enter a valid Email id</span>
                </div>
                 
                
                
                <div className='input_container'>
                <label>Password</label>
                    <input
                        type="text"
                        placeholder='Enter password'
                        className='input_box'
                        id='password'
                        name='password'
                        value={inputs.password}
                        onChange={ ()=>setFocus({...focus,errPass:true})}
                        pattern='^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$
                        '
                        onBlur={()=>setFocus({...focus,errPass:true})}
                        focus={focus.errPass.toString()}
                        required
                    />
                    <span>Password must have minimum 8 characters and include atleast 1 uppercase,1 digit,1 special character</span>
                </div>
                 
                <div className='input_container'>
                  <label> Confirm Password</label>
                    <input
                        type="text"
                        placeholder='Confirm password'
                        className='input_box'
                        id=' cpassword'
                        name='cpassword'
                        value={inputs.cpassword}
                        onChange={ handleChange}
                        pattern={inputs.password}
                        onBlur={ ()=>setFocus({...focus,errCpass:true})}
                        focus={focus.errCpass.toString()}
                        required
                    />
                    <span>Password is not matching</span>
                </div>

                
                
            </div>

            <div>
                <button   className='btn'>
                    Login
                </button>
            </div>
        </div>
        </form>
    );
};

export default Form;



