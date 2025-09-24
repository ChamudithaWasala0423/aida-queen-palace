"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const currentDate = new Date();
  // Control popover open/close to optionally close when range completed
  const [open, setOpen] = React.useState(false);
  // Default selection: today to 3 days later; users can still pick any custom range
  const defaultTo = React.useMemo(() => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + 2);
    return d;
  }, [currentDate]);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: currentDate,
    to: defaultTo,
  });
  // Temporary range used only while the popover is open
  const [tempRange, setTempRange] = React.useState<DateRange | undefined>(undefined);

  // While the popover is open, show the temp selection; otherwise show the committed value
  const displayRange = open ? (tempRange ?? date) : date;

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (v) {
            // Initialize temp selection from the current committed value on open
            setTempRange(date);
          } else {
            // Discard temp selection when closing without applying
            setTempRange(undefined);
          }
        }}
      >
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !displayRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {displayRange?.from ? (
              displayRange.to ? (
                <>
                  {format(displayRange.from, "LLL dd, y")} -{" "}
                  {format(displayRange.to, "LLL dd, y")}
                </>
              ) : (
                <>
                  {format(displayRange.from, "LLL dd, y")}
                  <span className="ml-1 text-muted-foreground">(select end date)</span>
                </>
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            // Keep the calendar on the month of the current selection (temp first, then committed)
            defaultMonth={tempRange?.from ?? date?.from ?? currentDate}
            // Show the temp selection while picking; fall back to committed selection
            selected={tempRange ?? date}
            onSelect={(range) => {
              setTempRange(range);
            }}
            numberOfMonths={2}
          />
          {/* Footer actions: Clear and Apply */}
          <div className="flex items-center justify-between gap-2 border-t p-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setTempRange(undefined);
                setDate(undefined);
                setOpen(false);
              }}
            >
              Clear
            </Button>
            <Button
              size="sm"
              onClick={() => {
                if (tempRange?.from && tempRange?.to) {
                  setDate(tempRange);
                  setOpen(false);
                }
              }}
              disabled={!(tempRange?.from && tempRange?.to)}
            >
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}


// http://smcomputers.lk/