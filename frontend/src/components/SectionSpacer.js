const SectionSpacer = () => {
  return (
    <section className="container-fluid bg-light p-4 invisible">
      <h3 id="info-bar" className="text-center mb-4">
        Welcome!
      </h3>
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border shadow-lg"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-btn"
              id="search-input"
            />
            <button
              className="btn btn-success border text-light fw-bold"
              type="button"
              id="search-btn"
            >
              <i className="bi bi-search"></i>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSpacer;
