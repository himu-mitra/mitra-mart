import { Layers } from "lucide-react";

export default function LargeCard({item}: any) {
    const {period, sales, color} = item
  return (
    <div className={`rounded-lg text-white shadow-md p-4 flex flex-col items-center gap-2 ${color}`}>
        <Layers></Layers>
        <h4>{period}</h4>
        <h2 className="text-2xl">TK. {sales}</h2>
    </div>
  )
}
