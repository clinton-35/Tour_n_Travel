import React, { useContext, useState } from "react";
import { PostContext } from "../context/Postcontext";


const Delete = () => {
  const { deletePackage } = useContext(PostContext);
  const [packageId, setPackageId] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();

    deletePackage(packageId)
    .then((response) => {
      console.log(response);
      
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="Delete">
      <div className="container my-5">
        <div className="col-md-8 mx-auto delete h-100">
          <div
            className="card shadow px-3 py-5"
            style={{ width: "600px", backgroundColor: "#E8F9FD" }}
          >
            <h2 className="card-title text-center">Delete Package</h2>
            <form onSubmit={handleDelete}>
              <label htmlFor="id">ID:</label>
              <input
                className="form-control"
                type="text"
                id="id"
                placeholder="Package ID"
                value={packageId}
                onChange={(e) => setPackageId(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
