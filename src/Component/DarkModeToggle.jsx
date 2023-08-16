import React from 'react';
function DarkModeToggle({ darkMode, setDarkMode }) {
   return (
      <button
         className={`bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md ${darkMode ? 'active' : ''}`}
         onClick={() => setDarkMode(!darkMode)}
         >
         {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
   );
}
export default DarkModeToggle;