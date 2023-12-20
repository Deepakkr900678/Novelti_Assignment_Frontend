import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from 'react-redux';
import { updateUser, setEditData } from '../redux/Actions';

const Edit = ({ editData, updateUser, setEditData }) => {
  const navigate = useNavigate();
  const { id } = useParams("");

  const [isComponentMounted, setIsComponentMounted] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://novelti-assignment-backend.onrender.com/getuser/${id}`);
        if (response.ok) {
          const userData = await response.json();
          setEditData(userData || {});
        } else {
          console.error('Error fetching user:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
    setIsComponentMounted(true);

    return () => {
      setIsComponentMounted(false);
    };

  }, [id, setEditData]);

  const setuser = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateuser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://novelti-assignment-backend.onrender.com/updateuser/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });

      if (res.ok) {
        const updatedUserData = await res.json();
        console.log(updatedUserData, "updatedUserDataupdatedUserData")
        updateUser(updatedUserData);

        toast.success('Edit successfully', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        if (isComponentMounted) {
          setEditData({});
        }

        navigate('/alluser');
      } else {
        console.error('Error updating user:', res.statusText);
        handleUpdateError();
      }
    } catch (error) {
      console.error('Error updating user:', error);
      handleUpdateError();
    }
  };

  const handleUpdateError = () => {
    toast.error('Failed to update user', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container mt-5">
      <h4>Edit user Information</h4>
      <div className="underline1"></div>
      <form className="mt-5 shadow p-5 w-75">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            firstName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter first Name"
            onChange={setuser}
            name="firstName"
            value={editData.firstName}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter Last Name"
            onChange={setuser}
            name="lastName"
            value={editData.lastName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            onChange={setuser}
            name="email"
            value={editData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            placeholder="Enter Mobile"
            onChange={setuser}
            name="mobile"
            value={editData.mobile}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address1" className="form-label">
            Address Line 1
          </label>
          <input
            type="text"
            className="form-control"
            id="address1"
            placeholder="Enter Address Line 1"
            onChange={setuser}
            name="address1"
            value={editData.address1}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address2" className="form-label">
            Address Line 2
          </label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Enter Address Line 2"
            onChange={setuser}
            name="address2"
            value={editData.address2}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            placeholder="Enter State"
            onChange={setuser}
            name="state"
            value={editData.state}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Enter City"
            onChange={setuser}
            name="city"
            value={editData.city}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Enter Country"
            onChange={setuser}
            name="country"
            value={editData.country}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zip" className="form-label">
            ZIP Code
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            placeholder="Enter ZIP Code"
            onChange={setuser}
            name="zip"
            value={editData.zip}
          />
        </div>
        <div className="d-flex">
          <button className="btn btn-primary" onClick={updateuser}>
            Update User
          </button>
          <ToastContainer />
          <NavLink className="btn btn-primary ms-auto" to="/alluser">
            Back to Home
          </NavLink>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users || [],
  editData: state.editData || {},
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userData) => dispatch(updateUser(userData)),
  setEditData: (editData) => dispatch(setEditData(editData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);