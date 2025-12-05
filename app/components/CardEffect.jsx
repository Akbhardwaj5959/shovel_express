"use client";
import Link from "next/link";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

const CardEffect = ({ title, description, image, price, buttonText }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  
        dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
        dark:bg-white dark:border-black/[0.2] border-black/[0.1] 
        max-w-sm w-full h-auto rounded-xl p-6 border mx-auto">
        
        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-black"
        >
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm mt-2 dark:text-black"
        >
          {description}
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        {/* Members */}
        
       <div className="p-4 sm:p-5 flex flex-col flex-1">
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm mt-2 dark:text-black"
        >
        
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm mt-2 dark:text-black"
        >
        
        </CardItem>
        

        

        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm mt-2 dark:text-black"
        >
          <span className="flex -space-x-2">
        <span className="flex items-center mb-4">
            <img
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              src="/Mentors/prince.jpg"
              alt="user1"
            />
            <img
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              src="/Mentors/2.jpg"
              alt="user2"
            />
            <img
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              src="/Mentors/3.jpg"
              alt="user3"
            />
            <img
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              src="/Mentors/4.jpg"
              alt="user4"
            />
          </span>
          <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-600">
            Join 578+ Members
          </span>
        </span>
        </CardItem>


        <CardItem
            translateZ={20}
            as="button"
            className="w-full cursor-pointer bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
          >
            <Link href="/services">
            Explore More
            </Link>
          </CardItem>

        
      </div>
      </CardBody>
    </CardContainer>
  );
};

export default CardEffect;
