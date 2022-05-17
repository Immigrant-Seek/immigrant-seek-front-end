function EditProfile(){



    return (
        <div className="container">
  <div className="row justify-content-center">
    <div className="col-12 col-lg-10 col-xl-8 mx-auto">
      <h2 className="h3 mb-4 page-title">Settings</h2>
      <div className="my-4">
        <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
        </ul>
        <form>
          <div className="row mt-5 align-items-center">
            <div className="col-md-3 text-center mb-5">
              <div className="avatar avatar-xl">
                <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
            </div>
            <div className="col">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h4 className="mb-1">Josh Amaya</h4>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-7">
                <div className="email">joshamaya@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                id="firstname"
                className="form-control"
                placeholder="Josh"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                id="lastname"
                className="form-control"
                placeholder="Amaya"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="joshamaya@gmail.com"
            />
          </div>
          <hr className="my-4" />
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="inputPassword4">Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword5"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword5">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword5"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword6">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword6"
                />
              </div>
            </div>
            <div className="col-md-6">
              <p className="mb-2">Password requirements</p>
              <p className="small text-muted mb-2">
                To create a new password, you have to meet all of the following
                requirements:
              </p>
              <ul className="small text-muted pl-4 mb-0">
                <li>Minimum 8 character</li>
                <li>At least one special character</li>
                <li>At least one number</li>
                <li>Can’t be the same as a previous password</li>
              </ul>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Save Change
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    )
}

export default EditProfile;