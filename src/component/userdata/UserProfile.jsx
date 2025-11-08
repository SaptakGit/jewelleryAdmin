import React, { useState } from 'react'
import UserCard from './UserCard';
import { useLocation,useParams } from 'react-router-dom';

function UserProfile() {

    const {state} = useLocation();
    const { id } = useParams();

    if (!state) {
        return <div>No user data. Make an API call with id: {id}</div>;
    }

    const { name, phone, address, email, photo, age, gender, status, userPhoto} = state;
    //console.log(id)


    const [userName, setUserName] = useState(name);
    const [userAge, setUserAge] = useState(age);
    const [userGender, setUserGender] = useState(gender);
    const [userEmail, setUserEmail] = useState(email);
    //const [photoUrl, setPhotoUrl] = useState(photo);
    const [userPhone, setUserPhone] = useState(phone);
    const [userAddress, setUserAddress] = useState(address);
    const [userStatus, setUserStatus] = useState(status);
    const [userImage, setUserImage] = useState(userPhoto);
    //const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);
    const [error, setError] = useState("");

    /*const saveProfile = async () => {
        setError("");
        try{
            const res = await axios.patch(BASE_URL + "/profile/edit", 
                {firstName, lastName, age, gender, about, photoUrl}, {withCredentials:true}
            );
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
            console.log("Save Profile" );
        } catch(err){
            setError(err.response.data)
        }
    }*/


    return (
    <>
            <div className='flex justify-center my-10'>
                <div className="flex justify-center mx-10">
                <div className="card bg-base-300 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Edit Profile!</h2>
                        <div>
                            <label className="form-control w-full max-w-xs my-4">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" value={userName} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserName(e.target.value)}/>
                            </label>
                            <label className="form-control w-full max-w-xs my-4">
                                <div className="label">
                                    <span className="label-text">Age</span>
                                </div>
                                <input type="text" value={userAge} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserAge(e.target.value)}/>
                            </label>
                            <label className="form-control w-full max-w-xs my-4">
                                <div className="label">
                                    <span className="label-text">Gender</span>
                                </div>
                                <input type="text" value={userGender} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserGender(e.target.value)}/>
                            </label>
                            <label className="form-control w-full max-w-xs my-4">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="text" value={userEmail} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserEmail(e.target.value)}/>
                            </label>
                            <label className="form-control w-full max-w-xs my-4">
                                <div className="label">
                                    <span className="label-text">Phone</span>
                                </div>
                                <input type="text" value={userPhone} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserPhone(e.target.value)}/>
                            </label>
                            <label className="form-control w-full max-w-xs my-4">
                                <div className="label">
                                    <span className="label-text">Address</span>
                                </div>
                                <input type="text" value={userAddress} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserAddress(e.target.value)}/>
                            </label>
                            <label className="form-control w-full max-w-xs my-4">
                                <div className="label">
                                    <span className="label-text">Address</span>
                                </div>
                                <input type="text" value={userAddress} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserAddress(e.target.value)}/>
                            </label>
                            <label className="form-control w-full max-w-xs my-4">
                                <div className="label">
                                    <span className="label-text">First Name</span>
                                </div>
                                <input type="text" value={userName} className="input input-bordered w-full max-w-xs" onChange={(e) => setUserName(e.target.value)}/>
                            </label>
                            
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className="card-actions justify-center m-2">
                        <button className="btn btn-primary" > Back</button>
                        </div>
                    </div>
                </div>
                </div>
                {<UserCard user={{id, userName, userImage}}/> }
            </div>
            {showToast && (<div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile Saved Successfully.</span>
                </div>
            </div>)}
        </>
  )
}

export default UserProfile