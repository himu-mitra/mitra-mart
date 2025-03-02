import { AlignJustify, Bell, Sun, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-900 text-slate-50 px-8 py-5 sticky top-0">
      {/* Icon */}
      <button>
        <AlignJustify />
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
}
