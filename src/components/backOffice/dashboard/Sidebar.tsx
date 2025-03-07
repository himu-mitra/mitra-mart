import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='bg-slate-800 space-y-6 w-52 min-h-screen text-slate-50 p-3'>
        <Link className='mb-6' href={"#"}>Logo</Link>
        <div className="space-y-3 flex flex-col">
        <Link href={"#"}>Dashboard</Link>
        <Link href={"#"}>Catalogue</Link>
        <Link href={"#"}>Customers</Link>
        <Link href={"#"}>Markets</Link>
        <Link href={"#"}>Farmers</Link>
        <Link href={"#"}>Orders</Link>
        <Link href={"#"}>Staff</Link>
        <Link href={"#"}>Settings</Link>
        <Link href={"#"}>Online Store</Link>
        </div>
    </div>
  )
}
