import React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import DeleteIcon from "@mui/icons-material/Delete";
interface CustomInputProps {
  label: string;
}
const CustomTextArea: React.FC<CustomInputProps> = ({ label }) => {
  return (
    <div className=" mt-8">
      <label className="text-sm font-semibold ">{label}</label>
      <div className="max-w-[825px] w-full bg-white border border-gray-300 mt-4 ">
        <div className="flex flex-wrap items-center bg-gray-200 p-2 rounded-t">
          <button className="p-1 hover:bg-gray-300 rounded text-gray-400 w-10 h-10 mb-2 md:mb-0">
            <FormatBoldIcon />
          </button>
          <button className="p-1 hover:bg-gray-300 rounded ml-2 text-gray-400 w-10 h-10 mb-2 md:mb-0">
            <FormatItalicIcon />
          </button>
          <button className="p-1 hover:bg-gray-300 rounded ml-2 text-gray-400 w-10 h-10 mb-2 md:mb-0">
            <FormatListBulletedIcon />
          </button>
          <button className="p-1 hover:bg-gray-300 rounded ml-2 text-gray-400 w-10 h-10 mb-2 md:mb-0">
            <FormatListNumberedIcon />
          </button>
          <button className="p-1 hover:bg-gray-300 rounded ml-2 text-gray-400 w-10 h-10 mb-2 md:mb-0">
            <UndoIcon />
          </button>
          <button className="p-1 hover:bg-gray-300 rounded ml-2 text-gray-400 w-10 h-10 mb-2 md:mb-0">
            <RedoIcon />
          </button>
          <button className="p-1 hover:bg-gray-300 rounded ml-2 text-gray-400 w-10 h-10 mb-2 md:mb-0">
            <DeleteIcon />
          </button>
        </div>

        <textarea className="w-full h-40 p-2 border-t border-gray-300  focus:outline-none"></textarea>
      </div>
    </div>
  );
};

export default CustomTextArea;
