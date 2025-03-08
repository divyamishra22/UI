import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFilter } from "react-icons/fa";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, isToday } from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 1)); // Start at Feb 2025
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to go to previous month
  const prevMonth = () => {
    if (format(currentMonth, "yyyy-MM") !== "2025-02") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
  };

  // Function to go to next month
  const nextMonth = () => {
    if (format(currentMonth, "yyyy-MM") !== "2025-04") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  // Generate all days of the current month
  const generateCalendar = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth)); // Start from first week's Sunday
    const endDate = endOfWeek(endOfMonth(currentMonth)); // End at last week's Saturday

    let days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }
    return days;
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-6xl h-[90vh] bg-white shadow-lg rounded-lg flex flex-col border">
        
        {/* Header Controls */}
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
          
          {/* Month Navigation */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={prevMonth} 
              disabled={format(currentMonth, "yyyy-MM") === "2025-02"}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              <FaChevronLeft />
            </button>

            <span className="text-lg font-semibold">Feb 2025 - Apr 2025</span>

            <button 
              onClick={nextMonth} 
              disabled={format(currentMonth, "yyyy-MM") === "2025-04"}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => setSelectedDate(null)}
            >
              {selectedDate ? format(selectedDate, "MMM d, yyyy") : "Today"}
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <FaFilter />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex flex-col h-full">
          {/* Top Controls */}
          <div className="flex justify-between items-center p-4 border-b">
            <button className="border border-gray-300 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
              Month <span className="ml-2">▼</span>
            </button>
          </div>

          {/* Calendar Grid - Dates */}
          <div className="grid grid-cols-7 border-t border-l flex-1">
            {/* Week Days Header */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-gray-500 font-medium border-r border-b p-4 text-center">
                {day}
              </div>
            ))}

            {/* Days */}
            {generateCalendar().map((day, index) => (
              <div 
                key={index}
                className={`p-4 text-lg font-semibold text-center border-r border-b flex items-center justify-center relative cursor-pointer transition-all
                  ${isSameMonth(day, currentMonth) ? "text-black" : "text-gray-400"}
                  ${isSameDay(day, selectedDate) ? "text-white" : ""}
                  ${isToday(day) ? "border-2 border-blue-500" : ""}
                `}
                style={{ height: "100%" }}
                onClick={() => setSelectedDate(day)}
              >
                <span 
                  className={`inline-block px-2 rounded-full transition-all
                    ${isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : "hover:bg-gray-200"}
                  `}
                >
                  {format(day, "d")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-gray-500 text-sm text-center p-4 border-t">
          2024 © ZOPDEALER Ver. 29.8.0
        </div>
      </div>
    </div>
  );
};

export default Calendar;
