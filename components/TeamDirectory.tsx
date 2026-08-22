import { teamDirectory } from "@/lib/data";

export default function TeamDirectory() {
  return (
    <div className="overflow-x-auto">
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
          {teamDirectory.map((person) => (
            <tr
              key={person.name}
              className="border-b border-hairline/60 transition-colors hover:bg-white"
            >
              <td className="py-3 pr-4 text-ink">{person.name}</td>
              <td className="py-3 pr-4 text-ink/70">{person.role}</td>
              <td className="py-3 pr-4 text-ink/70">{person.businessUnit}</td>
              <td className="py-3 text-ink/70">{person.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
