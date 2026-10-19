import { useState } from "react";

const name = ["anuj", "aryan", "sudhir", "karan", "prem"];

export default function SearchFilter() {
  const [search, setSearch] = useState("");

  const filteredNames = name.filter((name) =>
    name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()),
  );

  return (
    <div>
      <h2>Search Filter</h2>

      <input
        type="searchFilter"
        id="searchFilter"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSearch("")}>Clear</button>
      {filteredNames.length > 0 ? (
        <ul>
          {filteredNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No result found</p>
      )}
    </div>
  );
}
