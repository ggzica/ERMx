"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Eye,
  MoreHorizontal,
  SquareChartGantt,
  SquarePen,
  Trash,
  UserMinus,
  UserPen,
} from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import ColumnFilter from "@/components/ColumnFilter";

export const getColumns = (filters, handleFilterChange) => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => (
      <ColumnFilter
        label="Name"
        placeholder="Filter name..."
        value={filters.name || ""}
        onChange={(val) => handleFilterChange("name", val)}
      />
    ),
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "phoneNbr",
    header: "Phone Number",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <div className="flex space-x-2">
          <Badge
            variant="outline"
            className={cn(
              "capitalize",
              status === "Active" && "bg-green-500/40",
              status === "Inactive" && "bg-red-500/40"
            )}
          >
            {row.getValue("status")}
          </Badge>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
            >
              <DotsHorizontalIcon className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem>
              View
              <DropdownMenuShortcut>
                <Eye />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Charts
              <DropdownMenuShortcut>
                <SquareChartGantt />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              Edit
              <DropdownMenuShortcut>
                <SquarePen />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500!">
              Delete
              <DropdownMenuShortcut>
                <Trash />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
