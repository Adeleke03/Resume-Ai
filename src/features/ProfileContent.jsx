import React, { useState, useEffect } from "react";
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


const ProfileContent = ({ user, setUser }) => {
  const [activeTab, setActiveTab] = useState("Info");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    photo: "", // store image as base64
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        photo: user.photo || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser({ ...user, ...formData });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Resize image using canvas
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const size = 200; // output square size
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, size, size);
          const resizedDataUrl = canvas.toDataURL("image/jpeg", 0.8); // compressed
          setFormData({ ...formData, photo: resizedDataUrl });
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const tabs = [
    { id: "Info", icon: <MdPersonOutline size={24} />, title: "Info" },
    { id: "Resumes", icon: <HiOutlineDocumentText size={24} />, title: "Resumes" },
    { id: "Letters", icon: <HiOutlineEnvelope size={24} />, title: "Letters" },
    { id: "Application", icon: "", title: "Application" },
  ];

  const getInitials = (name) => {
    if (!name) return "U";
    const split = name.split(" ");
    return split.length >= 2
      ? (split[0][0] + split[1][0]).toUpperCase()
      : split[0][0].toUpperCase();
  };


  const resumeData =[
       {
      id: "1",
      title: "Senior Frontend Developer Resume",
      date: "Oct 12, 2025",
      page: "2 pages",
    },
    {
      id: "2",
      title: "Full Stack Engineer Resume",
      date: "Oct 8, 2025",
      page: "1 page",
    },
    {
      id: "1",
      title: "Product Manager Resume",
      date: "Oct 5, 2025",
      page: "3 page",
    },
  ];

  const letterData =[
    {
      id: "1",
      title: "Tech Startup Cover Letter",
      date: "Oct 12, 2025",
      company: "Acme Corp",
    },
    {
      id: "2",
      title: "Enterprise Position Letter",
      date: "Oct 8, 2025",
      company: "Big Tech Inc",
    },
    {
      id: "1",
      title: "Startup Application",
      date: "Oct 5, 2025",
      company: "StartupXYZ  ",
    },
  ];

  const applicationData = [
    {
      id: "1",
      title: "Acme Application",
      date: "Oct 12, 2025",
      company: "Acme Corp",
      action:"Applied"
    },
    {
      id: "2",
      title: "Big Tech Application",
      date: "Oct 8, 2025",
      company: "Big Tech Inc",
      action:"Interview"
    },
    {
      id: "1",
      title: "Startup Application",
      date: "Oct 5, 2025",
      company: "StartupXYZ",
      action:"Offer"
    },
  ];

  const getActionStyle = (action) => {
  switch (action) {
    case "Applied":
      return "bg-blue-100 text-blue-600";
    case "Interview":
      return "bg-purple-100 text-purple-600";
    case "Offer":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

  return (
    <section className="wrapper md:py-10 py-5">
      <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5 items-start">
        {/* Left Profile Card */}
        <div className="flex flex-col">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#E0E7FF] text-2xl font-semibold text-[#4F39F6] mb-3 overflow-hidden">
                {formData.photo ? (
                  <img
                    src={formData.photo}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  getInitials(formData.fullName)
                )}
              </div>
              <h2 className="font-semibold text-lg">{formData.fullName || "User Name"}</h2>
              <p className="text-gray-500 text-sm mb-4">{formData.email || "user@example.com"}</p>

              {/* Edit Photo Button */}
              <label className="border px-4 w-full py-1 border-[#B2B2B2] border-[0.6px] gap-[10px] flex items-center rounded-[10px] justify-center text-sm text-black hover:bg-gray-100 cursor-pointer">
               <FaRegEdit/> Edit Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 sm:hiddden bg-white rounded-lg p-6 shadow-sm flex flex-col">
            <h3 className="font-medium mb-3">Quick Stats</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between">
                <span>Resumes</span> <span>{resumeData.length}</span>
              </li>
              <li className="flex justify-between">
                <span>Cover Letters</span> <span>{letterData.length}</span>
              </li>
              <li className="flex justify-between">
                <span>Applications</span> <span>{applicationData.length}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Content Section */}
        <div className=" ">
          {/* Tabs */}
          <div className="flex flex-row bg-[#ECECF0] py-2 rounded-[22px] items-center 
            overflow-x-auto scrollbar-hide md:justify-around px-2 space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`capitalize flex-shrink-0 px-5 flex items-center gap-[12px] py-[6px] rounded-[44px] font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-black"
                    : "text-black hover:bg-white"
                }`}
              >
                {tab.icon}
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "Info" && (
            <div className=" pt-4 bg-white flex flex-col px-3 rounded-[17px] gap-[20px]">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              <div className="space-y-3">
                {["fullName", "email", "phone", "location"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm text-gray-500">{field.replace(/([A-Z])/g, " $1")}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      className="w-full border rounded-md px-3 py-2 mt-1 bg-gray-50"
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
              <button
                className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-md"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "Resumes" && <div className="border-[#B1B1B1] mt-4 border-[0.5px]  rounded-[15px] overflow-hidden shadow-sm">
              {resumeData.map((activity, id) => (
                <div
                  key={id}
                  className={`card card-side  rounded-[0px] border-[#B1B1B1] px-[16px] bg-base-100 ${
                    id !== resumeData.length - 1 ? "border-b-[0.5px]" : ""
                  }`}
                >
                  <div className="flex flex-row items-center w-full h-fit justify-between">
                    <HiOutlineDocumentText
                      size={50}
                      className="text-2xl bg-[#EDEBFE] rounded-[10px] py-[14px] px-[15px] text-[#4F39F6]"
                    />
                    <div className="card-body">
                      <h2 className="card-title font-[500] md:text-[20px] text-[#353535]">
                        {activity.title}
                      </h2>
                      <p className="text-[#7A7A7A] md:text-[16px] font-[500]">
                        {activity.date}. <span>{activity.page}</span>
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <button><FaRegEdit className="text-xl md:text-2xl lg:text-3xl"/></button><button><MdOutlineDelete className="text-[#DC3545] text-xl md:text-2xl lg:text-3xl"/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>}
          {activeTab === "Letters" && <div className="border-[#B1B1B1] mt-4 border-[0.5px]  rounded-[15px] overflow-hidden shadow-sm">
              {letterData.map((activity, id) => (
                <div
                  key={id}
                  className={`card card-side  rounded-[0px] border-[#B1B1B1] px-[16px] bg-base-100 ${
                    id !== letterData.length - 1 ? "border-b-[0.5px]" : ""
                  }`}
                >
                  <div className="flex flex-row items-center w-full h-fit justify-between">
                    <HiOutlineEnvelope
                      size={50}
                      className="text-2xl bg-[#FAF5FF] rounded-[10px] py-[14px] px-[15px] text-[#9c19fa]"
                    />
                    <div className="card-body">
                      <h2 className="card-title font-[500] md:text-[20px] text-[#353535]">
                        {activity.title}
                      </h2>
                      <p className="text-[#7A7A7A] md:text-[16px] font-[500]">
                        {activity.company} <span>{activity.date}</span>
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <button><FaRegEdit className="text-xl md:text-2xl lg:text-3xl"/></button><button><MdOutlineDelete className="text-[#DC3545] text-xl md:text-2xl lg:text-3xl"/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>}
          {activeTab === "Application" && <div className="border-[#B1B1B1] border-[0.5px] mt-4  rounded-[15px] overflow-hidden shadow-sm">
    {applicationData.map((activity, id) => (
      <div
        key={id}
        className={`card card-side  rounded-[0px] border-[#B1B1B1] px-[16px] bg-base-100 ${
          id !== applicationData.length - 1 ? "border-b-[0.5px]" : ""
        }`}
      >
        <div className="flex flex-row items-center w-full h-fit justify-between">
         
          <div className="card-body">
            <h2 className="card-title font-[500] md:text-[24px] text-[#353535]">
              {activity.title}
            </h2>
            <p className="text-[#7A7A7A] flex flex-col md:text-[19px] font-[500]">
              {activity.company} <span>{activity.date}</span>
            </p>
          </div>
          <div className="card-actions justify-end">
            <p
  className={`px-3 py-1 rounded-full text-sm font-medium ${getActionStyle(
    activity.action
  )}`}
>
  {activity.action}
</p>

          </div>
        </div>
      </div>
    ))}
  </div>}
        </div>
      </div>
    </section>
  );
};

export default ProfileContent;
