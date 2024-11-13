"use client";
import { usePathname } from "next/navigation";
import logo from "../../assets/RSH-logo.GIF";
import Image from "next/image";

const index = () => {
  const currentPage = usePathname();
  if (currentPage === "/") {
    return null; // Return null if not on the homepage
  }
  return (
    <div className="relative">
      <footer className="footer footer-center bg-base-300 text-neutral-content p-4 font-zilla">
        <aside>
          <Image className="logo" src={logo} />
          <div className="text-md">
            <h1 className="p-0 m-0">Royal Seoul House</h1>
            Serving authentic Korean food since 1990
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default index;
