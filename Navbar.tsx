"use client";
export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="font-bold">THE RURAL REVOLUTION</div>
        <a href="#join" className="bg-[#E4682D] px-5 py-2 text-sm">Join</a>
      </div>
    </div>
  );
}