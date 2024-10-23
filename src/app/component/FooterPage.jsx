import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterPage = () => {
  return (
    <div className='container footer'>
      <div className='menu row'>
        <div className='col-2'>
          <h4>Categories</h4>
          <Link href="/not-found">Graphics &amp; Design</Link>
          <Link href="/not-found">Digital Marketing</Link>
          <Link href="/not-found">Writing &amp; Translation</Link>
          <Link href="/not-found">Video &amp; Animation</Link>
          <Link href="/not-found">Music &amp; Audio</Link>
          <Link href="/not-found">Programming &amp; Tech</Link>
          <Link href="/not-found">Data</Link>
          <Link href="/not-found">Business</Link>
          <Link href="/not-found">Lifestyle</Link>
          <Link href="/not-found">Sitemap</Link>
        </div>
        <div className='col-2'>
          <h4>About</h4>
          <Link href="/not-found">Careers</Link>
          <Link href="/not-found">Press &amp; News</Link>
          <Link href="/not-found">Partnerships</Link>
          <Link href="/not-found">Privacy Policy</Link>
          <Link href="/not-found">Terms of Service</Link>
          <Link href="/not-found">Intellectual Property Claims</Link>
          <Link href="/not-found">Investor Relations</Link>
        </div>
        <div className='col-2'>
          <h4>Support</h4>
          <Link href="/not-found">Help &amp; Support</Link>
          <Link href="/not-found">Trust &amp; Safety</Link>
          <Link href="/not-found">Selling on Fiverr</Link>
          <Link href="/not-found">Buying on Fiverr</Link>
        </div>
        <div className='col-2'>
          <h4>Community</h4>
          <Link href="/not-found">Events</Link>
          <Link href="/not-found">Blog</Link>
          <Link href="/not-found">Forum</Link>
          <Link href="/not-found">Community Standards</Link>
          <Link href="/not-found">Podcast</Link>
          <Link href="/not-found">Affiliates</Link>
          <Link href="/not-found">Invite a Friend</Link>
          <Link href="/not-found">Become a Seller</Link>
        </div>
        <div className='col-2'>
          <h4>More From Fiverr</h4>
          <Link href="/not-found">Fiverr Business</Link>
          <Link href="/not-found">Fiverr Pro</Link>
          <Link href="/not-found">Fiverr Studios</Link>
          <Link href="/not-found">Fiverr Logo Maker</Link>
          <Link href="/not-found">Fiverr Guides</Link>
          <Link href="/not-found">Get Inspired</Link>
          <Link href="/not-found">Fiverr Select</Link>
          <Link href="/not-found">ClearVoice</Link>
          <Link href="/not-found">Content Marketing</Link>
          <Link href="/not-found">Fiverr Workspace</Link>
          <Link href="/not-found">Invoice Software</Link>
          <Link href="/not-found">Learn</Link>
          <Link href="/not-found">Online Courses</Link>
          <Link href="/not-found">Working Not Working</Link>
        </div>
        <hr />
        <div className="bottom-footer d-flex align-items-center">
          <div className='bot_right w-50'>
            <Image
              src={'/images/Logo2.png'}
              alt='logo'
              width={100}
              height={60}
              className='rounded rounded-5'
            />
            <span>© Fiverr International Ltd. 2022</span>
          </div>
          <div className='bot_left w-50 text-right'>
            <span className='menu_fa'>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fab fa-pinterest"></i>
              <i class="fab fa-instagram"></i>
            </span>
            <span className='text'><i class="fa fa-globe"></i>English</span>
            <span className='text'>US$ USD</span>
            <i class="fa fa-male"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterPage