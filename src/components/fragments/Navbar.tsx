import Link from "next/link";
import { Button } from "../ui/button";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbLogout, TbPhoneCall } from "react-icons/tb";
import { GiSecretBook } from "react-icons/gi";
import { IoBarChartSharp } from "react-icons/io5";

const links = [
  { name: "Home", path: "home", icon: <SiHomeassistantcommunitystore className="text-lg text-black" /> },
  { name: "About", path: "about", icon: <GiSecretBook className="text-lg text-black" /> },
  { name: "Portfolio", path: "portfolio", icon: <IoBarChartSharp className="text-lg text-black" /> },
  { name: "Contact", path: "contact", icon: <TbPhoneCall className="text-lg text-black" /> },
];

const Navbar = ({ open }: { open: boolean }) => {
  return (
    <div className={`flex flex-col justify-between w-full h-screen py-4 ${open ? "mt-0" : "mt-20"} sm:mt-0`}>
      <div className="flex flex-col gap-4">
        {links.map((link) => {
          return (
            <Link key={link.name} href={`/${link.path}`}>
              <Button className="bg-white hover:bg-green-300 w-full cursor-pointer p-1">
                {link.icon}
                <p className={`ml-2 text-black font-semibold ${open ? "flex" : "hidden"} sm:flex`}>{link.name}</p>
              </Button>
            </Link>
          );
        })}
      </div>
      <Button variant="destructive" className="p-1">
        <TbLogout className="text-lg" />
        <p className={`ml-2 font-semibold ${open ? "flex" : "hidden"} sm:flex`}>Logout</p>
      </Button>
    </div>
  );
};

export default Navbar;
