"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

type TabsContextType = { value: string; setValue: (v: string) => void };
const TabsCtx = React.createContext<TabsContextType | null>(null);

export function Tabs({
  value,
  onValueChange,
  className,
  children,
}: React.PropsWithChildren<{ value: string; onValueChange: (v: string) => void; className?: string }>) {
  const ctx = React.useMemo(() => ({ value, setValue: onValueChange }), [value, onValueChange]);
  return (
    <TabsCtx.Provider value={ctx}>
      <div className={className}>{children}</div>
    </TabsCtx.Provider>
  );
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex rounded-xl border bg-white p-1", className)} {...props} />;
}

export function TabsTrigger({
  value,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const ctx = React.useContext(TabsCtx);
  if (!ctx) throw new Error("TabsTrigger must be used within Tabs");
  const active = ctx.value === value;
  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={cn(
        "px-3 py-1.5 text-sm rounded-lg transition-colors",
        active ? "bg-black text-white" : "text-zinc-700 hover:bg-zinc-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

