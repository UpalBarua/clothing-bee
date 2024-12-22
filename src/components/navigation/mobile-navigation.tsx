"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationLinks } from "@/config";

export function MobileNavigation() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden" asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="me-4 bg-foreground text-background">
        {navigationLinks.map(({ label, href }) => (
          <DropdownMenuItem key={label}>
            <Link href={href}>{label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
