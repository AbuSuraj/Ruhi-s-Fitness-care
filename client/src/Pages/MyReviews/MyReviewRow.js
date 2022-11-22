import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MyReviewRow = ({ mReview, handleDelete }) => {
  const { serviceName, text, _id } = mReview;
  // const [updatedReview, setNewReview] = useState()
//   console.log(_id);
  const location = useLocation()
//  console.log(updatedReview)
  return (
    <tr>
      <td className="border-8">
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
          X
        </button>
      </td>
      <td className="border-8">{serviceName}</td>
      <td className="border-8">{text}</td>
      <td className="border-8">
        <Link to={`/update-review/${_id}`} state={{ from: location }} className="btn btn-ghost" >
        
          <FaEdit></FaEdit>
        </Link>
       
      </td>
    </tr>
  );
};

export default MyReviewRow;
