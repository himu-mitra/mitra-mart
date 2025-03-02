
export default function SmallCard({item}: any) {
    const {title, number, iconBg, icon} = item
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 flex items-center p-4 gap-4">
      <div className={`p-3 rounded-full flex items-center justify-center ${iconBg}`}>
        {icon}
      </div>
      <div>
        <p>{title}</p>
        <h3 className="text-2xl font-semibold">{number}</h3>
      </div>
    </div>
  );
}
