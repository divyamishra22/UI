
import { FaSearch } from "react-icons/fa";


const TableHeader = ({ columns }) => {
    return (
      <thead className="bg-gray-100 text-blue-600">
        <tr>
          {columns.map((col, index) => (
            <th key={index} className="p-3 text-left font-medium uppercase">
              {col}
            </th>
          ))}
        </tr>
      </thead>
    );
  };
  
  const TableRow = ({ data }) => {
    return (
        <>
    
    <tr className="border-b hover:bg-gray-50 transition">
      {/* Checkbox at the start */}
      <td className="p-3 flex gap-x-2">
        <input type="checkbox" className="w-4 h-4" />
        <FaSearch className="cursor-pointer" />
      </td>

      {/* Magnifying Glass Icon */}
    
      
     

      {/* Dynamic Data */}
      {data.map((cell, index) => (
        <td key={index} className="p-3 h-full ">{cell}</td>
      ))}
    </tr>
      </>
    );
  };
  
  const LeadsTable = () => {
    const columns = [
        "icon",  "First Name", "Last Name", "Phone", "Email", "Source", "Status", "Assigned"
    ];
    
    const leadsData = [
      ["Sukhmantesh", "Singh", "(705) 341-0103", "Singhsukhman585@gmail.com", "Web Lead - Credit Application", "New", "Not Assigned"],
      ["Sahil", "Bali", "(613) 220-0054", "Balisaab89@gmail.com", "Web Lead - Credit Application", "New", "Not Assigned"],
      ["Kofi", "Dankwa", "(616) 727-1977", "Kofisafoagyeidankwa@gmail.com", "Web Lead - Credit Application", "New", "Not Assigned"],
      ["Katarzyna", "Baran", "(437) 545-9825", "Kate01734@gmail.com", "Web Lead - Test Drive", "New", "Not Assigned"],
      ["Harsh", "Patel", "(437) 477-1431", "Hp8250452@gmail.com", "Web Lead - Contact", "New", "Not Assigned"],
    ];
  
    return (
      <div className=" p-6">
        <table className="w-full   bg-white shadow-md">
          <TableHeader columns={columns} />
          <tbody>
            {leadsData.map((row, index) => (
              <TableRow key={index} data={row} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default LeadsTable;
  