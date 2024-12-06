"use client";
import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { ticketSchema } from "../../ValidationSchemas/ticket";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { z } from "zod";
type TicketFormData = z.infer<typeof ticketSchema>;
const form = useForm<TicketFormData>({
  resolver: zodResolver(ticketSchema),
});

const TicketForm = () => {
  async function onSubmit(values: z.infer<typeof ticketSchema>);
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ticket Title</FormLabel>
                <FormControl>
                  <Input placeholder="Ticket Title ..." {...field} />
                </FormControl>
              </FormItem>
            )}></FormField>
        </form>
      </Form>
    </div>
  );
};

export default TicketForm;
