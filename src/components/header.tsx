import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "./ui/button";
import { GithubIcon, RefreshCcwIcon } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <RefreshCcwIcon strokeWidth={3} className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            Sync Codeforces
          </span>
        </Link>

        <div className="flex flex-1 items-center space-x-2 justify-end">
          <nav className="flex items-center gap-2">
            <Link
              href="https://github.com/mbramani/sync-codeforces"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0",
                )}
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
