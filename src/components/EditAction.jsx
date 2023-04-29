import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';

const editInputStyle = {
    display: 'grid',
    gap: '0.8rem',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    marginBottom: '0.3rem'
}

const inputStyle = {
    padding: '0.5rem 0.8rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--clr-border)',
    width: '300px',
}

const labelStyle = {
    textAlign: 'right',
    fontSize: '0.9rem',
    fontWeight: 'var(--fw-md)'
}

function LearnerEditAction(props) {
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className='btn btn-edit' data-icon='edit-icon'></button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <div className='warning-icon'></div>
                <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Make changes to the profile here. Click save when you're done.
                </Dialog.Description>
                    <form>
                        <div style={{display: 'grid', gap:'1.25rem'}} className='form-body'>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="name-input">Name</label>
                                <input style={inputStyle} id='name-input' type="text" defaultValue={props.data.name} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="username-input">Username</label>
                                <input style={inputStyle} id='username-input' type="text" defaultValue={'@' + props.data.username} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="batch-input">Batch</label>
                                <input style={inputStyle} id='batch-input' type="text" defaultValue={props.data.batch} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="project-input">Project</label>
                                <input style={inputStyle} id='project-input' type="text" defaultValue={props.data.project} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="course-input">Course Name</label>
                                <input style={inputStyle} id='course-input' type="text" defaultValue={props.data.course} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="course-status-input">Course Status</label>
                                <input style={inputStyle} id='course-status-input' type="text" defaultValue={props.data.status} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="placement-status-input">Placement Status</label>
                                <input style={inputStyle} id='placement-status-input' type="text" defaultValue={props.data.placement} />
                            </div>
                            <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                                <Dialog.Close asChild>
                                    <button className="btn btn-cancel" data-icon='close' aria-label="Close">
                                        Cancel
                                    </button>
                                </Dialog.Close>
                                <button className='btn btn-save'>Save Changes</button>
                            </div>
                        </div>
                    </form>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

function FacultyEditAction(props) {
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className='btn btn-edit' data-icon='edit-icon'></button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <div className='warning-icon'></div>
                <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Make changes to the profile here. Click save when you're done.
                </Dialog.Description>
                    <form action={'/' + props.route + '/edit'} method='POST'>
                        <div style={{display: 'grid', gap:'1.25rem'}} className='form-body'>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="name-input">Name</label>
                                <input style={inputStyle} id='name-input' type="text" defaultValue={props.data.name} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="username-input">Username</label>
                                <input style={inputStyle} id='username-input' type="text" defaultValue={'@' + props.data.username} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="email-input">Email</label>
                                <input style={inputStyle} id='email-input' type="email" defaultValue={props.data.email} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="password-input">Password</label>
                                <input style={inputStyle} id='password-input' type="password" defaultValue={props.data.password} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="course-input">Course Name</label>
                                <input style={inputStyle} id='course-input' type="text" defaultValue={props.data.course} />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="project-input">Project</label>
                                <input style={inputStyle} id='project-input' type="text" defaultValue={props.data.project} />
                            </div>
                            <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                                <Dialog.Close asChild>
                                    <button className="btn btn-cancel" data-icon='close' aria-label="Close">
                                        Cancel
                                    </button>
                                </Dialog.Close>
                                <button className='btn btn-save'>Save Changes</button>
                            </div>
                        </div>
                    </form>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

function TrainingHeadEditAction(props) {
    return (
      <Dialog.Root>
          <Dialog.Trigger asChild>
              <button className='btn btn-edit' data-icon='edit-icon'></button>
          </Dialog.Trigger>
          <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                  <div className='warning-icon'></div>
                  <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                  <Dialog.Description className="DialogDescription">
                      Make changes to the profile here. Click save when you're done.
                  </Dialog.Description>
                      <form action={'/' + props.route + '/edit'} method='POST'>
                          <div style={{display: 'grid', gap:'1.25rem'}} className='form-body'>
                              <div style={editInputStyle}>
                                  <label style={labelStyle} htmlFor="course-status-input">Course Status</label>
                                  <input style={inputStyle} id='course-status-input' type="text" defaultValue={props.data.status} />
                              </div>
                              <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                                  <Dialog.Close asChild>
                                      <button className="btn btn-cancel" data-icon='close' aria-label="Close">
                                          Cancel
                                      </button>
                                  </Dialog.Close>
                                  <button className='btn btn-save'>Save Changes</button>
                              </div>
                          </div>
                      </form>
              </Dialog.Content>
          </Dialog.Portal>
      </Dialog.Root>
    )
  }

function PlacementOfficerEditAction(props) {
    return (
      <Dialog.Root>
          <Dialog.Trigger asChild>
              <button className='btn btn-edit' data-icon='edit-icon'></button>
          </Dialog.Trigger>
          <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                  <div className='warning-icon'></div>
                  <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                  <Dialog.Description className="DialogDescription">
                      Make changes to the profile here. Click save when you're done.
                  </Dialog.Description>
                      <form action={'/' + props.route + '/edit'} method='POST'>
                          <div style={{display: 'grid', gap:'1.25rem'}} className='form-body'>
                              <div style={editInputStyle}>
                                  <label style={labelStyle} htmlFor="placement-status-input">Placement Status</label>
                                  <input style={inputStyle} id='placement-status-input' type="text" defaultValue={props.data.placement} />
                              </div>
                              <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                                  <Dialog.Close asChild>
                                      <button className="btn btn-cancel" data-icon='close' aria-label="Close">
                                          Cancel
                                      </button>
                                  </Dialog.Close>
                                  <button className='btn btn-save'>Save Changes</button>
                              </div>
                          </div>
                      </form>
              </Dialog.Content>
          </Dialog.Portal>
      </Dialog.Root>
    )
  }

export {
        LearnerEditAction, 
        FacultyEditAction, 
        TrainingHeadEditAction, 
        PlacementOfficerEditAction
       }