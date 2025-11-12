import React from 'react'

const Input = ({ label, name, value, onChange, placeholder }) => { 
  return (
    <div className="flex flex-col gap-2">
    <label className="text-[#4C4C4C] text-[18px] font-medium">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-[#ECECF0] p-3 rounded-[10px] outline-none text-[#4C4C4C]"
    />
  </div>
  )
}

export default Input