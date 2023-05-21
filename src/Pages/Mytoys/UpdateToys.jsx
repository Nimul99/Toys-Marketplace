import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const toys = useLoaderData();
  const { name, quantity, price, category, details } = toys;
  const { _id } = toys;
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const details = form.details.value;
    const newToy = {
      price,
      quantity,
      details,
    };
    console.log(newToy);

    fetch(
      `https://toy-marketplace-server-dusky-eight.vercel.app/toyProducts/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee Update Successfully ",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    // <div>
    //   <form onSubmit={handleUpdateToy}>
    //     <div className="form-control items-center">
    //       <div className=" ">
    //         <label className="label">
    //           <span className="label-text">Enter amount</span>
    //         </label>
    //         <label className="input-group my-6">
    //           <span>Price</span>
    //           <input
    //             type="text"
    //             name="price"
    //             defaultValue={price}
    //             placeholder="10"
    //             className="input input-bordered"
    //           />
    //           <span>USD</span>
    //         </label>
    //       </div>

    //       <div className="mb-4">
    //         <label className="">
    //           <h5>quantity</h5>
    //         </label>

    //         <label>
    //           <input
    //             type="text"
    //             name="quantity"
    //             defaultValue={quantity}
    //             placeholder="Type here"
    //             className="input input-bordered w-full "
    //           />
    //         </label>
    //       </div>
    //       <div className="mb-4 relative">
    //         <label>
    //           <h5>Description</h5>
    //         </label>
    //         <label>
    //           <textarea
    //             placeholder="Bio"
    //             name="details"
    //             defaultValue={details}
    //             className="textarea textarea-bordered textarea-sm w-full max-w-xs"
    //           ></textarea>
    //         </label>
    //       </div>

    //       <button
    //         className="bg-primary rounded-xl py-1 w-full"
    //         type="submit"
    //         value="update Toy"
    //       >
    //         update Toy
    //       </button>
    //     </div>
    //   </form>
    // </div>

    // ==============

    <div className="text-center">
      <h1 className="text-3xl text-slate-950 font-bold mb-5">Update Toys</h1>

      <form onSubmit={handleUpdateToy} className="mx-auto lg:w-2/3">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder=" Name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="quantity"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">price</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder=" price"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="category"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* 3 */}
        {/* <div className="flex flex-col gap-5 lg:flex-row">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input input-bordered"
              />
            </label>
          </div>
        </div> */}
        {/* photo */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">details</span>
          </label>
          <label className="input-group input-group-vertical">
            <input
              type="text"
              defaultValue={details}
              name="details"
              placeholder="details"
              className="input input-bordered"
            />
          </label>
        </div>
        <input type="submit" value="Update Coffee" className="btn  w-full" />
      </form>
    </div>
  );
};

export default UpdateToys;