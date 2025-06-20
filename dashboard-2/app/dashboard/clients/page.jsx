"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getColumns } from "./features/columns";
import { DataTable } from "./features/data-table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import { Main } from "next/document";
import { UserRoundPlus } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronsLeft } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronsRight } from "lucide-react";

const Page = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState({ name: "" });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const buildQuery = () => {
    const query = new URLSearchParams();
    query.set("page", page);
    query.set("pageSize", pageSize);

    if (filters.name) {
      query.set("name", filters.name);
    }

    return query.toString();
  };
  useEffect(() => {
    axiosInstance
      .get(`/clients?${buildQuery()}`)
      .then((res) => {
        const apiData = res.data.data.map((item) => ({
          id: item.id,
          name: `${item.firstName} ${item.lastName}`,
          email: item.emailAddress,
          active: item.active,
        }));
        setClients(apiData);
        setMeta(res.data.meta.pagination);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [page, pageSize, filters]);

  const handlePageSizeChange = (value) => {
    setPageSize(Number(value));
    setPage(1);
  };

  const columns = getColumns(filters, handleFilterChange);
  return (
    <div className="py-4 md:py-6 px-4 lg:px-6">
      <Card className="@container/card">
        <CardHeader>
          <CardTitle>Clients</CardTitle>
          <CardDescription>
            <span>List of clients</span>
          </CardDescription>

          <CardAction>
            <Button>Add a new record</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : (
            <DataTable columns={columns} data={clients} />
          )}
          <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
            {meta && (
              <>
                {clients.lenght === 0
                  ? "No rows"
                  : `Showing ${(meta.page - 1) * meta.pageSize + 1} to ${
                      (meta.page - 1) * meta.pageSize + clients.length
                    }
                     of ${meta.total} rows`}
              </>
            )}
            <div className="flex items-center gap-2">
              <Select
                value={String(pageSize)}
                onValueChange={handlePageSizeChange}
              >
                <SelectTrigger className="w-[80px] h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span>Rows per page</span>
            </div>
            <span className="whitespace-nowrap">
              Page {meta?.page} of {meta?.pageCount}
            </span>

            <div className="flex gpa-1">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setPage(1)}
                disabled={page === 1}
              >
                <ChevronsLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, meta?.pageCount || 1))
                }
                disabled={page === meta?.pageCount}
              >
                <ChevronRight />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setPage(meta?.pageCount)}
                disabled={page === meta?.pageCount}
              >
                <ChevronsRight />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
