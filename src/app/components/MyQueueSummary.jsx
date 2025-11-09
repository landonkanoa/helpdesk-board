"use client";

export default function MyQueueSummary({ queue, onRemove, onClearQueue }) {
  return (
    <div>
      <h2>My Queue</h2>
      <p>
        {queue.length} ticket{queue.length !== 1 ? "s" : ""} in your queue
      </p>
      {queue.length > 0 && (
        <div>
          <ul>
            {queue.map((ticket) => (
              <li key={ticket.id}>
                <span>{ticket.title}</span>
                <button onClick={() => onRemove(ticket.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={onClearQueue}>Clear Queue</button>
        </div>
      )}
      {queue.length === 0 && <p>No Tickets in queue</p>}
    </div>
  );
}
