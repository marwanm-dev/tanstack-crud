import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onEdit: (row: T) => void;
  onDelete: (id: number) => void;
}

export function Table<T extends { id: number }>({
  data,
  columns,
  onEdit,
  onDelete,
}: TableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="table-auto w-full border">
      <thead>
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((header) => (
              <th key={header.id} className="p-2 border">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
            <th className="p-2 border">Actions</th>
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2 border">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
            <td className="p-2 border space-x-2">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 px-2 py-1 rounded text-sm"
                onClick={() => onEdit(row.original)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm text-white"
                onClick={() => onDelete(row.original.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
