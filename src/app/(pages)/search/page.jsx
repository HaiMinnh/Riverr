import React from 'react'
import Image from 'next/image';
// import Link from 'next/link';
import { searchJobAction } from '@/app/action/service/productApi';

const Search = async (props) => {
  const keyword = props.searchParams.keyword || '';
  console.log(keyword)
  const data = await searchJobAction(keyword)
  console.log('keyword', data)
  return (
    <div className='container'>
      <h3>({data.length}) service available</h3>
      <div className="row">
        {data.map((item) => {
          return <div className="col-md-3 mt-4" key={item.id}>
            <div className="card">
              <div className="card-header p-0 m-0">
                <Image
                  src={item.congViec.hinhAnh}
                  width={400}
                  height={150}
                  alt='jobs'
                  className='w-100 object-fit-cover rounded-1'
                />
              </div>
              <div className="card-body">
                <div className="group-text d-flex">
                  <Image
                    src={item.congViec.hinhAnh}
                    width={30}
                    height={30}
                    alt='jobs'
                    className='rounded rounded-5'
                  />
                  <p>{item.congViec.tenCongViec.length > 15 ? item.congViec.tenCongViec.substring(0, 20) + '...' : item.tenCongViec}<br /> </p>
                </div>
                <p>{item.congViec.moTa.length > 15 ? item.congViec.moTa.substring(0, 60) + '...' : item.congViec.moTa}</p>
                <p><i className="fa fa-star text-warning"></i> {item.congViec.saoCongViec} <span>({item.congViec.danhGia})</span></p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <i className="fa fa-heart text-secondary"></i>
                <p>STARTING AT ${item.congViec.giaTien}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Search