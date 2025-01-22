"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = ({ user }) => {


  return (
    <div>
      <div>
        <nav className="flex items-center justify-between py-4">
          <a href="/" className="font-bold text-2xl">
            Pathway Jobs
          </a>
          <div className="md:flex items-center hidden gap-8 text-lg font-medium">
            <Link href="/">Home</Link>
            {user ? (
              <>
                <Link href="/jobs">Jobs</Link>
                <Link href="/activity">Activity</Link>
                <Link href="/membership">Membership</Link>
                <Link href="/account">Account</Link>
              </>
            ) : (
              <>
                <Link href="/sign-in">Login</Link>
                <Link href="/sign-up">Register</Link>
              </>
            )}
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="md:hidden block">
            <Sheet>
              <SheetTrigger>
                <AlignJustify />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="mt-5 flex items-center justify-center gap-2 z-50">
                    Pathway Jobs <UserButton afterSignOutUrl="/" />
                  </SheetTitle>
                  <div className="flex justify-center items-start flex-col space-y-2 text-lg font-medium">
                    <Link href="/">Home</Link>
                    {user ? (
                      <>
                        <Link href="/jobs">Jobs</Link>
                        <Link href="/activity">Activity</Link>
                        <Link href="/membership">Membership</Link>
                        <Link href="/account">Account</Link>
                      </>
                    ) : (
                      <>
                        <Link href="/sign-in">Login</Link>
                        <Link href="/sign-up">Register</Link>
                      </>
                    )}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
