"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";
import Logo from "./logo";

export default function Header() {
  return (
    <>
      <DesktopNav className="hidden md:flex" />
      <MobileNav className="flex md:hidden" />
    </>
  )
}

export function DesktopNav({ className }: { className: string }) {
  return (
    <div className={clsx(className, "container flex justify-between items-center mx-6 my-2")}>
      <Logo logoLink="/" imageSrc="/logo.png" imageAlt="Logo" className="flex items-center" />
      <nav className="flex justify-between my-4">
        <Link className="mx-8" href="/">Home</Link>
        <Link className="mx-8" href="/about">About</Link>
        <Link className="mx-8" href="/pricing">Pricing</Link>
      </nav>
      <div>
        <Button className="mx-2">
          <Link href="/auth/login">Login</Link>
        </Button>
        <Button className="mx-2" variant={"secondary"}>
          <Link href="/auth/register">Register</Link>
        </Button>
      </div>
    </div>
  )
}

export function MobileNav({ className }: { className: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={clsx(className, "container flex flex-col my-4 bottom-0")}>
      <div className={isOpen ? "hidden" : "flex justify-between md:hidden"}>
        <Logo logoLink="/" imageSrc="/logo.png" imageAlt="Logo" className="flex items-center" />
        <div className="">
          <Button variant={"ghost"} onClick={() => { setIsOpen(true) }} >
            <MdMenu className="text-2xl" />
          </Button>
        </div>
      </div >
      <div className={isOpen ? "fixed top-0 left-0 right-0 bottom-0 bg-[#020817] flex flex-col container mt-4 mr-1 md:hidden" : "hidden"}>
        <div className="self-end">
          <Button variant={"ghost"} onClick={() => { setIsOpen(false) }}>
            <MdClose className="text-2xl" />
          </Button>
        </div>
        <nav className="flex flex-col items-center my-4">
          <Link className="my-2" href="/">Home</Link>
          <Link className="my-2" href="/about">About</Link>
          <Link className="mx-2" href="/pricing">Pricing</Link>
        </nav>
        <div className="flex flex-col my-4">
          <Button className="my-2">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button className="my-2" variant={"secondary"}>
            <Link href="/auth/register">Register</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
