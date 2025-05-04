"use client";

import { useStoreUser } from "@/hooks/use-store-user";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BarLoader } from "react-spinners";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  const { isLoading } = useStoreUser();
  const path = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl ">
          Heart & Wallet
        </Link>

        {path === "/" && (
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-md hover:text-blue-500 transition"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-md hover:text-blue-500 transition "
            >
              How It Works
            </Link>
          </div>
        )}

        <div className="flex items-center gap-4">
          <Authenticated>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 hover:text-blue-500 hover:border-blue-500 transition cursor-pointer"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>

              {/* this is for mobile view */}
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0 ">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            {/* User Button */}
            <UserButton/>
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button
                variant={"ghost"}
                className="hover:bg-gray-200 cursor-pointer"
              >
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button className="bg-blue-500 hover:bg-blue-600 border-none cursor-pointer">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
      </nav>

      {isLoading && <BarLoader width={"100%"} color="#36d7b7" />}
    </header>
  );
};

export default Header;
