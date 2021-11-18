import { useState } from 'react'
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

    const handleSubmit = e => {
        e.preventDefault()

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
                            error={nameError}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <TextField 
                            className='my-3'
                            label="Surname" 
                            variant="outlined"
                            fullWidth 
                            required
                            error={surnameError}
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                        />

                        <TextField 
                            className='my-3'
                            label="Email" 
                            variant="outlined"
                            fullWidth 
                            required
                            error={emailError}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <TextField 
                            className='my-3'
                            label="Password" 
                            variant="outlined"
                            fullWidth 
                            required
                            error={passwordError}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <TextField 
                            className='my-3'
                            label="Confirm Password" 
                            variant="outlined"
                            fullWidth 
                            required
                            error={password2Error}
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                        />

                        <div className='d-flex justify-content-center'>
                            <Button type='submit' variant="contained">Register</Button>
                        </div>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome