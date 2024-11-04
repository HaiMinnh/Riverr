"use client"
import React, { useState, useEffect } from 'react';
import { getDetailJob } from '@/app/action/service/productApi';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const data = [
    { title: "Minimalist Logo Design", img: "/images/img6.png" },
    { title: "Architecture & Interior Design", img: "/images/img2.png" },
    { title: "Image Editing", img: "/images/img3.png" },
    { title: "NFT Art", img: "/images/img4.png" },
    { title: "T-Shirts & Merchandise", img: "/images/img5.png" },
];

const data2 = [
    { title: "The ultimate guide to choosing the right colors for your brand", img: "/images/design1.png" },
    { title: "How to illustrate a children's book: 9 steps to illustrate your book", img: "/images/design2.png" },
    { title: "How To Design A Car Wrap", img: "/images/design4.png" }
];

const Group = () => {
    const params = useParams();
    const id = params.id; // Access `id` from the URL path

    const [jobDetail, setJobDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobDetail = async () => {
            if (id) {
                try {
                    const detail = await getDetailJob(id);
                    setJobDetail(detail);
                    console.log(data, "Fetched job details");
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
        <div className='container group text-center'>
            <div className='w-100'>
                <Image width={1300} height={500} alt='background' src={"/images/background.jpg"} className='rounded-3' />
                <div className='text-center text-white'>
                    <h3>Back Ground & Design</h3>
                    <p>Designs to make you stand out.</p>
                    <button className='btn'><i className="fa fa-play-circle"></i> How Fiverr Works</button>
                </div>
            </div>
            <h1>Most popular in Graphics & Design</h1>
            <div className='list'>
                {data.map((item, index) => (
                    <div key={index} className="content">
                        <Image width={40} height={40} alt='' src={item.img} className='img' />
                        <span className='text'>
                            {item.title} <i className="fa fa-arrow-right"></i>
                        </span>
                    </div>
                ))}
            </div>
            {Array.isArray(jobDetail) && jobDetail.map((item, index) => (
                <div key={index} className='text-job'>
                    <h3>Explore {item.tenLoaiCongViec}</h3>
                    <div className="row">
                        {item.dsNhomChiTietLoai.map((type, idx) => (
                            <div key={idx} className="col-3">
                                <Image width={350} height={200} alt='icon' src={type.hinhAnh || "/images/default.png"} className='img' />
                                {type.dsChiTietLoai.map((name, num) => (
                                    <div>
                                    <Link href={`/productType/${name.id}`} key={num} className='text-decoration-none d-inline-block fw-bold text-black'>{name.tenChiTiet}</Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <h3>Guides related to Graphics & Design</h3>
            <div className="row text-center">
                {data2.map((item, index) => (
                    <div key={index} className='col-4'>
                        <Image width={400} height={250} alt='icon' src={item.img} className='img'/>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Group;


