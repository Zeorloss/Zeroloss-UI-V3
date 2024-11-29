import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black">
      {/* Animated Loader */}
      <div className="w-12 h-12 border-4 border-zeroPrimary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
