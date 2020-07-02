import React from 'react';

import Layout from '../../../Layout/Manage';

const Edit = () => {
  return(
    <Layout>
      <h1>Edit</h1>
      <div>
        <form>
          <div className="form-group">
            <label>Label</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>URL</label>
            <input type="password" className="form-control"/>
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input type="checkbox" name="isSocial"/>
              <span className="form-check-sign"></span>
              Is Social
            </label>
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  )
};

export default Edit;