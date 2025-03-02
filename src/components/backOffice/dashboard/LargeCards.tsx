import React from 'react'
import LargeCard from './LargeCard'

export default function LargeCards() {
    const orderStatus = [
        {
            period: "Today Orders",
            sales: 50000,
            color: "bg-green-600"
        },
        {
            period: "Yesterday Orders",
            sales: 50000,
            color: "bg-blue-600"
        },
        {
            period: "This Month",
            sales: 50000,
            color: "bg-orange-600"
        },
        {
            period: "Last Month",
            sales: 50000,
            color: "bg-purple-600"
        },
        {
            period: "All-Time Sales",
            sales: 5000550,
            color: "bg-yellow-600"
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
        {/* Card */}
        {
            orderStatus.map((item, idx) => <LargeCard key={idx} item={item} ></LargeCard>)
        }
    </div>
  )
}
