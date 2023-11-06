import React from 'react'

const AddCustomer = () => {
  return (
    <div className='py-10'>
      <h1 className='text-3xl'>Add Customer</h1>
      <p className='text-sm py-2'>You can add a customer by fil these field.</p>
      <div className="min-h-screen mt-10 ">
      <form className="border rounded px-8 pt-6 pb-8 mb-4 w-full ">
       
        
        <div className="grid grid-cols-4 gap-4 ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            Name
            </label>
            <input
              className=" border rounded w-full py-2 px-3 "
              id="firstName"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Phone
            </label>
            <input
              className=" border rounded w-full py-2 px-3 "
              id="lastName"
              type="text"
              placeholder="Phone no"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            Email
            </label>
            <input
              className=" border rounded w-full py-2 px-3 "
              id="firstName"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Address
            </label>
            <input
              className=" border rounded w-full py-2 px-3 "
              id="lastName"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            Purchased Item
            </label>
            <input
              className=" border rounded w-full py-2 px-3 "
              id="firstName"
              type="text"
              placeholder="Item"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Purchased Quantity
            </label>
            <input
              className=" border rounded w-full py-2 px-3 "
              id="lastName"
              type="text"
              placeholder="Quantity"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            Amount
            </label>
            <input
              className=" border rounded w-full py-2 px-3 "
              id="firstName"
              type="text"
              placeholder="Amount"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Status
            </label>
            <input
              className=" border rounded w-full py-2 px-3 "
              id="lastName"
              type="text"
              placeholder="Status"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className=" border rounded w-full py-2 px-3 "
            id="description"
            rows="4"
            placeholder="Enter a description"
          ></textarea>
        </div>

       

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddCustomer
