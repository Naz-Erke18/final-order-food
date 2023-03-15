import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../../store/auth/auth.thunks'

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const inputEmailChangeHandler = (e) => {
    setEmail(e.target.value)
    setError('')
  }
  const inputPasswordChangeHandler = (e) => {
    setPassword(e.target.value)
    setError('')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
    }
    dispatch(signIn(data))
      .unwrap()
      .then(() => navigate('/admin/meals'))
      .catch((err) => {
        setError(err.response.data.message)
      })
  }

  const isEmailValid = () => {
    return email.length === 0 || (email.length > 0 && email.includes('@'))
  }

  const isPasswordlValid = () => {
    return (
      password.length === 0 || (password.length > 0 && password.length >= 6)
    )
  }

  return (
    <Grid display="flex" justifyContent="center" marginTop={20}>
      <Grid sx={{ background: '#fff', width: '500px', padding: '20px' }}>
        <form onSubmit={submitHandler}>
          <Grid display="flex" flexDirection="column">
            <TextField
              error={!isEmailValid()}
              value={email}
              onChange={inputEmailChangeHandler}
              label="Email"
            />
            <TextField
              error={!isPasswordlValid()}
              value={password}
              onChange={inputPasswordChangeHandler}
              label="Password"
              sx={{ marginTop: '20px' }}
            />
            {error && (
              <Typography
                textAlign="center"
                sx={{ color: (theme) => theme.palette.error.main }}
              >
                {error}
              </Typography>
            )}
            <Button type="submit">Sign in</Button>
            <Link to="/signup">{`Don't have account?`}</Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default SignIn
