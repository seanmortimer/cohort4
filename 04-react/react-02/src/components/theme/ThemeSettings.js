import React, { useContext } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/lists.css';
import ThemeSideBar from './ThemeSideBar';
import { ThemeContext } from '../../ThemeContext';


function ThemeSettings() {
  const value = useContext(ThemeContext);
  // const { theme, chooseTheme } = useContext(ThemeContext);

  const handleRadioChange = (e) => {
    // console.log('e.target.value :>> ', e.target.value);
    value.chooseTheme(e.target.value);
  };

  return (
    <div>
      <div className="wrapper">
        <ThemeSideBar />
        <div className="main-panel">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-brand">Choose a theme</div>
              <div className="text-muted">Made with React Context</div>
            </div>
          </nav>
          <div className="content">
            <h3>Theme Colour</h3>
            <h4>Current Theme: {value.theme.sidebar}</h4>
            <form className="form-group" onChange={handleRadioChange}>
              <div className="">
                <label className="form-check-label" htmlFor="themeColor">
                  <input className="form-check-input" type="radio" name="themeColor" value="blue" defaultChecked />
                  <span className="form-check-sign" />
                  Blue
                </label>
              </div>
              <div className="">
                <label className="form-check-label" htmlFor="themeColor">
                  <input className="form-check-input" type="radio" name="themeColor" value="red" />
                  <span className="form-check-sign" />
                  Red
                </label>
              </div>
              <div className="">
                <label className="form-check-label" htmlFor="themeColor">
                  <input className="form-check-input" type="radio" name="themeColor" value="green" />
                  <span className="form-check-sign" />
                  Green
                </label>
              </div>
              <div className="">
                <label className="form-check-label" htmlFor="themeColor">
                  <input className="form-check-input" type="radio" name="themeColor" value="purple" />
                  <span className="form-check-sign" />
                  Purple
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
