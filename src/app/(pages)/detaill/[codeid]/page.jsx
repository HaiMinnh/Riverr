"use client"
import { getBigDataApi } from '@/app/action/service/functionApi';
import { onlyGetDetailJob } from '@/app/action/service/productApi';
import Image from 'next/image'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const plans = {
  basic: {
    name: "Basic",
    price: "$500",
    description: "Create a basic web application for your business.",
    features: [
      "15 Days Delivery & 1 Revision",
      "Basic Design Customization",
      "Content Upload",
      "Mobile Responsive",
      "1 Page"
    ]
  },
  standard: {
    name: "Standard",
    price: "$1,000",
    description: "Create a simple web application for your business.",
    features: [
      "30 Days Delivery & 1 Revision",
      "Design Customization",
      "Content Upload",
      "Responsive Design",
      "Include Source Code",
      "1 Page"
    ]
  },
  premium: {
    name: "Premium",
    price: "$1,500",
    description: "Create a fully-featured web application for your business.",
    features: [
      "45 Days Delivery & 2 Revisions",
      "Advanced Design Customization",
      "Content Upload",
      "Fully Responsive",
      "Include Source Code",
      "Up to 5 Pages"
    ]
  }
};


const Detail = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const params = useParams();
  const codeId = params.codeid;
  const [detail, setDetail] = useState({})

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState([{}])
  const url = `https://fiverrnew.cybersoft.edu.vn/api/binh-luan/lay-binh-luan-theo-cong-viec`
  useEffect(() => {
    const getDetail = async () => {
      if (codeId) {
        try {
          const detail = await onlyGetDetailJob(codeId);
          setDetail(detail.content);
          const getComment = await getBigDataApi(url, codeId)
          setComment(getComment.content)
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

    getDetail();
  }, [codeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };
  return (
    <div className='container detail'>
      <div className="row">
        {detail.map((item, index) => {
          return <div className="col-md-8" key={index}>
            <span>{item.tenLoaiCongViec}</span> <i class="fa fa-chevron-right"></i> <span>{item.tenNhomChiTietLoai}</span> <i class="fa fa-chevron-right"></i> <span>{item.tenChiTietLoai}</span>
            <h4>{item.congViec.tenCongViec}</h4>
            <div className="info d-flex">
              <Image width={40} height={40} alt='avatar' src={item.avatar} className='rounded rounded-5' />
              <p>{item.tenNguoiTao} <span className='text-warning'>Top Rated Seller | <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> {item.congViec.saoCongViec} </span> ({item.congViec.danhGia}) | 4 Orders in Quoue</p>
            </div>
            <hr />
            <p><span className='fw-bold'>mô tả in đậm</span> mô tả ko in đậm</p>
            <div className="img">
              <Image width={800} height={400} alt='img-job' src={item.congViec.hinhAnh} className='images'/>
            </div>
            <div className='text'>
              <h3>About This Gig</h3>
              <p>{item.congViec.moTa}</p>
            </div>
            <hr />
            <span>About The Seller</span>
            <div className='introduce'>
              <Image width={65} height={65} src={item.avatar} className='rounded rounded-5' />
              <p>{item.tenNguoiTao}<br /> <span>{item.tenLoaiCongViec}</span></p>
              <p ><span className='text-warning'><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></span> <i class="fa fa-star"></i> <i class="fa fa-star"></i> ({item.congViec.danhGia})</p>
              <button className='btn btn-outline-success'>Contact Me</button>
              <p>FAQ</p>
              {/* <div className='content'>
                <div className='item'>
                  <p className="d-inline-flex gap-1">
                    <p className="fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      There are many passages but the majority?
                    </p>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <p className="d-inline-flex gap-1">
                    <p className="fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                      There are many passages but the majority?
                    </p>
                  </p>
                  <div className="collapse" id="collapseExample1">
                    <div className="card card-body">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <p className="d-inline-flex gap-1">
                    <p className="fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                      There are many passages but the majority?
                    </p>
                  </p>
                  <div className="collapse" id="collapseExample2">
                    <div className="card card-body">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <p className="d-inline-flex gap-1">
                    <p className="fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                      There are many passages but the majority?
                    </p>
                  </p>
                  <div className="collapse" id="collapseExample3">
                    <div className="card card-body">
                      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <p>422 Reviews <span className='text-warning'><i className="fa fa-star"></i> <i class="fa fa-star"></i> <i className="fa fa-star"></i></span> <i className="fa fa-star"></i> <i className="fa fa-star"></i> 3</p>
                  <div className='star'>
                    <div className="d-flex align-content-center">
                      <span>5 Stars</span>
                      <div className="progress w-75" role="progressbar" aria-label="Basic example" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar" style={{ width: '100%' }} />
                      </div>
                      (43)
                    </div>
                    <div className="d-flex align-content-center">
                      <span>4 Stars</span>
                      <div className="progress w-75" role="progressbar" aria-label="Basic example" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar" style={{ width: '75%' }} />
                      </div>
                      (0)
                    </div>
                    <div className="d-flex align-content-center">
                      <span>3 Stars</span>
                      <div className="progress w-75" role="progressbar" aria-label="Basic example" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar" style={{ width: '50%' }} />
                      </div>
                      (0)
                    </div>
                    <div className="d-flex align-content-center">
                      <span>2 Stars</span>
                      <div className="progress w-75" role="progressbar" aria-label="Basic example" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar" style={{ width: '25%' }} />
                      </div>
                      (1)
                    </div>
                    <div className="d-flex align-content-center">
                      <span>1 Stars</span>
                      <div className="progress w-75" role="progressbar" aria-label="Basic example" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar" style={{ width: '0%' }} />
                      </div>
                      (0)
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <span>Sort By</span>
                  <div className="dropdown d-inline ms-2">
                    <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Most Recent
                    </span>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Most Recent</a></li>
                      <li><a class="dropdown-item" href="#">Most Relevant</a></li>
                    </ul>
                  </div>
                  <p>Rating Breakdown</p>
                  <p>Seller communication level <i className="fa fa-star text-warning"></i> 2</p>
                  <p>Recommend to a friend <i className="fa fa-star text-warning"></i> 2</p>
                  <p>Service as described <i className="fa fa-star text-warning"></i> 2</p>
                </div>
              </div>
              <hr />
              <div className='comment row'>
                {comment.map((comment, idx) => {
                  return <div key={idx}>
                    <div className="col-1">
                      <Image width={65} height={65} src={comment.avatar} className='rounded rounded-5' />
                    </div>
                    <div className='col-11'>
                      <p>{comment.tenNguoiBinhLuan} <i className="fa fa-star text-warning"></i> {comment.saoBinhLuan}</p>
                      <Image width={20} height={20} src={"/images/country.png"}></Image> <span>Switzerland</span>
                      <p>{comment.noiDung}</p>
                      <p>Helpful? <i className="fa fa-thumbs-up"></i> Yes <i class="fa fa-thumbs-down"></i> No</p>
                // </div>
                  </div>
                })}
                <hr />
                <h5>Leave some comments</h5>
                <p><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> Rating</p>
                <textarea name="message" cols="30" rows="10" placeholder="Enter your message..." maxlength="200" required className='bg-black'></textarea>
              </div> */}
              <button className='btn btn-success mt-2'>Comment</button>
            </div>
          </div>
        })}

        <div className="col-md-4">
          <div className='cart'>
            <div className="header">
              <span onClick={() => handlePlanChange('basic')} className={selectedPlan === 'basic' ? 'active border-bottom border-2 border-success text-success' : ''}>Basic</span>
              <span onClick={() => handlePlanChange('standard')} className={selectedPlan === 'standard' ? 'active border-bottom border-2 border-success text-success' : ''}>Standard</span>
              <span onClick={() => handlePlanChange('premium')} className={selectedPlan === 'premium' ? 'active border-bottom border-2 border-success text-success' : ''}>Premium</span>
            </div>
            <div className="content">
              <div className="plan-name">{plans[selectedPlan].name}</div>
              <div className="price">{plans[selectedPlan].price}</div>
              <div className="description">{plans[selectedPlan].description}</div>
              <ul className="feature-list">
                {plans[selectedPlan].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className='text-center'>
                <button className="cta-button btn">Continue ({plans[selectedPlan].price})</button>
                <a href="#" className="compare-link">Compare Packages</a>
              </div>
            </div>
          </div>
          <div className="special-requirements">
            <p>Do you have any special requirements?</p>
            <button className="quote-button">Get a Quote</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
