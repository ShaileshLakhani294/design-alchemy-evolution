import React from "react";
import { cn } from "@/lib/utils";

export const AaharamLogo = ({ className }: { className?: string }) => (
  <div className={cn("inline-flex items-center gap-2", className)} aria-label="Aaharam logo">
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="hsl(var(--primary) / 0.15)" />
      <path d="M8 12c2-4 6-4 8 0" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="9" cy="10" r="1.2" fill="hsl(var(--primary))"/>
      <circle cx="15" cy="10" r="1.2" fill="hsl(var(--primary))"/>
    </svg>
    <span className="rounded-full border border-primary/40 px-3 py-1 text-sm font-semibold text-primary">aaharam</span>
  </div>
);

export const TatvaSoftLogo = ({ className }: { className?: string }) => (
  <div className={cn("inline-flex items-center gap-2", className)} aria-label="TatvaSoft logo">
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="hsl(var(--muted) / 0.6)"/>
      <path d="M6 12h12" stroke="hsl(var(--foreground) / 0.6)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 6v12" stroke="hsl(var(--foreground) / 0.6)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="rounded-md border bg-muted px-3 py-1 text-sm font-medium">TatvaSoft</span>
  </div>
);
