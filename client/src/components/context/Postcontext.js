import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const PostContext = createContext();

export default function PostProvider({ children }) {
  const nav = useNavigate();
  const [onchange, setOnchange] = useState(false);

  // Delete Package
const deletePackage = (packageId) => {
  return new Promise((resolve, reject) => {
    fetch(`/packages/${packageId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        setOnchange(!onchange);
        console.log(response);

        nav("/my-account");
        Swal.fire("Success", response.success, "success");
        resolve(response);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

  // Create Package
  const addPackage = (name, location, description, duration, price, rating, image) => {
    return new Promise((resolve, reject) => {
      fetch("/packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          location: location,
          description: description,
          duration: duration,
          price: price,
          rating: rating,
          image: image,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setOnchange(!onchange);
          nav("/my-account");
          resolve(response);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  };

  // Create Destination
  const addDestination = (name, image, package_id) => {
    return new Promise((resolve, reject) => {
      fetch("/destinations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          image: image,
          package_id: package_id,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setOnchange(!onchange);
          nav("/my-account");
          resolve(response);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  };

  const contextData = {
    deletePackage,
    addPackage,
    addDestination,
  };

  return (
    <PostContext.Provider value={contextData}>{children}</PostContext.Provider>
  );
}
