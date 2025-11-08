import React from 'react'
import axios from 'axios'
/*import { BASE_URL } from '../utlis/constants'
import { useDispatch } from 'react-redux'
import { removeUserFromFeed } from '../utlis/feedSlice'*/

import { useState } from 'react';
import api from '../../utlis/api';

const UserCard = ({user}) => {
    const{ id, userName, userImage } = user;

    const [userImageFile, setUserImageFile] = useState(userImage);
    const [selectedFile, setSelectedFile] = useState(null);

    //const dispatch = useDispatch();

    console.log(id)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setUserImageFile(URL.createObjectURL(event.target.files[0]));
        }
    };

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
            <img src={userImageFile} alt={userName} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{userName}</h2>
                <p><input type='file' onChange={onImageChange} /></p>
                <div className="card-actions justify-center my-4">
                    <input type='hidden' value={id} />
                    <button className="btn btn-primary">View Image</button>
                </div>
        </div>
    </div>
  )
}

export default UserCard