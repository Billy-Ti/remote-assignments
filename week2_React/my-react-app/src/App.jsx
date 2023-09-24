import ContentBlock from './Components/ContentBlock';
import { useState } from 'react';
import './assets/base/base.css';
import './assets/base/reset.css';
import './assets/util/utilities.css';
function App() {

  const [txt, setTxt] = useState('Welcome Message');

  const handleTxtChange = () => {
    setTxt(txt === 'Welcome Message' ? 'Have a Good Time!' : 'Welcome Message');
  }

  return (
    <>
      {/* header、 navbar */}
      <div className="header d-flex color-light-gray position-relative ">
        <input
          type="checkbox"
          name="checkbox"
          id="menu-control-checkbox"
          className="menu-control position-absolute "
        />
        <div className="d-flex py-12 ps-24">
          <a title="Back to home" href="#">
            <h2 className="me-4 d-inline-block">Website Title</h2>
            <span className="me-4 d-inline-block">/</span>
            <span className="d-inline-block">Logo</span>
          </a>
        </div>
        <label htmlFor="menu-control-checkbox">
          <div className="hamburger-icon cursor-pointer">
            <span className="menu-txt d-block d-none" />
            <span className="menu-txt d-block d-none" />
            <span className="menu-txt d-block d-none" />
          </div>
        </label>
        <nav className="nav-bar color-gray position-absolute d-flex">
          <ul className="menu-block d-flex flex-column w-100">
            <li className="menu-row">
              <a title="Item 1" className="menu-link d-block py-24" href="#">
                Item 1
              </a>
            </li>
            <li className="menu-row">
              <a title="Item 2" className="menu-link d-block py-24" href="#">
                Item 2
              </a>
            </li>
            <li className="menu-row">
              <a title="Item 3" className="menu-link d-block py-24" href="#">
                Item 3
              </a>
            </li>
            <li className="menu-row">
              <a title="Item 4" className="menu-link d-block py-24" href="#">
                Item 4
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* main-txt */}
      <div
        onClick={handleTxtChange}
        title="click to change"
        className="container-fluid color-light-blue cursor-pointer"
      >
        <div id="changeText" className="container">
          <h1 id="textH1" className="main-txt fs-40 fw-bold text-center py-100">
            {txt}
          </h1>
        </div>
      </div>
      {/* content */}
      <div className="container pt-24 pb-20">
        <h3 className="fw-bold fs-28 text-center mb-24">Section Title</h3>
        <ul className="content d-flex flex-wrap mb-20">
          <li className="content-box box-1 w-100 text-center color-dark-blue pt-12 mb-16">
            Content Box 1
          </li>
          <li className="content-box box-2 w-100 text-center color-dark-blue pt-12 mb-16">
            Content Box 2
          </li>
          <li className="content-box box-3 w-100 text-center color-dark-blue pt-12 mb-16">
            Content Box 3
          </li>
          <li className="content-box box-4 w-100 text-center color-dark-blue pt-12 mb-0">
            Content Box 4
          </li>
        </ul>
        {/* 多產生的 box 在這 */}
        <ContentBlock />
      </div>
    </>


  )
}

export default App
