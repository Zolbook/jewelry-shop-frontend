import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Register({onLogin}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    async function handleRegister(event) {
        event.preventDefault(); 
        if (password !== confirmPassword) {
            alert("Нууц үг таарахгүй байна");
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json(); 
                if (response.status === 409) { 
                    setErrorMessage(errorData.message || 'Хэрэглэгчийн нэр бүртгэгдсэн байна');
                } else {
                    throw new Error(errorData.message || 'Бүртгэл амжилтгүй');
                }
                return; 
            }

            const data = await response.json();
            console.log('Бүртгэл амжилттай', data);
            navigate('/'); 
        } catch (error) {
            console.error('Бүртгэл амжилтгүй:', error);
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
             
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Бүртгүүлэх
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Хэрэглэгчийн нэр</label>
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required value={username} onChange={(e) => setUserName(e.target.value)} />
                            </div>
                    
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Нууц үг</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Нууц үг баталгаажуулах</label>
                                <input type="password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="w-full text-white bg-red-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Бүртгүүлэх</button>
                        </form>
                       
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
  Бүртгэлтэй хэрэглэгч? 
  <Link to="/login" className="font-medium text-red-600 hover:underline dark:text-red-500">
    Нэвтрэх
  </Link>
</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
