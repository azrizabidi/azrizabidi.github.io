function About() {

    return (
      <>
      <section className="vh-75">
        <div className="container">
          <div className="title text-center">
            <h1>ABOUT. </h1>
            <p>MY DEBT WAKES ME</p>
          </div>
        </div>
      </section>
      <section className="mb-5">
          <div className="container">
            <div className="about">
              <p>With more than 8 years experience as Web Designer and Frontend Developer, I have led front end web development to create precise web designs, monitoring and managing the project to ensure that is easy to maintain, revise and expand, assisting with systems payment integrations for e-commerce website and providing technical support to teams within the organisation, and to external clients when required. Additionally, I have a track record of creating user friendly web designs for new user.</p>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="employer">
              <div className="employer__list">
                <div className="employer__list__title">
                  <div>
                    <p>Senior Programmer | 2018</p>
                    <h1>Synergy ESCO (M)</h1>
                  </div>
                  <button type="button" className="btn btn-circle" data-bs-target="#synergy" data-bs-toggle="collapse"> <i className="bi bi-arrow-right"></i> </button>
                </div>
                <div className="employer__list__body collapse" id="synergy">
                  <div className="row">
                    <div className="col-lg-3">
                      <h3>General Info</h3>
                      <p><strong>Duration:</strong> 4 Years 4 Months</p>
                      <p><strong>Position:</strong> Senior</p>
                      <p><strong>Start:</strong> Sept 2018</p>
                    </div>
                    <div className="col-lg-9">
                      <h3>About This Project.</h3>
                      <p>Liaising with back-end developers to ensure web and app logic is properly integrated. Ensuring website function and stability across devices i.e. desktop, mobile, tablet. Working with marketing and research teams to incorporate brand elements and relevant market research findings into website. Providing internal support and external customer service throughout the build and launch process of the website</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="employer__list">
                <div className="employer__list__title">
                  <div>
                    <p>Web Designer | 2015-2018</p>
                    <h1>Lava Systems / Tabir Omega</h1>
                  </div>
                  <button type="button" className="btn btn-circle" data-bs-target="#lavatabir" data-bs-toggle="collapse"> <i className="bi bi-arrow-right"></i> </button>
                </div>
                <div className="employer__list__body collapse" id="lavatabir">
                  <div className="row">
                    <div className="col-lg-3">
                      <h3>General Info</h3>
                      <p><strong>Duration:</strong> 3 Years & 5 Months</p>
                      <p><strong>Position:</strong> Web Designer</p>
                      <p><strong>Start:</strong> March 2015</p>
                    </div>
                    <div className="col-lg-9">
                      <h3>About This Project.</h3>
                      <p>Designing engaging and responsive landing pages. Working with marketing and research teams to incorporate brand elements and relevant market research findings into website. Providing internal support and external customer service throughout the build and launch process of the website</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="employer__list">
                <div className="employer__list__title">
                  <div>
                    <p>Internship - Web Designer | 2014-2015</p>
                    <h1>Lava Systems</h1>
                  </div>
                  <button type="button" className="btn btn-circle" data-bs-target="#lavaintern" data-bs-toggle="collapse"> <i className="bi bi-arrow-right"></i> </button>
                </div>
                <div className="employer__list__body collapse" id="lavaintern">
                  <div className="row">
                    <div className="col-lg-3">
                      <h3>General Info</h3>
                      <p><strong>Duration:</strong> 6 Months</p>
                      <p><strong>Position:</strong> Trainee</p>
                      <p><strong>Start:</strong> Feb 2015</p>
                    </div>
                    <div className="col-lg-9">
                      <h3>Job Scope.</h3>
                      <p>Designing engaging and responsive landing pages. Optimising sites for maximum speed and scalability. Employing industry and design best practice through website build process Conducting website testing. Liaising with back-end developers to ensure web and app logic is properly integrated.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section></>
    );
  }
  
  export default About;