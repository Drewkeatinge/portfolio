function Personal_projects() {
  return (
    <>
      <div className="homepage">
        <div className="project-container">
          <h1 className="title">Personal Projects</h1>
          <p>These are some of the projects that I have been working on in my spare time.
          </p>
          {/* Project Entry Start */}
          <div className="project-entry">
            <h3>Project - Nexus</h3>
            <div className="project-frame">
              <div className="project-info">
                <p>
                  The purpose of this project is to assist with getting products we sell loaded on to our website 
                  more efficiently. this app is connected to an API provided by Narta Australia which is an appliance 
                  buying co-op that we are part of. This app takes a .CSV file of product barcodes and returns a new .CSV 
                  of product information formatted in a way that can be used by our website.
                </p>
                <div className="project-tech">
                  <img
                    src="/images/React-icon.png"
                    alt="react icon"
                    className="project-tech-icon"
                  />
                  <img
                    src="/images/HTML icon.png"
                    alt="react icon"
                    className="project-tech-icon"
                  />
                  <img
                    src="/images/CSS icon.png"
                    alt="react icon"
                    className="project-tech-icon"
                  />
                  <img
                    src="/images/typescript icon.png"
                    alt="react icon"
                    className="project-tech-icon"
                  />
                  <img
                    src="/images/node icon.png"
                    alt="react icon"
                    className="project-tech-icon"
                  />
                  <img
                    src="/images/knex icon.png"
                    alt="react icon"
                    className="project-tech-icon"
                  />
                </div>
              </div>
              <div className="project-image-box">
                <img
                  src="/images/nexus screenshot.png"
                  alt="react icon"
                  className="project-image"
                />
              </div>
            </div>
          </div>
          {/* Project Entry Finish */}
          {/* Project Entry Start */}
          <div className="project-entry">
            <h3>Project - Price Matching</h3>
            <div className="project-frame">
              <div className="project-info">
                <p>
                  This is a simple script I wrote playing around with Python. It is a basic web scraper that 
                  I use to help me stay competitive with pricing in the categories that I manage. It doesn&apos;t
                  have an interface or anything yet and I also want to take this further and explore libraries 
                  like selenium. This app takes a .CSV file of product barcodes and returns a new .CSV with the 
                  product pricing.
                </p>
                <div className="project-tech">
                  <img
                    src="/images/python icon.png"
                    alt="react icon"
                    className="project-tech-icon"
                  />
                </div>
              </div>
              <div className="project-image-box">
                <img
                  src="/images/Price match screenshot.png"
                  alt="react icon"
                  className="project-image"
                />
              </div>
            </div>
          </div>
          {/* Project Entry Finish */}
        </div>
      </div>
    </>
  )
}

export default Personal_projects
