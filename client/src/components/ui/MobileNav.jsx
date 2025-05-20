import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export default function MobileNav({ position }) {
    const role = position;
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size='icon' className="rounded-full bg-gray-200  " variant="outline"><Menu /></Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription className="text-sky-500">
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid h-50 gap-0.5 py-6 bg-blue-500 border-2 border-black text-red-100">
                        <div className="flex flex-col items-center gap-8">
                            <Label htmlFor="My Learning" className="hover:text-red-700">
                                My Learning
                            </Label>

                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Label htmlFor="Edit Profile" className="text-right hover:text-red-700">
                                Edit Profile
                            </Label>

                        </div>
                        <div className="flex flex-col items-center justify-between gap-4">
                            <Label htmlFor="Edit Profile" className="text-right hover:text-red-700">
                                Log out
                            </Label>

                        </div>
                    </div>
                    {
                        role === "instructor" ? (

                            <SheetFooter className='absolute top-85 right-28'>
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </SheetClose>
                            </SheetFooter>
                        ) : <SheetFooter className='absolute top-85 right-20'>
                            <SheetClose asChild>
                                <Button type="submit">Dashboard</Button>
                            </SheetClose>
                        </SheetFooter>
                    }
                </SheetContent>
            </Sheet>
        </div>
    )
}
