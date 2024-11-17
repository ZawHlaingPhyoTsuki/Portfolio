import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Zaw Hlaing Phyo. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Designed and
        developed by <span className="font-semibold">Zaw Hlaing Phyo</span>,
        following tutorials by
        <span className="font-semibold"> ByteGrad</span>. Built with
        React, Next.js, TypeScript, Tailwind CSS, and Framer Motion. Hosted on
        Vercel.
      </p>
    </footer>
  );
}
