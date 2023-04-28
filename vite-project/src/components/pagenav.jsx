import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';

function PageNav() {
    return (
        <div className="hidden  top-[52px] sticky bg-white lg:flex flex-row items-center justify-between mx-52 pt-4 border-b pb-2">
            <div className="flex flex-row">
                <span className="border-b border-transparent hover:border-gray-500 mr-3">All Posts(32)</span>
                <span className="border-b border-transparent hover:border-gray-500 mr-3">Article</span>
                <span className="border-b border-transparent hover:border-gray-500 mr-3">Event</span>
                <span className="border-b border-transparent hover:border-gray-500 mr-3">Education</span>
                <span className="border-b border-transparent hover:border-gray-500">Job</span>
            </div>
            <div>
                <button className="bg-[#F2F2F2] rounded-md p-2">
                    <div className="flex items-center ml-2">
                        <span>Write a Post</span>
                        <AiFillCaretDown size = '1rem' />
                    </div>
                </button>
                <button className="bg-blue-600 rounded-md p-2 ml-2">
                    <div className="flex items-center ml-2">
                        <BsFillPeopleFill style={{color: 'white'}} size = '0.8rem' />
                        <span className="ml-3">Join Group</span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default PageNav;