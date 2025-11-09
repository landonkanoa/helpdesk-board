"use client";

export default function TicketCard({ ticket, onAddToQueue, isQueued }) {
  return (
    <div>
      <div>
        <span>Priority: {ticket.priority}</span>
      </div>
      <div>
        <span>Status: {ticket.status}</span>
      </div>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <div>Assignee: {ticket.assignee}</div>
      <div>Updated: {new Date(ticket.updatedAt).toLocaleString()}</div>
      <button onClick={() => onAddToQueue(ticket.id)} disabled={isQueued}>
        {isQueued ? "Already in Queue" : "Add to My Queue"}
      </button>
      {isQueued && <div>This Ticket is in your queue</div>}
    </div>
  );
}
