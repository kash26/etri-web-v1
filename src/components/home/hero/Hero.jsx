import React from 'react'
import Title from '../../common/title/Title';
import "./hero.css";

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sequi aliquid nesciunt maiores dolor a quaerat reprehenderit praesentium tempora. Molestiae inventore iusto quidem sequi aperiam consectetur dolorum iure excepturi quam similique possimus earum nisi perspiciatis maxime, laboriosam libero voluptas placeat culpa enim quasi eligendi rem? Esse ex ut dolorem laudantium.</p>
                        <div className="button">
                            <button className="primary-btn">
                                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                            <button className="">
                                VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin"></div>
        </>
    )
}

export default Hero