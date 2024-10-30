"use client";
import { getJobDetailType } from '@/app/action/service/productApi';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductType = () => {
    const params = useParams();
    const id = params.typeid; // Access `id` from the URL path
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobDetail = async () => {
            if (id) {
                try {
                    const detail = await getJobDetailType(id);
                    setData(detail.content);
                } catch (err) {
                    setError("Failed to fetch job details");
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchJobDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container">
            <div className="row d-flex">
                {data.map((item, index) => {
                    return <div key={index} className='d-flex justify-content-between'>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <Image width={400} height={150} src={item.congViec.hinhAnh} className='w-100 object-fit-cover rounded-1' />
                                    <div className="card-body">
                                        <div className="group-text d-flex">
                                            <Image
                                                src={item.avatar}
                                                width={30}
                                                height={30}
                                                alt='jobs'
                                                className='rounded rounded-5'
                                            />
                                            <div className="info">
                                                <h6>{item.tenNguoiTao}</h6>
                                                <p>Lever {item.congViec.saoCongViec} Seller</p>
                                            </div>
                                        </div>
                                        <p>{item.congViec.moTa.length > 15 ? item.congViec.moTa.substring(0, 60) + '...' : item.congViec.moTa}</p>
                                        <p><i className="fa fa-star text-warning"></i> {item.congViec.saoCongViec} <span>({item.congViec.danhGia})</span></p>
                                        <div className="d-flex justify-content-between">
                                            <div className='text'>
                                                <i className="fa fa-heart text-secondary"></i>
                                                <p >STARTING AT ${item.congViec.giaTien}</p>
                                            </div>
                                            <div className="detail">
                                                <Link href={`/detaill/${item.id}`} className='btn btn-dark'>Detail</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default ProductType;


