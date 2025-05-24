"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search, Bus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
]

export default function Navbar() {
    const pathname = usePathname()
    const [isSearchOpen, setIsSearchOpen] = useState(false)


    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
            <div className="flex h-16 items-center">

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4 mt-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium transition-colors hover:text-primary",
                                        pathname === link.href ? "text-primary" : "text-muted-foreground",
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>

                <Link href="/" className="mr-6 flex items-center space-x-1">
                    <Bus className="h-5 w-5 text-primary" />
                    <span className="font-bold text-xl text-primary">PSV-Go</span>
                </Link>

                <nav className="hidden md:flex items-center ml-auto space-x-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "transition-colors hover:text-primary font-bold",
                                pathname === link.href ? "text-primary underline underline-offset-2" : "text-muted-foreground",
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center ml-auto space-x-1 md:space-x-4">
                    <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
                        <Search className="h-5 w-5" />
                    </Button>

                    <Button>Login</Button>

                    <Button>Register</Button>


                </div>
            </div>

            {isSearchOpen && (
                <div className="py-4 border-t">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search for products..."
                            className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1/2 -translate-y-1/2"
                            onClick={() => setIsSearchOpen(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
