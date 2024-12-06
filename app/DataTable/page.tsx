import React from "react";
import { Ticket } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TicketPriority,
} from "@/components/ui/table";
import TicketStatusBadge from "@/components/TicketStatusBadge";
import PriorityTicket from "@/components/PriorityTicket";

interface Props {
  tickets: Ticket[];
}
const DataTable = ({ tickets }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>
                <div className="flex justify-center">Status</div>
              </TableHead>
              <TableHead>
                {" "}
                <div className="flex justify-cenetr">Priority</div>
              </TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map((ticket) => (
                  <TableRow key={ticket.id} data-href="/">
                    <TableCell data-label="Title">{ticket.title}</TableCell>
                    <TableCell data-label="Status">
                      <div className="flex justify-center">
                        <TicketStatusBadge status={ticket.status} />
                      </div>
                    </TableCell>
                    <TableCell data-label="Priority">
                      <div className="flex justify-cenetr">
                        {" "}
                        <PriorityTicket priority={ticket.priority} />
                      </div>
                    </TableCell>
                    <TableCell data-label="Created At">
                      {ticket.createdAt.toLocaleDateString("en-US", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
