// import React, { useState } from 'react';

// const Update = () => {
//   const [destinationFormData, setDestinationFormData] = useState({
//     name: '',
//     image_url: '',
//     package_id: '',
//   });
  
//   const [packageFormData, setPackageFormData] = useState({
//     name: '',
//     location: '',
//     description: '',
//     durations: '',
//     price: '',
//     rating: '',
//     image: '',
//   });

//   const handleDestinationInputChange = (e) => {
//     setDestinationFormData({
//       ...destinationFormData,
//       [e.target.id]: e.target.value,
//     });
//   };
  
//   const handlePackageInputChange = (e) => {
//     setPackageFormData({
//       ...packageFormData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleDestinationSubmit = (e) => {
//     e.preventDefault();

//     fetch(`/destination/${destination.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(destinationFormData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle success or display error message
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   };
  
//   const handlePackageSubmit = (e) => {
//     e.preventDefault();

//     fetch(`/package/${packages.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(packageFormData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle success or display error message
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   };

//   return (
//     <div className="Update">
//       <div className="container my-5">
//         <div className="col-md-8 mx-auto update h-100">
//           <div
//             className="card shadow px-3 py-5"
//             style={{ width: '600px', backgroundColor: '#E8F9FD' }}
//           >
//             <h2 className="card-title text-center">Update Destination</h2>
//             <form onSubmit={handleDestinationSubmit} className="vstack gap-2">
//               <label htmlFor="name">Name:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="name"
//                 placeholder="Name"
//                 value={destinationFormData.name}
//                 onChange={handleDestinationInputChange}
//               />
//               <label htmlFor="image_url">Image:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="image_url"
//                 placeholder="Image URL"
//                 value={destinationFormData.image_url}
//                 onChange={handleDestinationInputChange}
//               />
//               <label htmlFor="package_id">Package ID:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="package_id"
//                 placeholder="Package ID"
//                 value={destinationFormData.package_id}
//                 onChange={handleDestinationInputChange}
//               />
//               <button className="btn btn-primary" type="submit">
//                 Update Destination
//               </button>
//             </form>
//           </div>
//           <div
//             className="card shadow px-3 py-5 mt-4"
//             style={{ width: '600px', backgroundColor: '#E8F9FD' }}
//           >
//             <h2 className="card-title text-center">Update Package</h2>
//             <form onSubmit={handlePackageSubmit} className="vstack gap-2">
//               <label htmlFor="name">Name:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="name"
//                 placeholder="Name"
//                 value={packageFormData.name}
//                 onChange={handlePackageInputChange}
//               />
//               <label htmlFor="location">Location:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="location"
//                 placeholder="Location"
//                 value={packageFormData.location}
//                 onChange={handlePackageInputChange}
//               />
//               <label htmlFor="description">Description:</label>
//               <textarea
//                 className="form-control"
//                 id="description"
//                 placeholder="Description"
//                 value={packageFormData.description}
//                 onChange={handlePackageInputChange}
//               ></textarea>
//               <label htmlFor="durations">Duration:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="durations"
//                 placeholder="Duration"
//                 value={packageFormData.durations}
//                 onChange={handlePackageInputChange}
//               />
//               <label htmlFor="price">Price:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="price"
//                 placeholder="Price"
//                 value={packageFormData.price}
//                 onChange={handlePackageInputChange}
//               />
//               <label htmlFor="rating">Rating:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="rating"
//                 placeholder="Rating"
//                 value={packageFormData.rating}
//                 onChange={handlePackageInputChange}
//               />
//               <label htmlFor="image">Image:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="image"
//                 placeholder="Image URL"
//                 value={packageFormData.image}
//                 onChange={handlePackageInputChange}
//               />
//               <button className="btn btn-primary" type="submit">
//                 Update Package
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Update;
