import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';


function ThemeSideBar() {
  // Can I chain destructure here??


  const value = useContext(ThemeContext);
  const { theme } = value;
  // console.log('value :>> ', value.theme);
  return (
    <div className="sidebar" id="idSideBar" data-image="../assets/img/sidebar-5.jpg" data-color={theme.sidebar}>
      <div className="sidebar-wrapper">
        <div className="logo">
          <div className="simple-text">Theme</div>
        </div>
        <p className="p-3 mt-4 text-left">
          Theme colour: {theme.sidebar}
        </p>
        <p className="p-3 text-left" />
      </div>
    </div>
  );
}


/*
function ThemeSideBar() {
  const value = useContext(ThemeContext);
  // console.log('value :>> ', value.theme);
  return (
    <ThemeContext.Consumer>
      {() => (
        <div className="sidebar" id="idSideBar" data-image="../assets/img/sidebar-5.jpg" data-color={value.theme.sidebar}>
          <div className="sidebar-wrapper">
            <div className="logo">
              <div className="simple-text">Theme</div>
            </div>
            <p className="p-3 mt-4 text-left">
              Theme colour: {value.theme.sidebar}
            </p>
            <p className="p-3 text-left" />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
} */

export default ThemeSideBar;
