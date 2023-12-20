import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser, setSearchInput, setUserData } from '../redux/Actions';
import axios from 'axios';

const AllUser = ({ users, searchInput, deleteUser, setSearchInput, setUserData }) => {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://novelti-assignment-backend.onrender.com/getuser');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [setUserData]);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://novelti-assignment-backend.onrender.com/deleteUser/${id}`);
      deleteUser(id);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleSearchInput = useCallback(
    (e) => {
      setSearchInput(e.target.value);
    },
    [setSearchInput]
  );

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>All User Information</h4>
        <div className="w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search User"
            onChange={handleSearchInput}
          />
        </div>
      </div>

      <div className="underline"></div>
      <div className="table-responsive">
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">email</th>
              <th scope="col">mobile</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users
                .filter((val) => {
                  if (!searchInput) {
                    return true;
                  } else {
                    const firstNameMatch =
                      val.firstName && val.firstName.toLowerCase().includes(searchInput.toLowerCase());
                    const lastNameMatch =
                      val.lastName && val.lastName.toLowerCase().includes(searchInput.toLowerCase());
                    const emailMatch = val.email && val.email.toLowerCase().includes(searchInput.toLowerCase());
                    const mobileMatch =
                      val.mobile && val.mobile.toLowerCase().includes(searchInput.toLowerCase());

                    return firstNameMatch || lastNameMatch || emailMatch || mobileMatch;
                  }
                })
                .map((result, id) => (
                  <tr key={id}>
                    <th scope="row">{id + 1}</th>
                    <td>{result.firstName}</td>
                    <td>{result.lastName}</td>
                    <td>{result.email}</td>
                    <td>{result.mobile}</td>
                    <td>
                      <Link className="btn btn-success ms-2" to={`/view/${result._id}`}>
                        View
                      </Link>
                      <Link className="btn btn-warning ms-2" to={`/edit/${result._id}`}>
                        Update
                      </Link>
                      <button
                        className="btn btn-danger ms-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleDeleteUser(result._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  searchInput: state.searchInput,
});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (userId) => dispatch(deleteUser(userId)),
  setSearchInput: (searchInput) => dispatch(setSearchInput(searchInput)),
  setUserData: (users) => dispatch(setUserData(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUser);
