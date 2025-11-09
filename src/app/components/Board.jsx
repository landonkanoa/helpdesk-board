"use client";

import { useState, useEffect } from "react";
import StatusFilter from "./StatusFilter";
import PriorityFilter from "./PriorityFilter";
import SearchBox from "./SearchBox";
import StatusMessage from "./StatusMessage";
import TicketList from "./TicketList";
import MyQueueSummary from "./MyQueueSummary";

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ status: "All", priority: "All" });
  const [search, setSearch] = useState("");
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/tickets");
        const data = await response.json();
        setTickets(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  const visibleTickets = tickets.filter((ticket) => {
    const statusMatch =
      filters.status === "All" || ticket.status === filters.status;
    const priorityMatch =
      filters.priority === "All" || ticket.priority === filters.priority;
    const searchMatch =
      search === "" ||
      ticket.title.toLowerCase().includes(search.toLowerCase()) ||
      ticket.description.toLowerCase().includes(search.toLowerCase());

    return statusMatch && priorityMatch && searchMatch;
  });

  const handleAddToQueue = (ticketId) => {
    setQueue((prevQueue) => {
      if (prevQueue.some((t) => t.id === ticketId)) {
        return prevQueue;
      }
      const ticket = tickets.find((t) => t.id === ticketId);
      return [...prevQueue, ticket];
    });
  };

  const handleRemoveFromQueue = (ticketId) => {
    setQueue((prevQueue) => prevQueue.filter((t) => t.id !== ticketId));
  };

  const handleClearQueue = () => {
    setQueue([]);
  };

  return (
    <div>
      <div>
        <StatusFilter
          value={filters.status}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, status: value }))
          }
        />
        <PriorityFilter
          value={filters.priority}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, priority: value }))
          }
        />
        <SearchBox value={search} onChange={(value) => setSearch(value)} />
      </div>

      <StatusMessage
        loading={loading}
        error={error}
        isEmpty={visibleTickets.length === 0 && !loading && !error}
      />

      <TicketList
        tickets={visibleTickets}
        onAddToQueue={handleAddToQueue}
        queuedTicketIds={queue.map((t) => t.id)}
      />

      <MyQueueSummary
        queue={queue}
        onRemove={handleRemoveFromQueue}
        onClearQueue={handleClearQueue}
      />
    </div>
  );
}
