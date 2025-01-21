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

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="flex items-center justify-between py-4">
          <a href="/" className="font-bold text-2xl">
            Pathway Jobs
          </a>
          <div className="md:block hidden space-x-4 text-lg font-medium">
            <Link href="/about">Login</Link>
            <Link href="/contact">Register</Link>
          </div>
          <div className="md:hidden block">
            <Sheet>
              <SheetTrigger>
                <AlignJustify />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="mt-5">Pathway Jobs</SheetTitle>
                  <div className="flex justify-start flex-col space-y-2 text-lg font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/about">Login</Link>
                    <Link href="/contact">Register</Link>
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
