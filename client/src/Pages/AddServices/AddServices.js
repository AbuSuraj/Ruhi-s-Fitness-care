import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddServices = () => {
  useTitle('AddService')
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.photoURL.value;
    const price = form.price.value;
    const duration = form.duration.value;
    const description = form.description.value;
    const created = new Date();
  const service = {
    title,
    img,
    price,
    duration,
    description,
    created  
  }
  fetch('https://fitness-gamma.vercel.app/addService', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(service)
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            toast.success('Service added successfully')
            form.reset();  
        }
    })
    .catch(er => console.error(er));
  console.log(service)
};
  return (
    <div>
      <form
        onSubmit={handleAddService}
        className="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center"
      >
        <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
          <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            Add Service
          </div>
          <div className="">
            <div>
              <input
                name="title"
                type="text"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
                placeholder="Service Title  "
              />
            </div>
            <div>
              <input
                type="text"
                name="photoURL"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
                placeholder="Image URL"
              />
            </div>
            <div>
              <input
                type="text"
                name="price"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                placeholder="Price"
              />
            </div>
            <div>
              <input
                type="text"
                name="duration"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                placeholder="Duration"
              />
            </div>

            <div className="form-control">
              <textarea
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="Description"
              ></textarea>
            </div>

            <div className="flex justify-center my-6">
              <button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
                Add Service
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
