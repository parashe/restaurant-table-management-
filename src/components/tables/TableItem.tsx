type Table = {
    name: string;
  };
  
  export default function TableItem({ table }: { table: Table }) {
    return <div className="border p-2 rounded">{table.name}</div>;
  }
  