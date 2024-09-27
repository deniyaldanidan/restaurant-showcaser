"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAuthContext from "@/hooks/useAuthContext";
import fetchBookings from "@/lib/queryFNS/fetchBookings";
import queryKeys from "@/utils/query-keys";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { format, isPast, isToday } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import deletePastAction from "@/actions/bookings/delete-past-action";

export default function BookingDashPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { authInfo } = useAuthContext();
  const {
    isLoading: isQueryLoading,
    isError: isQueryError,
    error: queryError,
    data: bookingsData,
  } = useQuery({
    queryKey: queryKeys.bookings,
    queryFn: () =>
      fetchBookings(authInfo.status === true ? authInfo.data.token : ""),
    enabled: authInfo.status === true,
  });
  const [filterState, setFilterState] = useState<string>("all");

  useEffect(() => {
    if (isQueryError) {
      console.log(queryError);
      throw new Error("error happened");
    }
  }, [isQueryError, queryError]);

  const filteredBookings = useMemo(() => {
    if (!bookingsData?.length) {
      return [];
    }
    switch (filterState) {
      case "all":
        return bookingsData;

      case "past":
        return bookingsData.filter(
          (bkg) => isPast(new Date(bkg.date)) && !isToday(new Date(bkg.date))
        );

      case "todayNFuture":
        return bookingsData.filter(
          (bkg) => !isPast(new Date(bkg.date)) || isToday(new Date(bkg.date))
        );

      default:
        return bookingsData;
    }
  }, [bookingsData, filterState]);

  const deletePast = async () => {
    if (authInfo.status !== true) {
      return;
    }
    try {
      const res = await deletePastAction(authInfo.data.token);
      if (!res.success) {
        throw new Error(res.error);
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.bookings });
      toast({
        title: "Success",
        description: "Delete action is succeeded.",
        className: "text-lg font-semibold text-[#2b3]",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed",
        description: "Delete action is failed. Try again",
        variant: "destructive",
        className: "text-lg font-semibold",
      });
    }
  };
  // tablet-md:flex-col tablet-md:items-start tablet-md:gap-y-3.5
  return (
    <section className="mb-12 border-b border-b-border py-12">
      <div className="flex items-center gap-x-6 mb-3.5 tablet-md:flex-col tablet-md:items-end tablet-md:gap-y-3.5">
        <h2 className="text-xl font-bold text-high-fg uppercase tablet-md:text-center tablet-md:self-center mobile-md:self-start mobile-md:text-left">
          Bookings
        </h2>
        <div className="flex justify-end items-center gap-x-5 w-full tablet-md:flex-col-reverse tablet-md:gap-y-3.5 tablet-md:items-end mobile-md:items-start">
          <div className="flex items-center gap-x-2 mobile-md:flex-wrap mobile-md:justify-start mobile-md:gap-y-1.5">
            <label className="text-nowrap text-base font-medium text-high-fg ">
              Filter by type:
            </label>
            <Select
              value={filterState}
              onValueChange={(val) => setFilterState(val)}
            >
              <SelectTrigger className="dashboard-filter-trigger-classes min-w-56 capitalize">
                <SelectValue placeholder="Choose a filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="all"
                  className="text-foreground font-medium capitalize"
                >
                  All
                </SelectItem>
                <SelectItem
                  value="past"
                  className="text-foreground font-medium capitalize"
                >
                  Past
                </SelectItem>
                <SelectItem
                  value="todayNFuture"
                  className="text-foreground font-medium capitalize"
                >
                  today & Future
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button
            className="btn btn-danger btn-xs"
            type="button"
            onClick={deletePast}
          >
            Delete Past
          </button>
        </div>
      </div>
      {isQueryLoading ? (
        <Skeleton className="w-full min-h-96 rounded-xl mt-3.5 bg-card" />
      ) : (
        <Table>
          <TableHeader className="text-base">
            <TableRow className="border-b-foreground">
              <TableHead className="font-semibold capitalize text-left min-w-32">
                Name
              </TableHead>
              <TableHead className="font-semibold capitalize text-left min-w-52">
                Time
              </TableHead>
              <TableHead className="font-semibold capitalize text-center min-w-12">
                seats
              </TableHead>
              <TableHead className="font-semibold capitalizen text-right min-w-24">
                Contact
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
            {filteredBookings.length ? (
              filteredBookings.map((bkg) => (
                <TableRow key={bkg.id}>
                  {/* Name */}
                  <TableCell className="text-left font-medium capitalize">
                    {bkg.name.toLowerCase()}
                  </TableCell>
                  {/* Time */}
                  <TableCell className="text-left">
                    {format(
                      new Date(bkg.date + " " + bkg.time),
                      "d MMM yyyy',' hh:mm a"
                    )}
                  </TableCell>
                  {/* Seats */}
                  <TableCell className="text-center">
                    {bkg.noOfPersons}
                  </TableCell>
                  {/* Contact */}
                  <TableCell className="text-right">{bkg.mobile}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="text-base font-medium">
                <TableCell colSpan={4} className="text-center">
                  No bookings yet!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </section>
  );
}
