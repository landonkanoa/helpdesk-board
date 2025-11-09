"use client";

export default function StatusFilter({ value, onChange }) {
  return (
    <div>
      <label htmlFor="status-filter">Status:</label>
      <select
        id="status-filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="On Hold">On Hold</option>
        <option value="Resolved">Resolved</option>
      </select>
    </div>
  );
}
