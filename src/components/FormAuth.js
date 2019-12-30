import React,{useState} from 'react'
import styled from 'styled-components';
import auth from '../utils/auth'
import {useHistory} from "react-router-dom";
import {Alert} from './Alert'
import {Button} from './Button'
import Loading from './Loading'

/**Define component usin only class from Tailwind css */
const Form = styled.form.attrs({
  className: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gray-100'
})``

const Input = styled.input.attrs(props => ({
  className: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`
}))``

const Label = styled.label.attrs({
  className: 'block text-gray-700 text-sm font-bold mb-2'
})``

const SingButton = styled(Button)`
  background-color:blue;
`

const InputContainer = styled.div.attrs({
  className: 'mb-6'
})``

/**
 * Form component for login page
 */

const FormAuth = () => {
  const history = useHistory();
/**Define statte for user data for authenticate */
  const [user, setUser] = useState({
    email: '', password: ''
  });
  const [load,setLoad] = useState(false)
/**Define state for alert show, in case of error */
  const [alert, setAlert] = useState(false)

  /** Insert value in statue User with useState */
  const handleOnChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
/** use method login in /utils/auth  class, return status or error, if status is 200 redirect to '/' route */
  const login = e =>{
    setLoad(true)
    e.preventDefault();
    auth.login((status)=>{
      if (status === 200) {
        history.push("/");
      }else{
        /**hide loading  and Show alert */
        setLoad(false)
        setAlert(true)
      }
    },user)
  }

  return (
    <div className="w-full max-w-xs">

        <Form>

          <InputContainer >
            <Label>Email</Label> 
            <Input type="email" name="email" placeholder="Email" onChange={handleOnChange}/>
          </InputContainer>

          <InputContainer >
            <Label>Password</Label> 
            <Input type="password" name="password" placeholder="*********" onChange={handleOnChange}/>
          </InputContainer>

          <SingButton onClick={login} >Sign In</SingButton>

        </Form>

        <p className="text-center text-gray-500 text-xs">
          &copy;2019 Eva Center. All rights reserved.
        </p>

        {alert === true && <Alert type="error" title="Error: " message="Verify you data"/> /**If state aler change, show or hide Alert component */}

        { load === true && <Loading/> /**Show loading component when call api auth */}

      </div>
  )
}

export default FormAuth;




