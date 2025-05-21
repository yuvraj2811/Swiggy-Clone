import React, { useState } from 'react'
import { FaAngleDown ,FaChevronUp} from "react-icons/fa6";

export const About = () => {
  const [showFullText, setShowFullText] = useState(false)

  const handleToggle = () => {
    setShowFullText(prev => !prev)
  }

  const content = `Looking for the best restaurants in Patna? Whether you're craving local delicacies or international cuisine, explore a wide array of dining options to suit every taste. From cozy cafes to upscale eateries, restaurants in Patna offer a perfect blend of flavor and ambiance. Enjoy delicious meals crafted by skilled chefs, using only the freshest ingredients. Whether you’re planning a casual outing or a special celebration, the diverse restaurant scene in Patna ensures an unforgettable dining experience.`

  return (
    <div>
      <div className='max-w-[1200px] border border-slate-400 m-2  rounded-2xl mx-auto mb-8 '>
        <p className='text-3xl font-extrabold text-slate-600 p-3.5'>
          Discover Your Perfect Dining Experience in Patna
        </p>

        <p
          className={`p-3.5 text-slate-400 transition-all duration-300 ${
            showFullText
              ? ''
              : 'whitespace-nowrap overflow-hidden text-ellipsis'
          }`}
        >
          {content}
        </p>

        {/* Button */}
        <button
          className='text-orange-400  px-3 pb-3.5 flex items-center  gap-0.5'
          onClick={handleToggle}
        >
          {showFullText ? 'Show Less' : 'Show More' }
          {showFullText ? <FaChevronUp/> : < FaAngleDown/> }
        </button>
      </div>
    </div>
  )
}
