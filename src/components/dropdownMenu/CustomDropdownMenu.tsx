import { Avatar, Box } from "@mui/material";
import Link from "next/link";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
export default function CustomDropdownMenu() {
  return (
    <div>
      <div className="w-full max-w-sm rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-gray-200">
        {/* Mobile Menu Button */}
        <Box
          aria-label="account-upgrade"
          className="px-4 py-6 lg:hidden "
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <div aria-label="navigation" className="py-2">
            <nav className="grid gap-1">
              <Link
                href="/"
                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-prim font-semibold focus:outline-none hover:bg-gray-100 rounded-md"
              >
                <span>Dashboard</span>
              </Link>
              <Link
                href="/"
                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-prim font-semibold focus:outline-none hover:bg-gray-100 rounded-md"
              >
                <span>My Jobs</span>
              </Link>
              <Link
                href="/"
                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-prim font-semibold focus:outline-none hover:bg-gray-100 rounded-md"
              >
                <span>CV Search</span>
              </Link>
              <Link
                href="/"
                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-prim font-semibold focus:outline-none hover:bg-gray-100 rounded-md"
              >
                <span>Report</span>
              </Link>
              <Link
                href="/"
                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-prim font-semibold focus:outline-none hover:bg-gray-100 rounded-md"
              >
                <span>Billing</span>
              </Link>
            </nav>
          </div>
        </Box>

        <div aria-label="header" className="flex space-x-4 items-center p-4">
          <div
            aria-label="avatar"
            className="flex mr-auto items-center space-x-4"
          >
            <Avatar src="/profile.jpg" alt="avatar Evan You" />
            <div className="space-y-2 flex flex-col flex-1 truncate">
              <div className="font-medium relative text-xl leading-tight text-gray-900">
                <span className="flex">
                  <span className="truncate relative pr-8 text-prim font-bold">
                    El Salam Hospital
                    <span
                      aria-label="verified"
                      className="absolute top-1/2 -translate-y-1/2 right-0 inline-block rounded-full"
                    ></span>
                  </span>
                </span>
              </div>
              <p className="font-normal text-base leading-tight text-[]truncate text-prim">
                elsalamhospital@gmail.com
              </p>
              <Link href="#" className=" text-sec font-semibold underline">
                View Profile as vistor
              </Link>
            </div>
          </div>
        </div>
        <div aria-label="navigation" className="py-2">
          <nav className="grid gap-1">
            <Link
              href="/"
              className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-prim font-semibold focus:outline-none hover:bg-gray-100 rounded-md"
            >
              <ManageAccountsOutlinedIcon />
              <span>Edit Profile</span>
            </Link>
            <Link
              href="/"
              className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-prim font-semibold focus:outline-none hover:bg-gray-100 rounded-md"
            >
              <FeaturedPlayListOutlinedIcon />
              <span>Jop Post</span>
            </Link>
            <Link
              href="/"
              className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-prim font-semibold focus:outline-none hover:bg-gray-100 rounded-md"
            >
              <InventoryOutlinedIcon />
              <span>Jop List</span>
            </Link>
            <Link
              href="/"
              className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-prim font-semibold focus:outline-none hover:bg-gray-100 rounded-md"
            >
              <PermPhoneMsgOutlinedIcon />
              <span>Help Center</span>
            </Link>
            <Link
              href="/"
              className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-prim font-semibold focus:outline-none hover:bg-gray-100 rounded-md"
            >
              <MailOutlinedIcon />
              <span>ContectUs</span>
            </Link>
          </nav>
        </div>

        <div aria-label="footer" className="pt-2">
          <button
            type="button"
            className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-wro focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <LogoutOutlinedIcon />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
