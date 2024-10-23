import Image from 'next/image'
import React from 'react'

const Intro = () => {
    return (
        <div class="container intro">
            <div class="text-center">
                <h1 className='text'>A whole world of freelance talent at your fingertips</h1>
            </div>
            <div class="row text-center">
                <div class="col-lg-3 col-md-6">
                    <div class="icon">
                        <Image
                            src={'/images/list.jpg'}
                            alt='logo'
                            width={70}
                            height={70}
                            className='img'
                        />
                    </div>
                    <h5 class="fw-bold">Over 700 categories</h5>
                    <p class="feature-text">Get results from skilled freelancers from all over the world, for every task, at any price point.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="icon">
                        <Image
                            src={'/images/colleague.png'}
                            alt='logo'
                            width={70}
                            height={70}
                            className='img'
                        />
                    </div>
                    <h5 class="fw-bold">Clear, transparent pricing</h5>
                    <p class="feature-text">Pay per project or by the hour (Pro). Payments only get released when you approve.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="icon">
                        <Image
                            src={'/images/thunder.jpg'}
                            alt='logo'
                            width={70}
                            height={70}
                            className='img'
                        />
                    </div>
                    <h5 class="fw-bold">Quality work done faster</h5>
                    <p class="feature-text">Filter to find the right freelancers quickly and get great work delivered in no time, every time.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="icon">
                        <Image
                            src={'/images/sp.png'}
                            alt='logo'
                            width={70}
                            height={70}
                            className='img'
                        />
                    </div>
                    <h5 class="fw-bold">24/7 award-winning support</h5>
                    <p class="feature-text">Chat with our team to get your questions answered or resolve any issues with your orders.</p>
                </div>
            </div>
        </div>
    )
}

export default Intro