import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { LuPenSquare } from "react-icons/lu";

interface CardProps {
  title: string;
  description: string;
  onDelete: () => void;
  onEdit: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  onDelete,
  onEdit,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const words = description.split(" ");
  const truncatedText = words.slice(0, 13).join(" ");
  const showSeeMore = words.length > 13;

  return (
    <div className="w-[280px] py-2 px-4 items-stretch flex flex-col justify-between bg-white min-h-14 max-h-40 bg-opacity-20">
      <div className="font-bold text-white">{title}</div>
      <div
        className={`text-white mt-2 cursor-pointer ${
          expanded ? "max-h-full" : "max-h-24"
        }`}
        onClick={toggleExpanded}
      >
        {expanded ? description : truncatedText}
        {!expanded && showSeeMore && (
          <span className="text-green-600 font-bold"> See more...</span>
        )}
      </div>
      {expanded && (
        <div
          className="text-green-600 font-bold cursor-pointer"
          onClick={toggleExpanded}
        >
          See less
        </div>
      )}
      <div className="flex items-center mt-3 gap-2 justify-end self-end">
        <div className="text-white font-light">time</div>
        <div
          className="text-green-600 cursor-pointer font-bold"
          onClick={onEdit}
        >
          <LuPenSquare />
        </div>
        <div
          className="font-bold cursor-pointer text-red-700"
          onClick={onDelete}
        >
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default Card;
