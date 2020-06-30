import React, { useContext } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/lists.css';
import ThemeSideBar from './ThemeSideBar';
import { ThemeContext } from '../../ThemeContext';


function ThemeSettings() {
  const value = useContext(ThemeContext);
  const themeColor = value.theme.sidebar;
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
                <label className="form-check-label" htmlFor="blue">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="blue"
                    name="themeColor"
                    value="blue"
                    defaultChecked={themeColor === 'blue'}
                  />
                  <span className="form-check-sign" />
                  Blue
                </label>
              </div>
              <div className="">
                <label className="form-check-label" htmlFor="red">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="red"
                    name="themeColor"
                    value="red"
                    defaultChecked={themeColor === 'red'}
                  />
                  <span className="form-check-sign" />
                  Red
                </label>
              </div>
              <div className="">
                <label className="form-check-label" htmlFor="green">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="green"
                    name="themeColor"
                    value="green"
                    defaultChecked={themeColor === 'green'}
                  />
                  <span className="form-check-sign" />
                  Green
                </label>
              </div>
              <div className="">
                <label className="form-check-label" htmlFor="purple">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="purple"
                    name="themeColor"
                    value="purple"
                    defaultChecked={themeColor === 'purple'}
                  />
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
