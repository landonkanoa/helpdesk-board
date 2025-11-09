"use client";

export default function PriorityFilter({ value, onChange }) {
  return (
    <div>
      <label htmlFor="priority-filter">Priority:</label>
      <select
        id="priority-filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
    </div>
  );
}
