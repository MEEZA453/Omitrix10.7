'use client';

export default function UpperNav() {
  return (
    <div className="w-full fixed top-0 z-[500]">
      {/* Desktop Image (hidden on small screens) */}
      <img
        src="/svg/uppernav.svg"
        className="w-full hidden sm:block"
        alt="Desktop Nav"
      />

      {/* Mobile Image (visible only on small screens) */}
      <img
        src="/svg/smuppernav.svg"
        className=" sm:hidden"
        alt="Mobile Nav"
      />
    </div>
  );
}
