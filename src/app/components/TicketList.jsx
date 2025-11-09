"use client";

import TicketCard from "./TicketCard";

export default function TicketList({ tickets, onAddToQueue, queuedTicketIds }) {
  return (
    <div>
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onAddToQueue={onAddToQueue}
          isQueued={queuedTicketIds.includes(ticket.id)}
        />
      ))}
    </div>
  );
}
