import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


const Welcome = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const [nameError, setNameError] = useState(false)
    const [surnameError, setSurnameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [password2Error, setPassword2Error] = useState(false)

    const validateForm = () => {

        setNameError(false)
        setSurnameError(false)
        setEmailError(true)
        setPasswordError(true)
        setPassword2Error(false)

        if (name.length < 1) setNameError(true)
        if (surname.length < 2) setSurnameError(true)
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) setEmailError(false)
        if (password.match(/[a-z]/g) && password.match(/[0-9]/g) && password.length >= 8) setPasswordError(false)
        if (password2 !== password || password2.length < 1) setPassword2Error(true)

        if (nameError === false && surnameError === false && emailError === false && passwordError === false && password2Error === false) {

        }
    }

    const handleSubmit = e => {
        alert('submitted')
    }

    return (
        <Container className='register-form'>
            <Row className='justify-content-center my-3 py-4'>
                <Col xs='12' md='6' className='border rounded p-4'>
                    <h2 className='text-center'>Register</h2>
                    <Box component='form' noValidate className='mt-4' onSubmit={handleSubmit}>
                        <TextField 
                            className='my-3'
                            label="Name" 
                            variant="outlined"
                            fullWidth 
                            required
                            helperText='Must be atleast 2 characters'
                            error={nameError}
                            value={name}
                            onChange={e => {
                                setName(e.target.value)
                                validateForm()
                            }}
                        />

                        <TextField 
                            className='my-3'
                            label="Surname" 
                            variant="outlined"
                            fullWidth 
                            required
                            helperText='Must be atleast 3 characters'
                            error={surnameError}
                            value={surname}
                            onChange={e => {
                                setSurname(e.target.value)
                                validateForm()
                            }}
                        />

                        <TextField 
                            className='my-3'
                            label="Email" 
                            variant="outlined"
                            fullWidth 
                            required
                            helperText='Must be a valid email'
                            error={emailError}
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value)
                                validateForm()
                            }}
                        />

                        <TextField 
                            className='my-3'
                            label="Password" 
                            variant="outlined"
                            fullWidth 
                            required
                            helperText='Password must be at least 8 characters and contain 1 letter and 1 number'
                            error={passwordError}
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value)
                                validateForm()
                            }}
                        />

                        <TextField 
                            className='my-3'
                            label="Confirm Password" 
                            variant="outlined"
                            fullWidth 
                            required
                            helperText='Passwords must match'
                            error={password2Error}
                            value={password2}
                            onChange={e => {
                                setPassword2(e.target.value)
                                validateForm()
                            }}
                        />

                        <div className='d-flex justify-content-center'>
                            {/* <Button type='submit' variant="contained" disabled>Register</Button> */}
                            <Button type='submit' variant="contained">Register</Button>
                        </div>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome