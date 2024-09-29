// components/Card.js

"use client"

import { useRouter } from 'next/navigation'
const Card = ({ id, title, description }:any) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/posts/${id}`);
  };

  return (
    <div 
    className="bg-dark border border-gray-300 shadow-md rounded-md p-4 m-4 cursor-pointer"

      onClick={handleClick} // Attach the click event
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
