import React, { useState } from 'react';

const Login = () => {
  return (
      <section id="hero" className="d-flex align-items-center justify-content-center">
          <div className="container" data-aos="fade-up">
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                  <div className="col-xl-6 col-lg-8">

                      <form className="text-white">
                          <h1>Barriga Cheia<span>.</span></h1>
                          <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                              <input type="email" className="form-control" id="exampleInputEmail1"
                                     aria-describedby="emailHelp"/>
                              <div id="emailHelp" className="form-text text-white">Nunca compartilharemos seu e-mail com mais ninguém.
                              </div>
                          </div>
                          <div className="mb-3">
                              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1"/>
                          </div>
                          <div className="mb-3 form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                          </div>
                          <button type="submit" className="btn btn-primary">Submit</button>
                      </form>


                  </div>
              </div>
          </div>
      </section>
  );
};

export default Login;
