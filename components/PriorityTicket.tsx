import { Priority } from "@prisma/client";
import { Flame } from "lucide-react";
import React from "react";

interface Props {
  priority: Priority;
}

const priorityMap: Record<Priority, { label: string; level: 1 | 2 | 3 }> = {
  HIGH: { label: "hight", level: 3 },
  MEDIUM: { label: "medium", level: 2 },
  LOW: { label: "low", level: 1 },
};

const PriorityTicket = ({ priority }: Props) => {
  return (
    <>
      <Flame
        className={`${
          priorityMap[priority].level >= 1 ? "text-red-500" : "text-muted"
        }`}
      />
      <Flame
        className={`${
          priorityMap[priority].level >= 2 ? "text-red-500" : "text-muted"
        }`}
      />
      <Flame
        className={`${
          priorityMap[priority].level >= 3 ? "text-red-500" : "text-muted"
        }`}
      />
    </>
  );
};

export default PriorityTicket;
