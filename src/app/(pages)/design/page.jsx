import React from 'react'

const Design = () => {
  return (
    <div className='container design px-0'>
      <nav className='dropdownmenu px-0'>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About me</a></li>
          <li>
            <a href="">Galery</a>
            <ul className='submenu'>
              <li><a href="">SVG Canvas</a></li>
              <li><a href="">CSS JS</a></li>
              <li><a href="">Word Press</a></li>
            </ul>
          </li>
          <li><a href="">News</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Design