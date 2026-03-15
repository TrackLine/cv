"use client";

import { Printer } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function PrintButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const handlePrint = () => {
    const previousTheme = resolvedTheme ?? "dark";

    // Switch to light theme for printing
    setTheme("light");

    // Give next-themes time to apply the class to <html>, then open print dialog
    const afterPrint = () => {
      setTheme(previousTheme);
      window.removeEventListener("afterprint", afterPrint);
    };

    window.addEventListener("afterprint", afterPrint);

    // Small delay to let next-themes commit the DOM change before print
    setTimeout(() => window.print(), 80);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed top-4 right-16 z-50 size-9 transition-colors hover:border-cyan-500/60 hover:text-cyan-500 print:hidden"
      onClick={handlePrint}
      aria-label="Print resume"
    >
      <Printer className="size-4" />
    </Button>
  );
}
