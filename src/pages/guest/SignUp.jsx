import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { UserRoles } from '../../lib/constants/common'
import { signUp } from '../../store/auth/auth.thunks'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const inputNameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const inputEmailChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  const inputPasswordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  const inputConfirmChangeHandler = (e) => {
    setConfirmPassword(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      name,
      password,
      role: UserRoles.USER,
    }
    dispatch(signUp(data))
      .unwrap()
      .then(() => navigate('/'))
  }

  return (
    <Grid display="flex" justifyContent="center" marginTop={20}>
      <Grid sx={{ background: '#fff', width: '500px', padding: '20px' }}>
        <form onSubmit={submitHandler}>
          <Grid display="flex" flexDirection="column">
            <TextField
              value={name}
              onChange={inputNameChangeHandler}
              label="Name"
            />
            <TextField
              value={email}
              onChange={inputEmailChangeHandler}
              label="Email"
              sx={{ marginTop: '20px' }}
            />
            <TextField
              value={password}
              onChange={inputPasswordChangeHandler}
              label="Password"
              sx={{ marginTop: '20px' }}
            />
            <TextField
              value={confirmPassword}
              onChange={inputConfirmChangeHandler}
              label="ConfirmPassword"
              sx={{ marginTop: '20px' }}
            />
            <Button type="submit">sign up</Button>
            <Link to="/signin">Have an account?</Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default SignUp
