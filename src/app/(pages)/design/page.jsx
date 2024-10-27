"use client"
import React, { useState, useEffect } from 'react';
import { getJobMenu } from '@/app/action/service/productApi';

const Design = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getJobMenu();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='design'>
      <nav className='dropdownmenu'>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <a href="#">{item.tenLoaiCongViec}</a>
              <ul className='submenu'>
                <li><a href="#">SVG Canvas</a></li>
                <li><a href="#">CSS JS</a></li>
                <li><a href="#">Word Press</a></li>
              </ul>
            </li>
          ))}
          <li>
              <a href="#">Service</a>
              <ul className='submenu'>
                <li><a href="#">SVG Canvas</a></li>
                <li><a href="#">CSS JS</a></li>
                <li><a href="#">Word Press</a></li>
              </ul>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Design;

