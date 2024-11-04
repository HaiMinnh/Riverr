"use client"
import React, { useState, useEffect,} from 'react';
import { getDetailJob, getJobMenu } from '@/app/action/service/productApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Design = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  const handleLinkClick = async (id) => {
    const detail = await getDetailJob(id);
    router.push(`/group/${id}`, undefined, { shallow: true });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
        <div>
          <div className='design'>
            <nav className='dropdownmenu'>
              <ul>
                {data.map((item, num) => (
                  <li key={num}>
                    <Link
                      href={`/group/${item.id}`}
                      className='fw-bolder'
                      onClick={(e) => { e.preventDefault(); handleLinkClick(item.id); }}
                    >
                      {item.tenLoaiCongViec}
                    </Link>
                    <ul className='submenu'>
                      {item.dsNhomChiTietLoai.map((prod) => (
                        <div key={prod.id}>
                          <li key={prod.id}><a href="#" className='fw-bold block'>{prod.tenNhom}</a></li>
                          {prod.dsChiTietLoai.map((chil, index) => (
                            <div key={index}>
                              <li><Link href={`/productType/${chil.id}`}>{chil.tenChiTiet}</Link></li>
                            </div>
                          ))}
                        </div>
                      ))}
                    </ul>
                  </li>
                ))}
                {/* <li>
                  <a href="#" className='fw-bold'>Service</a>
                  <ul className='submenu'>
                    <li><a href="#">SVG Canvas</a></li>
                    <li><a href="#">CSS JS</a></li>
                    <li><a href="#">Word Press</a></li>
                  </ul>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
  );
};

export default Design;






