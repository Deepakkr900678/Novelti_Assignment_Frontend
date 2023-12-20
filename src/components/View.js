import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserData } from '../redux/Actions';

function View({ userData, setUserData }) {
    const { id } = useParams();

    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await fetch(`https://novelti-assignment-backend.onrender.com/getuser/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const data = await res.json();

                if (res.status === 400 || !data) {
                    console.log("Error fetching user");
                } else {
                    setUserData(data);
                    console.log("Fetched user data");
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        getUserData();
    }, [id, setUserData]);

    return (
        <div className='container mt-5'>
            <h4>All User Information</h4>
            <div className='underline'></div>
            <ul className="list-group w-50 mt-4">
                <li className="list-group-item active" aria-current="true">All Information About</li>
                {userData ? (
                    <>
                        <li className="list-group-item">User firstName:- {userData.firstName}</li>
                        <li className="list-group-item">User lastName:-  {userData.lastName}</li>
                        <li className="list-group-item">User email:-  {userData.email}</li>
                        <li className="list-group-item">User Mobile:-  {userData.mobile}</li>
                        <li className="list-group-item">User address1:-  {userData.address1}</li>
                        <li className="list-group-item">User address2:-  {userData.address2}</li>
                        <li className="list-group-item">User state:-  {userData.state}</li>
                        <li className="list-group-item">User city:-  {userData.city}</li>
                        <li className="list-group-item">Country:-  {userData.country}</li>
                        <li className="list-group-item">ZIP:-  {userData.zip}</li>
                    </>
                ) : (
                    <li className="list-group-item">Loading user data...</li>
                )}
            </ul>
            <Link className='btn btn-primary mt-5' to="/alluser">Back</Link>
        </div>
    );
}

const mapStateToProps = (state) => ({
    userData: state.users,
});

const mapDispatchToProps = (dispatch) => ({
    setUserData: (userData) => dispatch(setUserData(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
