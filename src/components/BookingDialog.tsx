import { FormEvent } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      toast.success("Request received! We will contact you shortly.");
      onOpenChange(false);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-foreground text-h3">
            Schedule Strategy Call
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input placeholder="Name" required />
          <Input placeholder="Email" type="email" required />
          <Input placeholder="Phone" type="tel" required />
          <Button type="submit" variant="hero" className="w-full font-semibold">
            Confirm Booking
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
