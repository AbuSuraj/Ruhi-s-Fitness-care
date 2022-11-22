import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    useTitle('My Review')
    const {user,loading, logout} = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);
    // console.log(user.email)
    useEffect(() =>{
        // fetch(`https://fitness-gamma.vercel.app/my-reviews/${user?.email}`
        fetch(`https://fitness-gamma.vercel.app/my-reviews/${user?.email}`,{
          headers:{
            authorization : `Bearer ${localStorage.getItem('auth-token')}`
          }
        })
          .then((res) => {
            if (res.status === 401 || res.status === 403) {
              return logout();
          }
           return res.json()})
          .then((data) => {
            // if()
            setMyReview(data);
          })
          .catch((err) => console.log(err));
      }, [user?.email, logout]);
        
    // },[user?.email])
    // console.log(myReview)
    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://fitness-gamma.vercel.app/my-reviews/${id}`,{
                method: 'DELETE'
            })
            .then( res =>res.json())
            .then(data =>{
              /// deletedCount // dont forget this spelling
              if(data?.deletedCount > 0){
                const remaining = myReview?.filter(mrvw => mrvw._id !== id);
                setMyReview(remaining);
                 
              }
            })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        }

        if(loading){
          return  <div className=" my-5 mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> 
      }
    return (
         
      <div className="overflow-x-auto  mt-10 mx-4">
                <table className="table-normal w-full">
                    <thead>
                        <tr >
                            {/* <th>
                            </th> */}
                            <th className="border-8">Delete</th>
                            <th className="border-8">Service Name</th>
                            <th className="border-8">Review</th>
                            <th className="border-8">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReview?.map(mReview => <MyReviewRow
                                key={mReview._id}
                                mReview={mReview}
                                handleDelete={handleDelete}
                                // handleUpdate ={handleUpdate}
                            ></MyReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        
    );
};

export default MyReviews;