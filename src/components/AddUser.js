import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/Actions';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddUser = ({ addUser }) => {
  const navigate = useNavigate();
  const [inputdata, setInputdata] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address1: '',
    address2: '',
    state: '',
    city: '',
    country: '',
    zip: '',
  });

  const setUseradduser = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, mobile, address1, state, city, country, zip } = inputdata;

    if (!firstName || firstName.length < 5) {
      toast.error('First Name is required and must be at least 5 characters.');
      return;
    }

    if (!lastName || lastName.length < 5) {
      toast.error('Last Name is required and must be at least 5 characters.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error('Invalid Email format.');
      return;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobile || !mobileRegex.test(mobile)) {
      toast.error('Invalid Mobile number format.');
      return;
    }

    if (!address1) {
      toast.error('Address Line 1 is required.');
      return;
    }

    if (!state) {
      toast.error('State is required.');
      return;
    }

    if (!city) {
      toast.error('City is required.');
      return;
    }

    if (!country) {
      toast.error('Country is required.');
      return;
    }

    if (!zip) {
      toast.error('Zip is required.');
      return;
    }

    try {
      addUser(inputdata);
      const response = await fetch('https://novelti-assignment-backend.onrender.com/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputdata),
      });

      if (response.ok) {
        toast.success('Add user successfully', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate('/alluser');
        }, 3000);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error('Internal Server Error');
    }
  };

  return (
    <div className='container mt-5'>
      <h4>All New User Information</h4>
      <div className='underline1'></div>
      <form className='mt-5 shadow p-5 w-75'>
        <div className='mb-3'>
          <label htmlFor='firstName' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            className='form-control'
            id='firstName'
            placeholder='Enter First Name'
            onChange={setUseradduser}
            name='firstName'
            value={inputdata.firstName}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='lastName' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            className='form-control'
            id='lastName'
            placeholder='Enter Last Name'
            onChange={setUseradduser}
            name='lastName'
            value={inputdata.lastName}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Enter Email'
            onChange={setUseradduser}
            name='email'
            value={inputdata.email}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='mobile' className='form-label'>
            Mobile
          </label>
          <input
            type='number'
            className='form-control'
            id='mobile'
            placeholder='Enter Mobile'
            onChange={setUseradduser}
            name='mobile'
            value={inputdata.mobile}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='address1' className='form-label'>
            Address Line 1
          </label>
          <input
            type='text'
            className='form-control'
            id='address1'
            placeholder='Enter Address Line 1'
            onChange={setUseradduser}
            name='address1'
            value={inputdata.address1}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='address2' className='form-label'>
            Address Line 2
          </label>
          <input
            type='text'
            className='form-control'
            id='address2'
            placeholder='Enter Address Line 2'
            onChange={setUseradduser}
            name='address2'
            value={inputdata.address2}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='state' className='form-label'>
            State
          </label>
          <input
            type='text'
            className='form-control'
            id='state'
            placeholder='Enter State'
            onChange={setUseradduser}
            name='state'
            value={inputdata.state}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='city' className='form-label'>
            City
          </label>
          <input
            type='text'
            className='form-control'
            id='city'
            placeholder='Enter City'
            onChange={setUseradduser}
            name='city'
            value={inputdata.city}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='country' className='form-label'>
            Country
          </label>
          <input
            type='text'
            className='form-control'
            id='country'
            placeholder='Enter Country'
            onChange={setUseradduser}
            name='country'
            value={inputdata.country}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='zip' className='form-label'>
            ZIP Code
          </label>
          <input
            type='text'
            className='form-control'
            id='zip'
            placeholder='Enter ZIP Code'
            onChange={setUseradduser}
            name='zip'
            value={inputdata.zip}
          />
        </div>

        <div className='d-flex'>
          <button className='btn btn-primary' onClick={addinpdata}>
            Add User
          </button>
          <ToastContainer />
          <NavLink className='btn btn-primary ms-auto' to='/allUseradduser'>
            Back to Home
          </NavLink>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (userData) => dispatch(addUser(userData)),
});

export default connect(null, mapDispatchToProps)(AddUser);