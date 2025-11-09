"use client";

export default function SearchBox({ value, onChange }) {
  return (
    <div>
      <label htmlFor="search-box">Search:</label>
      <input
        id="search-box"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search title or description"
      ></input>
    </div>
  );
}
