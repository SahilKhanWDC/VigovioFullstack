import React from 'react'

const AddressCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 w-full border-t border-gray-300 bg-white text-sm text-gray-800">
          {/* Left: Company Info */}
          <div className="text-left">
            <p className="font-bold">Vigovia Tech Pvt. Ltd</p>
            <p>Registered Office: Hd 109 Cinnabar Hills,</p>
            <p>Links Business Park, Karnataka, India.</p>
          </div>

          {/* Center: Contact Info */}
          <div className="text-left mt-4 md:mt-0">
            <p>
              <span className="font-semibold">Phone:</span> +91-99X9999999
            </p>
            <p>
              <span className="font-semibold">Email ID:</span>{" "}
              Contact@Vigovia.Com
            </p>
          </div>

          {/* Right: Logo */}
          <div className="mt-6 md:mt-0 md:ml-8 flex flex-col items-center">
            <img
              src="/assets/Group 116.png" // replace with actual logo path
              alt="vigovia logo"
              className="h-18 object-contain"
            />
            {/* <p className="text-xs tracking-wide text-[#2F215F] font-semibold mt-1">
              PLAN.PACK.GO{" "}
              <span className="inline-block transform rotate-45 ml-1">✈️</span>
            </p> */}
          </div>
        </div>
  )
}

export default AddressCard
