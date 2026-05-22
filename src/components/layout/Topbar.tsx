"use client";

import {
  Bell,
  CalendarDays,
  ChevronDown,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Topbar() {
  const pathname = usePathname();
  const pageMap: Record<string, { title: string; section: string }> = {
    "/": { title: "Overview", section: "Dashboard" },
    "/analytics": { title: "Usage & Analytics", section: "Dashboard" },
    "/users": { title: "Users", section: "Dashboard" },
    "/subscriptions": { title: "Subscriptions", section: "Dashboard" },
    "/revenue": { title: "Revenue", section: "Dashboard" },
    "/settings": { title: "Settings", section: "Dashboard" },
  };

  const current = pageMap[pathname] ?? {
    title: "Dashboard",
    section: "Dashboard",
  };

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-100/70 bg-white/85 px-6 py-4 shadow-sm backdrop-blur">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/70">
          {current.section} / {current.title}
        </p>
        <h2 className="text-xl font-semibold text-zinc-900">{current.title}</h2>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 rounded-full border border-amber-100 bg-white px-3 py-2 text-xs font-semibold text-amber-700 shadow-sm">
          <CalendarDays className="h-4 w-4" />
          30 days
          <ChevronDown className="h-4 w-4" />
        </button>

        <button className="relative rounded-full border border-amber-100 bg-white p-2 text-amber-700 shadow-sm">
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-amber-500" />
          <Bell className="h-4 w-4" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 rounded-full border border-amber-100 bg-white px-3 py-2 text-left shadow-sm">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Admin"
                />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-zinc-900">Alex R.</p>
                <p className="text-[11px] text-zinc-500">Super Admin</p>
              </div>
              <ChevronDown className="h-4 w-4 text-zinc-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="px-3 py-2">
              <p className="text-xs font-semibold text-zinc-900">
                Alex Reynolds
              </p>
              <p className="text-xs text-zinc-500">alex@mamamind.com</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-rose-500 focus:text-rose-500">
              <LogOut className="h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
