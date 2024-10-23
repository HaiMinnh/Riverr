"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Image from "next/image";

const data = [
  { id: 1, img: '/images/parner1.png', video: "/images/video1.mp4", name: "Rooted", nickName: "Kay Kim, Co-Founder", logo: '/images/rooted.png', description: "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working." },
  { id: 2, img: '/images/parner2.png', video: "/images/video3.mp4", name: "Naadam", nickName: "Caitlin Tormey, Chief Commercial Officer", logo: '/images/naadam.png', description: "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day." },
  { id: 3, img: '/images/parner3.png', video: "/images/video2.mp4", name: "Lavender", nickName: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder", logo: '/images/lavender.png', description: "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world." },
  { id: 4, img: '/images/parner4.png', video: "/images/video4.mp4", name: "Haerfest", nickName: "Tim and Dan Joo, Co-Founders", logo: "/images/haerfest.png", description: "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does." }
];

const Video = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [muted, setMuted] = useState(true);
  const [name, setName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (content, name) => {
    setModalContent(content);
    setName(name);
    setShow(true);
    setMuted(false); // Bật tiếng video
  };

  const clone = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container video px-0">
      <h3 className="text-center">What they're saying about Fiverr</h3>
      <Slider {...clone}>
        {data.map((item) => (
          <div key={item.id} className="row d-flex">
            <div className="col-6">
              <Image
                src={item.img}
                width={600}
                height={320}
                alt="parner"
                className="img"
                data-bs-toggle="modal"
                onClick={() => handleShow(item.video, item.name)}
              />
              <Image
                src="/images/play.png"
                width={70}
                height={50}
                alt="parner"
                className="play"
                data-bs-toggle="modal"
                onClick={() => handleShow(item.video, item.name)}
              />
            </div>
            <div className="col-6">
              <span className="nickName">{item.nickName} | </span>
              <Image
                src={item.logo}
                width={100}
                height={45}
                alt="parner"
                className="logoBrand d-inline-block"
              />
              <p className="des">"{item.description}"</p>
            </div>
          </div>
        ))}
      </Slider>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton className="bg-black text-white">
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black">
          <video
            src={modalContent}
            width={465}
            height={400}
            controls
            autoPlay
            loop
            muted={muted}
            preload="auto"
          ></video>
        </Modal.Body>
        <Modal.Footer className="bg-black">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Video;