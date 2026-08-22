"use client";

import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { teamDirectory } from "@/lib/data";

const ALL = "All";

function uniqueSorted(values: string[]) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

const roles = uniqueSorted(teamDirectory.map((p) => p.role));
const businessUnits = uniqueSorted(teamDirectory.map((p) => p.businessUnit));
const locations = uniqueSorted(teamDirectory.map((p) => p.location));

const selectClasses =
  "w-full appearance-none border-b border-hairline bg-transparent py-3 pr-6 text-sm text-ink focus:border-ink focus:outline-none";

export default function TeamDirectory() {
  const [role, setRole] = useState(ALL);
  const [businessUnit, setBusinessUnit] = useState(ALL);
  const [location, setLocation] = useState(ALL);

  const filtered = useMemo(() => {
    return teamDirectory.filter(
      (person) =>
        (role === ALL || person.role === role) &&
        (businessUnit === ALL || person.businessUnit === businessUnit) &&
        (location === ALL || person.location === location)
    );
  }, [role, businessUnit, location]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
        <div>
          <label htmlFor="filter-role" className="text-xs uppercase tracking-wide text-ink/40">
            Role
          </label>
          <div className="relative mt-2">
            <select
              id="filter-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={selectClasses}
            >
              <option value={ALL}>All Roles</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ink/40"
            />
          </div>
        </div>
        <div>
          <label htmlFor="filter-bu" className="text-xs uppercase tracking-wide text-ink/40">
            Business Unit
          </label>
          <div className="relative mt-2">
            <select
              id="filter-bu"
              value={businessUnit}
              onChange={(e) => setBusinessUnit(e.target.value)}
              className={selectClasses}
            >
              <option value={ALL}>All Business Units</option>
              {businessUnits.map((bu) => (
                <option key={bu} value={bu}>
                  {bu}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ink/40"
            />
          </div>
        </div>
        <div>
          <label htmlFor="filter-location" className="text-xs uppercase tracking-wide text-ink/40">
            Location
          </label>
          <div className="relative mt-2">
            <select
              id="filter-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={selectClasses}
            >
              <option value={ALL}>All Locations</option>
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ink/40"
            />
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-ink/50">
        {filtered.length} {filtered.length === 1 ? "person" : "people"}
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-hairline text-xs uppercase tracking-wide text-ink/40">
              <th className="py-3 pr-4 font-normal">Name</th>
              <th className="py-3 pr-4 font-normal">Role</th>
              <th className="py-3 pr-4 font-normal">Business Unit</th>
              <th className="py-3 font-normal">Location</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((person) => (
              <tr key={person.name} className="border-b border-hairline/60">
                <td className="py-3 pr-4 text-ink">{person.name}</td>
                <td className="py-3 pr-4 text-ink/70">{person.role}</td>
                <td className="py-3 pr-4 text-ink/70">{person.businessUnit}</td>
                <td className="py-3 text-ink/70">{person.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
