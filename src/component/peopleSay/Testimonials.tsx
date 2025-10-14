import Link from 'next/link';
import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-dark mb-3">What Our Cooks Say</h2>
                    <p className="text-muted">
                        Discover what our community of food lovers has to say about their FlavorLand experience.
                    </p>
                </div>

                <div className="row g-4">
                    {/* Card 1 */}
                    <div className="col-md-6 col-lg-4 group overflow-hidden">
                        <div className="card border-0 shadow-sm text-center p-4 bg-white transition-transform duration-300 card-img-top group-hover:scale-110"  >
                            <div className="mb-3">
                                <i className="fas fa-quote-left fa-2x text-warning"></i>
                            </div>
                            <p className="text-muted">
                                "FlavorLand transformed my cooking! The recipes are easy to follow and absolutely delicious."
                            </p>
                            <div className="mt-3">
                                <div className="bg-secondary text-white rounded-circle mx-auto d-flex align-items-center justify-content-center"
                                    style={{ width: '50px', height: '50px' }}>
                                    SJ
                                </div>
                                <h6 className="mt-2 mb-0 fw-bold">Sarah Johnson</h6>
                                <small className="text-muted">Home Cook</small>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-6 col-lg-4 group overflow-hidden">
                        <div className="card border-0 shadow-sm text-center p-4 bg-white transition-transform duration-300 card-img-top group-hover:scale-110">
                            <div className="mb-3">
                                <i className="fas fa-quote-left fa-2x text-warning"></i>
                            </div>
                            <p className="text-muted">
                                "As a busy mom, the quick recipes save me so much time. My family loves every dish!"
                            </p>
                            <div className="mt-3">
                                <div className="bg-secondary text-white rounded-circle mx-auto d-flex align-items-center justify-content-center"
                                    style={{ width: '50px', height: '50px' }}>
                                    MC
                                </div>
                                <h6 className="mt-2 mb-0 fw-bold">Mike Chen</h6>
                                <small className="text-muted">Food Blogger</small>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-6 col-lg-4 group overflow-hidden">
                        <div className="card border-0 shadow-sm text-center p-4 bg-white transition-transform duration-300 card-img-top group-hover:scale-110">
                            <div className="mb-3">
                                <i className="fas fa-quote-left fa-2x text-warning"></i>
                            </div>
                            <p className="text-muted">
                                "The variety of recipes is incredible! From quick meals to party dishes, FlavorLand has it all."
                            </p>
                            <div className="mt-3">
                                <div className="bg-secondary text-white rounded-circle mx-auto d-flex align-items-center justify-content-center"
                                    style={{ width: '50px', height: '50px' }}>
                                    AR
                                </div>
                                <h6 className="mt-2 mb-0 fw-bold">Amanda Rodriguez</h6>
                                <small className="text-muted">Professional Chef</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <Link href="/products" className="btn btn-lg px-5 text-white" style={{ backgroundColor: '#5417d7' }}>
                        Join Our Community
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
