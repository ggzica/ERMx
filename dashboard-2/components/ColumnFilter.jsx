"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FilterX, Filter } from "lucide-react";
export default function ColumnFilter({ label, value, onChange, placeholder }) {
  const [inputValue, setInputValue] = useState(value || "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleApply = () => {
    onChange(inputValue);
    setOpen(false);
  };

  const handleClear = () => {
    setInputValue("");
    onChange("");
  };

  return (
    <div className="flex items-center gap-1">
      {label}
      {value ? (
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 p-1 text-primary"
          onClick={handleClear}
        >
          <FilterX className="h-4 w-4" />
        </Button>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 p-1">
              <Filter className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-52">
            <Input
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="mb-2"
            />
            <Button onClick={handleApply} size="sm" className="w-full">
              Apply
            </Button>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}
