import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"
import { CENTER_NAV_LINKS } from "@/lib/constants"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="hero-pill home-nav">
            <Link href="/" className="home-brand">
                <span className="relative mr-2 flex h-10 w-10 shrink-0 items-center justify-center overflow-visible">
                    <Image
                        src="/logo.png"
                        alt="Luma Studio"
                        width={72}
                        height={72}
                        className="h-10 w-10 max-h-none max-w-none origin-left scale-[1.55] object-cover"
                        priority
                    />
                </span>
                <div className="min-w-0">
                    <span className="caps-2xs block text-sm font-semibold text-foreground">
                        Luma Studio
                    </span>
                    <span className="caps-xs block truncate text-xs uppercase text-muted-foreground">
                        AI image restyling
                    </span>
                </div>
            </Link>

            <div className="home-nav-center">
                {CENTER_NAV_LINKS.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="hero-nav-link inline-flex items-center gap-1"
                    >
                        {link.label}
                        {"chevron" in link && link.chevron ? (
                            <ChevronDownIcon className="home-nav-chevron" aria-hidden />
                        ) : null}
                    </Link>
                ))}
            </div>

            <div className="home-nav-auth">
                <ModeToggle />
                <Show when="signed-out">
                    <SignInButton mode="modal" fallbackRedirectUrl="/studio">
                        <Button type="button" variant="outline" size="sm" className="home-btn-signin">
                            Sign In
                        </Button>
                    </SignInButton>
                    <SignUpButton mode="modal" fallbackRedirectUrl="/studio">
                        <Button type="button" className="home-btn-nav-primary">
                            Get Started
                        </Button>
                    </SignUpButton>
                </Show>

                <Show when="signed-in">
                    <Button variant="outline" asChild className="home-btn-studio-outline">
                        <Link href="/studio" prefetch={false}>
                            Studio
                        </Link>
                    </Button>
                    <UserButton />
                </Show>
            </div>
        </nav>
    )
}

export default Navbar