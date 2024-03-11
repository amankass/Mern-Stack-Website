import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const UserSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { firstName, lastName, password, confirmPassword, gender, email, city,  });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-max">
      <form onSubmit={handleSubmit} className="shadow-md bg-slate-300 rounded-lg max-w-screen-2x2 p-5 m-5 mx-20 mr-9">
          <h1 className="text-3xl font-bold text-center mb-8">Register As User</h1>
          <div className="flex flex-wrap mx-4 -mr-48 ml-72">
          <div className="w-full md:w-1/2 px-24 mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                First Name *
              </label>
              <input 
                type="text"
                className="block border border-gray-300 w-full md:w-3/4 p-3 rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-24 mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                Last Name *
              </label>
              <input 
                type="text"
                className="block border border-gray-300 w-full md:w-3/4 p-3 rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div> <div className="w-full md:w-1/2 px-24 mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password *
              </label>
              <input 
                type="password"
                className="block border border-gray-300 w-full md:w-3/4 p-3 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="w-full md:w-1/2 px-24 mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                Confirm Password *
              </label>
              <input 
                type="password"
                className="block border border-gray-300 w-full md:w-3/4 p-3 rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>
         
            <div className="w-full md:w-1/2 px-24 mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email *
              </label>
              <input 
                type="text"
                className="block border border-gray-300 w-full md:w-3/4 p-3 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="w-full md:w-1/2 px-24 mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Region *
              </label>
              <input 
                type="text"
                className="block border border-gray-300 w-full md:w-3/4 p-3 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Region"
              />
            </div>
            <div className="w-full md:w-1/2 px-24 mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                City *
              </label>
              <input 
                type="text"
                className="block border border-gray-300 w-full md:w-3/4 p-3 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="City"
              />
            </div>
        <div className="w-full md:w-1/2 px-24 mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Phone No. *
              </label>
            <input 
             type="text"
             className="block border border-gray-300 w-full md:w-3/4 p-3 rounded"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Phone No."
             />
       </div>

            <div className="w-full md:w-1/2 px-24 mb-4">
              <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                Gender
              </label>
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                    className="mr-1 w-5 h-5"
                  />
                  <label htmlFor="male" className="text-gray-700 font-medium">Male</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                    className="mr-1 w-5 h-5"
                  />
                  <label htmlFor="female" className="text-gray-700 font-medium">Female</label>
                </div>
              </div>

            </div>
          </div>
          <div className="mb-4 flex justify-center items-center">
            <button type="submit" className="bg-blue-600 justify-center w-64 text-white p-2 rounded-md hover:bg-red-600 font-bold -mr-48 ml-72">Register</button>
          </div>
          <div className="flex">
          <span className="font-extrabold text-5xl -mt-96 mb-96 text-red-500">IBS BROKER</span>
          </div>
          <div className='flex'>
              <span className='m-0 p-3 -mt-96 font-bold'> Have an Account Click Here? <Link to='/Sign-In' className='text-blue-600 hover:text-red-600'> Login </Link> </span>  
            </div> 
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
