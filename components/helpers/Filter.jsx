import React from "react";

export default function Filter(type) {
  return (
    <p className="px-5 py-2 mt-1.5 mr-1 text-sm transition-all duration-300 ease-out border rounded-full cursor-pointer hover:shadow-lg active:scale-95">
      {type}
    </p>
  );
}
