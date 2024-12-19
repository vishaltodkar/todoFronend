import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { register } from '../services/authService';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(email, password)
            navigate('/')
        }
        catch (err) {
            setError("Registration Failed")
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <form onSubmit={handleRegister} className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Register</h2>
                {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
                <input
                    type='email'
                    placeholder='Email'
                    className='w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Register
                </button>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-400">
                        Already have an account?
                        <span
                            onClick={() => navigate('/login')}
                            className="text-blue-500 cursor-pointer hover:underline ml-1">
                            Login here
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register;
