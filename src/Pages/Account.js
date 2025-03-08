import { useState } from "react";

import { 
  FaBold, FaItalic, FaUnderline, FaStrikethrough, FaQuoteRight, FaCode, 
  FaListUl, FaListOl, FaSubscript, FaSuperscript, FaAlignLeft, FaAlignCenter, 
  FaAlignRight, FaParagraph, FaLink, FaImage, FaTextHeight 
} from "react-icons/fa";

const settingsMenu = [
  "Email Settings",
  "Tax Settings",
  "Cost Settings",
  "Fee Settings",
  "Accessory Settings",
  "Warranty Settings",
  "Guarantee Settings",
  "Insurance Settings",
  "Facebook Settings",
  "Craigslist Settings",
  "Social Connect Settings",
  "Logo Settings",
];

export default function SettingsPage() {
  const [selected, setSelected] = useState("Email Settings");
  const [selectedHeading, setSelectedHeading] = useState("Normal");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-md p-5">
        <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
        <ul className="mt-4 space-y-2">
          {settingsMenu.map((item) => (
            <li
              key={item}
              className={`p-3 rounded-lg cursor-pointer ${
                selected === item ? "bg-blue-500 text-white" : "text-gray-700"
              }`}
              onClick={() => setSelected(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6">
        <h2 className="text-2xl font-bold text-blue-600">{selected}</h2>
        
        {selected === "Email Settings" && (
          <div className="bg-white shadow-md rounded-lg p-6 mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-md"
                defaultValue="The Car Boys"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-2 border rounded-md"
                defaultValue="leads@mg.zopmailer.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Header</label>
              <div className="flex flex-wrap items-center space-x-3 p-3 bg-gray-100 rounded-md shadow-md">
      {/* Text Formatting Icons */}
      <button className="icon"><FaBold /></button>
      <button className="icon"><FaItalic /></button>
      <button className="icon"><FaUnderline /></button>
      <button className="icon"><FaStrikethrough /></button>
      <button className="icon"><FaQuoteRight /></button>
      <button className="icon"><FaCode /></button>

      {/* Lists */}
      <button className="icon"><FaListUl /></button>
      <button className="icon"><FaListOl /></button>

      {/* Subscript & Superscript */}
      <button className="icon"><FaSubscript /></button>
      <button className="icon"><FaSuperscript /></button>

      {/* Alignment */}
      <button className="icon"><FaAlignLeft /></button>
      <button className="icon"><FaAlignCenter /></button>
      <button className="icon"><FaAlignRight /></button>

      {/* Paragraph Format */}
      <button className="icon"><FaParagraph /></button>

      {/* Links & Images */}
      <button className="icon"><FaLink /></button>
      <button className="icon"><FaImage /></button>

      {/* Heading Dropdown */}
      <select
        className="px-2 py-1 border rounded-md bg-white cursor-pointer text-sm"
        value={selectedHeading}
        onChange={(e) => setSelectedHeading(e.target.value)}
      >
        <option>Normal</option>
        <option>Heading 1</option>
        <option>Heading 2</option>
        <option>Heading 3</option>
      </select>

      {/* Text Formatting Options */}
      <button className="icon"><FaTextHeight /></button>
    </div>
              <textarea className="w-full mt-2 p-2 border rounded-md">
                The Car Boys
              </textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Content</label>
              <div className="flex flex-wrap items-center space-x-3 p-3 bg-gray-100 rounded-md shadow-md">
      {/* Text Formatting Icons */}
      <button className="icon"><FaBold /></button>
      <button className="icon"><FaItalic /></button>
      <button className="icon"><FaUnderline /></button>
      <button className="icon"><FaStrikethrough /></button>
      <button className="icon"><FaQuoteRight /></button>
      <button className="icon"><FaCode /></button>

      {/* Lists */}
      <button className="icon"><FaListUl /></button>
      <button className="icon"><FaListOl /></button>

      {/* Subscript & Superscript */}
      <button className="icon"><FaSubscript /></button>
      <button className="icon"><FaSuperscript /></button>

      {/* Alignment */}
      <button className="icon"><FaAlignLeft /></button>
      <button className="icon"><FaAlignCenter /></button>
      <button className="icon"><FaAlignRight /></button>

      {/* Paragraph Format */}
      <button className="icon"><FaParagraph /></button>

      {/* Links & Images */}
      <button className="icon"><FaLink /></button>
      <button className="icon"><FaImage /></button>

      {/* Heading Dropdown */}
      <select
        className="px-2 py-1 border rounded-md bg-white cursor-pointer text-sm"
        value={selectedHeading}
        onChange={(e) => setSelectedHeading(e.target.value)}
      >
        <option>Normal</option>
        <option>Heading 1</option>
        <option>Heading 2</option>
        <option>Heading 3</option>
      </select>

      {/* Text Formatting Options */}
      <button className="icon"><FaTextHeight /></button>
    </div>
              <textarea className="w-full mt-2 p-2 border rounded-md">
                We appreciate that you took the time to contact us. We will review your submission and get in touch with you as soon as possible.
              </textarea>
            </div>

            <div className="mb-4">
                         <label className="block text-gray-700 font-medium">Footer</label>
                         <div className="flex flex-wrap items-center space-x-3 p-3 bg-gray-100 rounded-md shadow-md">
      {/* Text Formatting Icons */}
      <button className="icon"><FaBold /></button>
      <button className="icon"><FaItalic /></button>
      <button className="icon"><FaUnderline /></button>
      <button className="icon"><FaStrikethrough /></button>
      <button className="icon"><FaQuoteRight /></button>
      <button className="icon"><FaCode /></button>

      {/* Lists */}
      <button className="icon"><FaListUl /></button>
      <button className="icon"><FaListOl /></button>

      {/* Subscript & Superscript */}
      <button className="icon"><FaSubscript /></button>
      <button className="icon"><FaSuperscript /></button>

      {/* Alignment */}
      <button className="icon"><FaAlignLeft /></button>
      <button className="icon"><FaAlignCenter /></button>
      <button className="icon"><FaAlignRight /></button>

      {/* Paragraph Format */}
      <button className="icon"><FaParagraph /></button>

      {/* Links & Images */}
      <button className="icon"><FaLink /></button>
      <button className="icon"><FaImage /></button>

      {/* Heading Dropdown */}
      <select
        className="px-2 py-1 border rounded-md bg-white cursor-pointer text-sm"
        value={selectedHeading}
        onChange={(e) => setSelectedHeading(e.target.value)}
      >
        <option>Normal</option>
        <option>Heading 1</option>
        <option>Heading 2</option>
        <option>Heading 3</option>
      </select>

      {/* Text Formatting Options */}
      <button className="icon"><FaTextHeight /></button>
    </div>

              <textarea className="w-full mt-2 p-2 border rounded-md">
                The Car Boys
                1400 Aimco Blvd Unit 14
              </textarea>
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Save
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
