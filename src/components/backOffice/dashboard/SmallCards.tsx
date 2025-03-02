import React from "react";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total Orders",
      number: 100,
      iconBg: "bg-green-600",
      icon: <ShoppingCart></ShoppingCart>
    },
    {
      title: "Orders Pending",
      number: 50,
      iconBg: "bg-blue-600",
      icon: <Loader2></Loader2>
    },
    {
      title: "Orders Processing",
      number: 200,
      iconBg: "bg-orange-600",
      icon: <RefreshCcw></RefreshCcw>
    },
    {
      title: "Orders Delivered",
      number: 50,
      iconBg: "bg-yellow-600",
      icon: <CheckCheck></CheckCheck>
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {/* Card */}
      {orderStatus.map((item, idx) => (
        <SmallCard key={idx} item={item}></SmallCard>
      ))}
    </div>
  );
}
