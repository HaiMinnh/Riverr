"use client"
import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { getAllJobApi } from '@/app/action/service/productApi';
import Image from 'next/image';

const Explore = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllJobApi();
      setData(result);
    };

    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrent(page);
  };

  const currentData = data.slice((current - 1) * pageSize, current * pageSize);

  return (
    <div className='container jobs px-0'>
      <h3>({data.length}) service available</h3>
      <div className="row">
        {currentData.map((item) => (
          <div className="col-md-3 mt-4" key={item.id}>
            <div className="card">
              <div className="card-header p-0 m-0">
                <Image
                  src={item.hinhAnh}
                  width={400}
                  height={150}
                  alt='jobs'
                  className='w-100 object-fit-cover rounded-1'
                />
              </div>
              <div className="card-body">
                <div className="group-text d-flex">
                  <Image
                    src={item.hinhAnh}
                    width={30}
                    height={30}
                    alt='jobs'
                    className='rounded rounded-5'
                  />
                  <p>{item.tenCongViec.length > 15 ? item.tenCongViec.substring(0, 20) + '...' : item.tenCongViec}<br /> </p>
                </div>
                <p>{item.moTa.length > 15 ? item.moTa.substring(0, 60) + '...' : item.moTa}</p>
                <p><i className="fa fa-star text-warning"></i> {item.saoCongViec} <span>({item.danhGia})</span></p>
                <div className="group-footer d-flex justify-content-between">
                  <div className='text'>
                    <i className="fa fa-heart text-secondary"></i>
                    <p >STARTING AT ${item.giaTien}</p>
                  </div>
                  <div className="detail">
                    <button className='btn btn-dark'>Detail</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          current={current}
          pageSize={pageSize}
          total={data.length}
          onChange={handlePageChange}
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default Explore;