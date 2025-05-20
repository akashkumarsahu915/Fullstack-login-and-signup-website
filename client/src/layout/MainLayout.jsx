import Navbar from '@/components/ui/Navbar'
import React from 'react'

import { Outlet } from 'react-router-dom'
export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}
