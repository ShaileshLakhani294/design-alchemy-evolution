import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
export type OrderStatus = "pending" | "completed" | "noshow" | "rejected" | "canceled";

export interface OrderItem {
  name: string;
  modifiers?: string[];
  qty: number;
}

export interface OrderData {
  id: number; // token number
  time: string; // e.g., 04:47 PM
  total: number; // price in ₹
  status: OrderStatus;
  items: OrderItem[];
}

const statusBadge = (status: OrderStatus) => {
  switch (status) {
    case "completed":
      return (
        <Badge className="bg-status-completed/10 text-status-completed border-status-completed/20">Completed</Badge>
      );
    case "noshow":
      return <Badge className="bg-status-noshow/15 text-status-noshow border-status-noshow/20">No Show</Badge>;
    case "rejected":
      return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Rejected</Badge>;
    case "canceled":
      return <Badge className="bg-status-canceled/10 text-status-canceled border-status-canceled/20">Cancelled</Badge>;
    case "pending":
      return <Badge variant="outline" className="bg-secondary/20 text-muted-foreground border-secondary/40">Pending</Badge>;
    default:
      return null;
  }
};

export const OrderCard = ({ order }: { order: OrderData }) => {
  return (
    <article className="overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md">
      {/* Colored header */}
      <div className="flex items-center justify-between bg-secondary/40 px-4 py-3">
        <h3 className="text-sm font-semibold">Order #{order.id}</h3>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-muted-foreground hidden sm:inline">{order.time}</span>
          <span className="font-medium">₹{order.total}</span>
          <span>{statusBadge(order.status)}</span>
        </div>
      </div>

      <div className="p-4">
        <ul className="space-y-1 text-sm">
          {order.items.map((it, idx) => (
            <li key={idx} className="flex items-start justify-between">
              <div>
                <span className="font-medium">{it.name}</span>
                {it.modifiers?.length ? (
                  <div className="text-xs text-muted-foreground">- {it.modifiers.join(", ")}</div>
                ) : null}
              </div>
              <span className="text-sm">{it.qty}</span>
            </li>
          ))}
        </ul>

        {order.status === "pending" && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
              Reject
              <XCircle className="ml-2 h-4 w-4" />
            </Button>
            <Button>
              Accept
              <CheckCircle2 className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};
