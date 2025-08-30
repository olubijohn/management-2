import { useState, useRef, useEffect } from 'react';
import { Calendar1 } from 'iconsax-reactjs';
import { IoIosArrowDown } from "react-icons/io";

interface DatePickerProps {
  onDateSelect: (date: Date) => void;
}

const DatePicker = ({ onDateSelect }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  const calendarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = [2020, 2021, 2022, 2023, 2024];

  // Handle clicks outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
        setShowMonthDropdown(false);
        setShowYearDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    onDateSelect(newDate);
    setShowCalendar(false);
  };

  const renderCalendarDays = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = [];

    // Previous month's days
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`prev-${i}`} className="text-[#9A9AAF] text-xs px-[10px] py-[5px] rounded-[5px]">
          {prevMonthDays - firstDayOfMonth + i + 1}
        </div>
      );
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = i === selectedDate.getDate() && 
                        currentMonth === selectedDate.getMonth() && 
                        currentYear === selectedDate.getFullYear();
      
      days.push(
        <div
          key={i}
          className={`cursor-pointer rounded-[5px] text-xs px-[10px] py-[5px] ${isSelected ? 'bg-blue-600 text-white shadow-[0_4px_35px_0_rgba(0,98,255,0.10)]' : 'hover:bg-blue-100'}`}
          onClick={() => handleDateSelect(i)}
          style={{ backdropFilter: 'blur(2px)' }}
        >
          {i}
        </div>
      );
    }

    // Next month's days
    const totalCells = 42; // 6 weeks
    const remainingCells = totalCells - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      days.push(
        <div key={`next-${i}`} className="text-[#9A9AAF] text-xs px-[10px] py-[5px] rounded-[5px]">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        ref={buttonRef}
        className="flex items-center gap-2 bg-white p-[9px] rounded-[6px] border border-gray-200 shadow-sm"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <Calendar1 size="20" color="#9A9AAF" />
        <span className="text-xs font-bold text-[#2E2E3A]">{months[selectedDate.getMonth()]}</span>
        <IoIosArrowDown 
          size="16" 
          color="#9A9AAF" 
          className={`transition-transform ${showCalendar ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Calendar Popup */}
      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute top-full left-0 lg:-left-56 mt-1 w-[335px] max-w-[90vw] p-3 lg:p-5 rounded-[10px] z-50"
          style={{ background: 'rgba(255, 255, 255, 0.30)', boxShadow: "0 4px 35px 0 rgba(0, 98, 255, 0.10)", backdropFilter: 'blur(2px)' }}
        >
            <div className='head flex gap-3 lg:gap-5 items-center mb-5'>
                <div className="icon bg-white p-2 rounded-[10px] shadow-[0_2px_10px_0_rgba(0,98,255,0.05)]">
                    <Calendar1 size="20" color="#0062FF" />
                </div>
                <div className="text">
                    <h2 className="text-[15px] text-[#2E2E3A] font-bold">Change Date</h2>
                    <p className="text-xs text-[#2E2E3A]">Change between Date, Month, and Year</p>
                </div>
            </div>
          <div className="p-[10px] bg-white rounded-[10px] z-50">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <button
                className="px-3 lg:px-5 py-[9px] flex items-center gap-2 lg:gap-3 group"
                onClick={() => {
                  setShowMonthDropdown(!showMonthDropdown);
                  setShowYearDropdown(false);
                }}
              >
                <span className="text-xs text-[#2E2E3A] group-hover:text-[#0062FF]">{months[currentMonth]}</span>
        <IoIosArrowDown 
          size="18" 
          className={`transition-transform text-[#9A9AAF] ${showCalendar ? 'rotate-180' : ''} group-hover:text-[#0062FF] group-hover:transition-transform group-hover:rotate-180`}
        />
              </button>
              <button
                className="px-3 lg:px-5 py-[9px] flex items-center gap-2 lg:gap-3 group"
                onClick={() => {
                  setShowYearDropdown(!showYearDropdown);
                  setShowMonthDropdown(false);
                }}
              >
                <span className="text-xs text-[#2E2E3A] group-hover:text-[#0062FF]">{currentYear}</span>
        <IoIosArrowDown 
          size="18" 
          className={`transition-transform text-[#9A9AAF] ${showCalendar ? 'rotate-180' : ''} group-hover:text-[#0062FF] group-hover:transition-transform group-hover:rotate-180`}
        />
              </button>
            </div>

            {/* Month Dropdown */}
            {showMonthDropdown && (
              <div className="absolute top-[122px] left-4 p-[10px] bg-white flex flex-col gap-[5px] z-10 max-h-[275px] shadow-[0_4px_30px_0_rgba(0,98,255,0.15)] overflow-y-scroll hide-scrollbar">
                {months.map((month, index) => (
                  <div
                    key={month}
                    className={`cursor-pointer p-[10px] hover:bg-blue-100 text-xs hover:text-[#0062FF] ${
                      currentMonth === index ? 'bg-[#0062FF] text-white' : ''
                    }`}
                    onClick={() => {
                      setCurrentMonth(index);
                      setShowMonthDropdown(false);
                    }}
                  >
                    {month}
                  </div>
                ))}
              </div>
            )}

            {/* Year Dropdown */}
            {showYearDropdown && (
              <div className="absolute top-[122px] right-4 p-[10px] bg-white w-[114px] z-10 max-h-[275px] shadow-[0_4px_30px_0_rgba(0,98,255,0.15)] overflow-y-scroll hide-scrollbar">
                {years.map((year) => (
                  <div
                    key={year}
                    className={`cursor-pointer p-[10px] hover:bg-blue-100 text-xs hover:text-[#0062FF] ${
                      currentYear === year ? 'bg-[#0062FF] text-white' : ''
                    }`}
                    onClick={() => {
                      setCurrentYear(year);
                      setShowYearDropdown(false);
                    }}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}

            {/* Days Grid */}
            <div className="grid grid-cols-7 rounded-[5px] text-center text-sm">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <div key={day} className="font-medium text-gray-500 py-1 bg-[#F7F9FC]">
                  {day}
                </div>
              ))}
              {renderCalendarDays()}
            </div>
          </div>
          {/* Footer Buttons */}
            <div className="flex justify-between mt-5 pt-4 text-[11px]">
              <button
                className="px-3 lg:px-5 py-[9px] text-[#0062FF] bg-white rounded-[6px]"
                onClick={() => setShowCalendar(false)}
              >
                CANCEL
              </button>
              <button
                className="px-3 lg:px-5 py-[9px] bg-[#0062FF] text-white rounded-[6px]"
                onClick={() => setShowCalendar(false)}
              >
                CONTINUE
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;