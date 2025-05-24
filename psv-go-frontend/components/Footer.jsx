import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-secondary py-12 border-t px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div>
                    <h3 className="text-lg font-semibold mb-4">PSV-Go</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        Your one-stop destination for all your shopping needs. Quality products, competitive prices, and exceptional
                        service.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Shop</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/shop" className="text-muted-foreground hover:text-primary">
                                All Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop?category=clothing" className="text-muted-foreground hover:text-primary">
                                Clothing
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop?category=electronics" className="text-muted-foreground hover:text-primary">
                                Electronics
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop?category=home" className="text-muted-foreground hover:text-primary">
                                Home & Kitchen
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Account</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/login" className="text-muted-foreground hover:text-primary">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/register" className="text-muted-foreground hover:text-primary">
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link href="/orders" className="text-muted-foreground hover:text-primary">
                                Order History
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile" className="text-muted-foreground hover:text-primary">
                                My Account
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Information</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/about" className="text-muted-foreground hover:text-primary">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-muted-foreground hover:text-primary">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mt-8 pt-8 border-t">
                <p className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} PSV-Go. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
