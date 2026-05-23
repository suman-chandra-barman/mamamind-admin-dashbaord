"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
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
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Button } from "../ui/button";
import LogoutModal from "../modals/LogoutModal";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";

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

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const NavItem = ({ item }: { item: NavItem }) => {
    const active = pathname === item.href;
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
          active ? "text-amber-400" : "text-gray-400 hover:text-gray-200",
        )}
        onClick={onClose}
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
    <>
      {isOpen ? (
        <button
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
          aria-label="Close sidebar overlay"
        />
      ) : null}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen w-64 flex-col justify-between border-r transition-transform duration-200",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
        )}
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
            <button
              className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-300 hover:text-white lg:hidden"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <X className="h-4 w-4" />
            </button>
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
          </nav>
        </div>

        {/* Logout Button */}
        <div className="px-3 pb-4 space-y-1">
          <Button
            className="w-full bg-red-500 hover:bg-red-600 cursor-pointer flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:text-red-200 transition-colors"
            onClick={() => setIsLogoutOpen(true)}
          >
            <LogOut className="h-4 w-4 shrink-0 text-white" />
            Logout
          </Button>
        </div>
      </aside>

      <LogoutModal
        open={isLogoutOpen}
        onOpenChange={setIsLogoutOpen}
        onConfirm={() => {
          dispatch(logout());
          setIsLogoutOpen(false);
          router.replace("/signin");
        }}
      />
    </>
  );
}
