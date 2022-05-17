function ClientProfile(){



    return (
        <div className="container db-social">
  <div className="jumbotron jumbotron-fluid" />
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-xl-11">
        <div className="widget head-profile has-shadow">
          <div className="widget-body pb-0">
            <div className="row d-flex align-items-center">
              <div className="col-xl-4 col-md-4 d-flex justify-content-lg-start justify-content-md-start justify-content-center">
                
              </div>
              <div className="col-xl-4 col-md-4 d-flex justify-content-center">
                <div className="image-default">
                  <img
                    className="rounded-circle"
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt="..."
                  />
                </div>
                <div className="infos" role="form">
                  <h2>Josh Amaya</h2>
                  <div className="phone-number">(347)457-3680</div>
                  <div className="email">joshamaya@gmail.com</div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 d-flex justify-content-lg-end justify-content-md-end justify-content-center">
                <div className="edit-profile">
                  <a className="btn btn-shadow" href="EditProfile">
                    <i className="la la-user-plus" />
                    Edit Profile
                  </a>
                  <div className="actions dark">
                    <div className="dropdown">
                      <button
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="dropdown-toggle"
                      >
                        <i className="la la-ellipsis-h" />
                      </button>
                      <div
                        className="dropdown-menu"
                        x-placement="bottom-start"
                        style={{
                          display: "none",
                          position: "absolute",
                          willChange: "transform",
                          top: 0,
                          left: 0,
                          transform: "translate3d(0px, 35px, 0px)"
                        }}
                      >
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default ClientProfile;