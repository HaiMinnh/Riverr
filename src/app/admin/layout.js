import React from 'react'

const AdminTemplate = ({ children }) => {
  return (
    <div className=' d-flex'>
      {/* <div style={{ width: '25%', minHeight: '100vh', color: '#000'}}>
        <h4>Dash Board</h4>
        <div className="d-flex align-items-start">
          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">User Management</button>
            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Job Management</button>
            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Job Type Management</button>
            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Service Management</button>
          </div>
        </div>
      </div> */}
      <div style={{ width: '100%', minHeight: '100vh', color: '#000'}}>
        {children}
      </div>
    </div>
  )
}

export default AdminTemplate