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
    marginBottom: '20px',
}

const labelStyle = {
    textAlign: 'right',
    fontSize: '0.9rem',
    fontWeight: 'var(--fw-md)'
}

function LearnerAddAction(props) {
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className='btn btn-add' data-icon='add-icon'>Add</button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <div className='add-icon'></div>
                <Dialog.Title className="DialogTitle">Add profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Add a new Learner here. Click Add details when you're done.
                </Dialog.Description>
                    <form action={'/' + props.route + '/edit'} method='POST'>
                        <div style={{display: 'grid'}} className='form-body'>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="name-input">Name</label>
                                <input style={inputStyle} id='name-input' type="text" placeholder='John Doe' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="username-input">Username</label>
                                <input style={inputStyle} id='username-input' type="text" placeholder='@johndoe' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="batch-input">Batch</label>
                                <input style={inputStyle} id='batch-input' type="text" placeholder='May 2022' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="project-input">Project</label>
                                <input style={inputStyle} id='project-input' type="text" placeholder='ICTAK' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="course-input">Course Name</label>
                                <input style={inputStyle} id='course-input' type="text" placeholder='FSD' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="course-status-input">Course Status</label>
                                <input style={inputStyle} id='course-status-input' type="text" placeholder='Qualified' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="placement-status-input">Placement Status</label>
                                <input style={inputStyle} id='placement-status-input' type="text" placeholder='Placed' />
                            </div>
                            <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                                <Dialog.Close asChild>
                                    <button className="btn btn-cancel" data-icon='close' aria-label="Close">
                                        Cancel
                                    </button>
                                </Dialog.Close>
                                <button className='btn btn-save'>Add Details</button>
                            </div>
                        </div>
                    </form>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

function FacultyAddAction(props) {
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className='btn btn-add' data-icon='add-icon'>Add</button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <div className='add-icon'></div>
                <Dialog.Title className="DialogTitle">Add profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Add a new faculty profile here. Click Add details when you're done.
                </Dialog.Description>
                    <form action={'/' + props.route + '/edit'} method='POST'>
                        <div style={{display: 'grid'}} className='form-body'>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="name-input">Name</label>
                                <input style={inputStyle} id='name-input' type="text" placeholder='John Doe' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="username-input">Username</label>
                                <input style={inputStyle} id='username-input' type="text" placeholder='@johndoe' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="project-input">Project</label>
                                <input style={inputStyle} id='project-input' type="text" placeholder='ICTAK' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="course-input">Course Name</label>
                                <input style={inputStyle} id='course-input' type="text" placeholder='FSD' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="email-input">Email</label>
                                <input style={inputStyle} id='email-input' type="email" placeholder='johndoe@email.com' />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="password-input">Password</label>
                                <input style={inputStyle} id='password-input' type="password" placeholder='Password' />
                            </div>
                            <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                                <Dialog.Close asChild>
                                    <button className="btn btn-cancel" data-icon='close' aria-label="Close">
                                        Cancel
                                    </button>
                                </Dialog.Close>
                                <button className='btn btn-save'>Add Details</button>
                            </div>
                        </div>
                    </form>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

export {LearnerAddAction, FacultyAddAction}