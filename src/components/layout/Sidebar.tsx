"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Users,
  Share2,
  TrendingUp,
  Shield,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/assets/logo.svg";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    label: "MAIN",
    items: [
      { name: "Overview", href: "/", icon: LayoutGrid },
      { name: "Users", href: "/users", icon: Users },
      { name: "Subscriptions", href: "/subscriptions", icon: Share2 },
      { name: "Revenue", href: "/revenue", icon: TrendingUp },
    ],
  },
  {
    label: "MANAGE",
    items: [
      { name: "Plans", href: "/plans", icon: Shield },
      { name: "Bot Responses", href: "/bot-responses", icon: MessageSquare },
    ],
  },
  {
    label: "INSIGHTS",
    items: [{ name: "Usage & Analytics", href: "/analytics", icon: BarChart3 }],
  },
  {
    label: "SETTINGS",
    items: [{ name: "Settings", href: "/settings", icon: Settings }],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const NavItem = ({ item }: { item: NavItem }) => {
    const active = pathname === item.href;
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
          active ? "text-amber-400" : "text-gray-400 hover:text-gray-200",
        )}
        style={
          active
            ? {
                backgroundColor: "rgba(180, 117, 23, 0.25)",
                border: "1px solid rgba(180, 117, 23, 0.35)",
              }
            : undefined
        }
      >
        <item.icon
          className={cn(
            "h-4 w-4 shrink-0",
            active ? "text-amber-400" : "text-gray-400",
          )}
        />
        {item.name}
      </Link>
    );
  };

  return (
    <aside
      className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col justify-between lg:flex border-r"
      style={{ backgroundColor: "#1e1a17", borderColor: "#2d2620" }}
    >
      {/* Logo */}
      <div className="space-y-2">
        <div
          className="flex items-center gap-2.5 px-5 border-b py-4 "
          style={{ borderColor: "#2d2620" }}
        >
          <Image src={logo} alt="Mamamind" width={32} height={32} />
          <span className="text-lg font-semibold text-white tracking-wide">
            Mamamind
          </span>
        </div>

        {/* Navigation Sections */}
        <nav className="space-y-4 px-3 pt-4">
          {navigation.map((section) => (
            <div key={section.label} className="space-y-4">
              <h3
                className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: "#6b5f54" }}
              >
                {section.label}
              </h3>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
          <button className="cursor-pointer flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 hover:text-red-200 transition-colors">
            <LogOut className="h-4 w-4 shrink-0 text-gray-400" />
            Logout
          </button>
        </nav>
      </div>

      {/* Bottom:User Profile */}
      <div className="px-3 pb-4 space-y-1">
        {/* User Profile Card */}
        <div
          className="rounded-xl px-3 py-3 mt-2 border flex items-center justify-between"
          style={{
            backgroundColor: "#2a231e",
            borderColor: "#3d342c",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
              style={{ backgroundColor: "#b47517", color: "#1e1a17" }}
            >
              AR
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate leading-tight">
                Alex Reynolds
              </p>
              <p
                className="text-[10px] font-semibold uppercase tracking-widest mt-0.5"
                style={{ color: "#b47517" }}
              >
                Super Admin
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 flex-shrink-0"
            style={{ color: "#6b5f54" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
}
