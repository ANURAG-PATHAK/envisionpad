"use client";
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";

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
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <div className="mx-2 text-lg">Envision Pad</div>
      </Link>
      <nav className="flex justify-between my-4">
        <Link className="mx-2" href="/">Home</Link>
        <Link className="mx-2" href="/about">About</Link>
        <Link className="mx-2" href="/contact">Contact</Link>
      </nav>
      <div>
        <Button className="mx-2">Login</Button>
        <Button className="mx-2" variant={"secondary"}>Register</Button>
      </div>
    </div>
  )
}

export function MobileNav({ className }: { className: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={clsx(className, "container flex flex-col my-4")}>
      <div className={isOpen ? "hidden" : "flex justify-between md:hidden"}>
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div className="mx-2">Envision Pad</div>
        </Link>
        <div className="">
          <Button variant={"ghost"} onClick={() => { setIsOpen(true) }} >
            <MdMenu className="text-2xl" />
          </Button>
        </div>
      </div >
      <div className={isOpen ? "flex flex-col md:hidden" : "hidden"}>
        <div className="self-end">
          <Button variant={"ghost"} onClick={() => { setIsOpen(false) }}>
            <MdClose className="text-2xl" />
          </Button>
        </div>
        <nav className="flex flex-col items-center my-4">
          <Link className="my-2" href="/">Home</Link>
          <Link className="my-2" href="/about">About</Link>
          <Link className="my-2" href="/contact">Contact</Link>
        </nav>
        <div className="flex flex-col my-4">
          <Button className="my-2">Login</Button>
          <Button className="my-2" variant={"secondary"}>Register</Button>
        </div>
      </div>
    </div >
  )
}
