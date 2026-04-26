import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-4">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ by Valerie Rwamba
        </p>
        <p className="text-center text-sm text-muted-foreground md:text-right">
          &copy; {new Date().getFullYear()} Analytics Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}