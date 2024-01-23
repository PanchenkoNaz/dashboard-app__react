import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { GoGear } from 'react-icons/go';

import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

import { Button } from '.'

import avatar2 from '../data/avatar2.jpg';

const UserProfile = () => {

    const { currentColor, setIsClicked, initialState } = useStateContext();


  return (
    <div style={{borderWidth: '2px'}} className="nav-item absolute right-1 top-16 bg-white w-96 p-8 rounded-lg dark:bg-[#42464D]">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <div className="flex">
          <button className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => alert('currently not available')}
            type="button"
            style={{ borderRadius: '50%' }}
          >
            <GoGear />
          </button>
          <button className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => setIsClicked(initialState)}
            type="button"
            style={{color: 'rgb(153, 171, 180)', borderRadius: '50%'}}
          >
            <MdOutlineCancel />
          </button>
        </div>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img className="rounded-full h-24 w-24"
          src={avatar2} alt="avatar"/>
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">Lisa Roberts</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">Salesmanager</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">sales.shoppy@info.com</p>
        </div>
      </div>
      <div>
        {/* wrap userProfileData from here */}
        {userProfileData.map((item, index) => (
        <div key={index} className="flex gap-5 border-color p-4 hover:bg-light-gray dark:hover:bg-[#42464D]">
          <button className="text-xl rounded-lg p-3 hover:bg-light-gray"
          style={{color: item.iconColor, backgroundColor: item.iconBg}}>
            {item.icon}
          </button>
          <div>
            <p className="font-semibold text-xl dark:text-gray-200">{item.title}</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">{item.desc}</p>
          </div>
        </div>
        ))}
        {/* wrap userProfileData till here */}
      </div>
        <div className="mt-5">
          <Button color="white"
            width="full"
            text="Logout"
            bgColor={currentColor}
            borderRadius="10px"
          />
        </div>
      </div>
  )
}

export default UserProfile