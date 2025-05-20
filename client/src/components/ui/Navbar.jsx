import React, { useState } from 'react'
import logo from "@/assets/lms-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg";
import { Button } from './button';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DarkMode from '@/DarkMode.jsx';
import MobileNav from './MobileNav.jsx';
export default function Navbar() {

    const [user,setUser]=useState(true);
    // const user=false
    return (
        <div>
            <nav className="bg-sky-500 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between pl-4 ">
                    <a href="#" className="flex items-center ">
                        <img src={logo} className="h-14 mix-blend-multiply" alt="lms Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">Learning Management System</span>
                    </a>


                </div>
            </nav>
            <div className="absolute top-4 right-14 flex gap-6 sm:block hidden">
                {
                    user ? (<DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>My Learning</DropdownMenuItem>
                            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                            {/* <DropdownMenuItem>Setting</DropdownMenuItem> */}
                            <DropdownMenuItem>Log out</DropdownMenuItem>
                            <DropdownMenuItem>Dashboard</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    ) :
                        <div className="justify-between flex gap-2 ">
                            <Button>Login</Button>
                            <Button variant="outline">signup</Button>
                        </div>
                }
               
            </div>
            {/* for mobile devices */}
            <div className="flex  md:hidden absolute right-2 top-3.5">
                <MobileNav  position={"student"} />
            </div>
            <DarkMode />


        </div>



    )
}



//3:09:02