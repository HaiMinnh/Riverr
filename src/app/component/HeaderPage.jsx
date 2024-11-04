"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Design from '../(pages)/design/page'
import { getJobMenu } from '../action/service/productApi'

const HeaderPage = () => {
  const [header, setHeader] = useState(false);
  const [keyword, setKeyword] = useState('');

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    }
  }, []);

  return (
    <div className={header ? 'header active position-fixed bg-black w-100 text-white z-1' : 'header'}>
      <div className='container header px-0 animate__animated animate__fadeInDown'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand ms-1" href="/">
              <Image
                src={'/images/Logo.png'}
                alt='logo'
                width={115}
                height={65}
              />
            </a>
            {header ?
              <div className='form-group d-flex'>
                <input className="form-control" type="text" placeholder='Find Services' onChange={(e) => {
              setKeyword(e.target.value)
            }} />
                <Link href={`/search?keyword=${keyword}`} type='submit' className='btn btn-outline-success '>Search</Link>
              </div>
              : ''
            }
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse bg-outline-success" id="navbarSupportedContent">
              {header ?
                <div className='menu'>
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <a className="nav-link active fw-bold text-success" aria-current="page" href="#">Fiverr Bussiness</a>
                    </li>
                    <li className="nav-item">
                      <Link href={"/explore"} className="nav-link fw-bold">Explore</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold text-white" href="#"><i className="fa fa-globe me-1"></i>English</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" style={{ color: "white" }} href="#">Become a Seller</a>
                    </li>
                    <li className="nav-item">
                      <Link href="/login" className="nav-link fw-bold text-white">Sign in</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn btn-outline-success fw-bold" href="/register">Join</Link>
                    </li>
                  </ul>
                </div>
                :
                <div className='menu'>
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <a className="nav-link active fw-bold text-success" aria-current="page" href="#">Fiverr Bussiness</a>
                    </li>
                    <li className="nav-item d-sm-inline">
                      <Link className="nav-link fw-bold" href="/explore">Explore</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" href="#"><i className="fa fa-globe me-1"></i>English</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" href="#">Become a Seller</a>
                    </li>
                    <li className="nav-item">
                      <Link href='/login' className="nav-link fw-bold">Sign in</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn btn-outline-success fw-bold" href="/register">Join</Link>
                    </li>
                  </ul>
                </div>
              }
            </div>
          </div>
        </nav>
        {header ? <Design /> : ''}
      </div>
    </div>
  )
}

export default HeaderPage