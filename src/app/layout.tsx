'use client'
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { UserContext } from '@/lib/context'
import { useUserData } from '@/lib/hooks'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
    title: 'HospitAlly',
    description: 'Find an appointment',
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const userData = useUserData();
    return (
        <UserContext.Provider value={userData}>
            <html lang="en">
                <body className={inter.className}>
                    <Navbar />
                    {children}
                    <Toaster />
                </body>
            </html>
        </UserContext.Provider>
    )
}
