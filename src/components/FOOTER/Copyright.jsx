import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Copyright() {
  return (
    <div className="text-white py-2 lg:py-4">
      <hr className="w-11/12 mx-auto mb-3 lg:mb-4" />
      <div className="flex items-center w-full text-center justify-between px-6 lg:px-24">
        <p className="text-xs lg:text-base">Copyright &copy; 2024 TSS. All rights reserved</p>
        <Link target="_blank" href="https://www.instagram.com/thestagesetters/">
          <FaInstagram className="text-base hover:text-color-1  lg:text-2xl"></FaInstagram>
        </Link>
      </div>
    </div>
  );
}
