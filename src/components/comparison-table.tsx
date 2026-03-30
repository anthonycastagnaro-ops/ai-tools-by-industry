type ComparisonTableProps = {
  headers: string[];
  rows: string[][];
};

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-4 py-4 text-left text-xs font-semibold tracking-[0.18em] text-slate-600 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className="px-4 py-4 align-top text-sm leading-7 text-slate-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
