import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// shows a setting icon
import {FiSettings } from 'react-icons/fi';
// Represents the React Tooltip component that displays a piece of information about the target element on mouse hover.
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Calendar, Stacked, Area, Bar, Line, Pie, Financial, ColorPicker, ColorMapping, Pyramid, Customers, Editor, Employees, Kanban, Orders } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  // call it as a hook
  const { currentColor, currentMode, activeMenu, themeSettings, setThemeSettings } = useStateContext();
  
  return (
    <div className={currentMode === 'Dark' ? 'dark' : '' }>
      <BrowserRouter>
      {/* from tailwind */}
        <div className="flex relative dark:bg-main-dark-bg">
          <div 
            className="fixed right-4 bottom-4" 
            style={{zIndex: '1000' }}>
            {/* displays "settings" by hovering  over the component */}
            <TooltipComponent 
              content="Settings" 
              position="Top"
              onClick={()=>setThemeSettings(true)}
            >
              {/* text-3xl makes the icon bigger */}
              <button 
                type="button" 
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" 
                style={{ background: currentColor, borderRadius: '50% '}}> 
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* to see if the menu is active */}
          {activeMenu ? (
            // if that is true then render Sidebar
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"> 
              <Sidebar />
            </div>
          ) : (
            // if thats not the case render a div with a Sidebar which is not visible 
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          {/* navigationbar */}
          {/* to reduce repetetive code */}
          {/* apply all the styles and if the menu is active apply md:m1-72 and usually apply flex-2 */}
          <div className={
            activeMenu
            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
          >
            <div className="fixed md:static
             bg-main-bg
             dark:bg-main-dark-bg 
             navbar w-full"
            >
            <Navbar /> 
            </div>
          {/* div for routing */}
            <div>

              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App