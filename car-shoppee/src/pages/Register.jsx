import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import exstyle from '../assets/css/exstyle.css'

import axios from 'axios'
import footer from '../components/footer'


function Register() {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const onSubmitRegister = async (e) => {
        e.preventDefault()
        const userDetails = {
            first_name: firstname,
            last_name: lastname, 
            email: email,
            password: password
        }
        try{
            await axios.post('http://localhost:3000/api/user/add', userDetails)
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div>
                        <h3>Create My Account</h3>
                        <form onSubmit={onSubmitRegister}>
                            <div className="second-input">
                                <input type="text" placeholder="Firstname" className="name" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="second-input">
                                <input type="text" placeholder="Lastname" className="name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="second-input">
                                <input type="text" placeholder="Email" className="name" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="second-input">
                                <input type="password" placeholder="Password" className="name" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="Register-button mt-4">
                                <button type='submit'>Register</button>
                            </div>
                        </form>
                        <div className="link">
                            <p>Already Have an Account? <Link to="/Login">Login </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Register