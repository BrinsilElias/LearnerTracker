import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

function LearnerAddAction() {
  const [input, setInput] = useState({})
  const navigate = useNavigate()
  const [userToken, setToken] = useState(sessionStorage.getItem("userToken"))
  
  const serverApi = "http://localhost:8080/api/learner/add"
  
  const changeMyData = (event) => {
    setInput({
        ...input, "role": 'learner', [event.target.name]:event.target.value,
        "token": userToken
    })
  }

  const handleSubmit = (event)=>{
    axios.post(serverApi, input)
    .then(response =>{
        navigate('/dashboard')
    })
  }
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className='btn btn-add' data-icon="add-icon">Add Learner</button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <div className='add-icon'></div>
                <Dialog.Title className="DialogTitle">Add profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Add a new Learner here. Click Add details when you're done.
                </Dialog.Description>
                    <form onSubmit={handleSubmit}>
                        <div style={{display: 'grid', gap:'1.25rem'}} className='form-body'>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="name-input">Name</label>
                                <input style={inputStyle} name='name' id='name-input' type="text" placeholder='John Doe' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="username-input">Username</label>
                                <input style={inputStyle} name='username' id='username-input' type="text" placeholder='@johndoe' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="batch-input">Batch</label>
                                <input style={inputStyle} name='batch' id='batch-input' type="text" placeholder='May 2022' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="project-input">Project</label>
                                <input style={inputStyle} name='project' id='project-input' type="text" placeholder='ICTAK' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="course-input">Course Name</label>
                                <input style={inputStyle} name='course' id='course-input' type="text" placeholder='FSD' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="course-status-input">Course Status</label>
                                <select style={inputStyle} name='status' id='course-status-input' onChange={changeMyData}>
                                    <option value='no status'>Select</option>
                                    <option value='qualified'>Qualified</option>
                                    <option value='not qualified'>Not Qualified</option>
                                </select>
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="placement-status-input">Placement Status</label>
                                <select style={inputStyle} name='placement' id='placement-status-input' onChange={changeMyData}>
                                    <option value='no status'>Select</option>
                                    <option value='placed'>Placed</option>
                                    <option value='job seeking'>Job Seeking</option>
                                    <option value='not interested'>Not Interested</option>
                                </select>
                            </div>
                            <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                                <Dialog.Close asChild>
                                    <button className="btn btn-cancel" data-icon='close' aria-label="Close">
                                        Cancel
                                    </button>
                                </Dialog.Close>
                                <button type='submit' className='btn btn-save'>Add Details</button>
                            </div>
                        </div>
                    </form>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

function ThAddAction() {
  const [input, setInput] = useState({})
  const navigate = useNavigate()
  const [userToken, setToken] = useState(sessionStorage.getItem("userToken"))
  
  const serverApi = "http://localhost:8080/api/user/add"
  
  const changeMyData = (event) => {
    setInput({
        ...input, "role": 'training head', [event.target.name]:event.target.value,
        "token": userToken
    })
  }

  const handleSubmit = (event)=>{
    axios.post(serverApi, input)
    .then(response =>{
        navigate('/dashboard')
    })
  }
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className='btn btn-add' data-icon="add-icon">Add Training Head</button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <div className='add-icon'></div>
                <Dialog.Title className="DialogTitle">Add profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Add a new faculty profile here. Click Add details when you're done.
                </Dialog.Description>
                    <form onSubmit={handleSubmit}>
                        <div style={{display: 'grid', gap:'1.25rem'}} className='form-body'>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="name-input">Name</label>
                                <input style={inputStyle} name='name' id='name-input' type="text" placeholder='John Doe' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="username-input">Username</label>
                                <input style={inputStyle} name='username' id='username-input' type="text" placeholder='@johndoe' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="project-input">Project</label>
                                <input style={inputStyle} name='project' id='project-input' type="text" placeholder='ICTAK' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="course-input">Course Name</label>
                                <input style={inputStyle} name='course' id='course-input' type="text" placeholder='FSD' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="email-input">Email</label>
                                <input style={inputStyle} name='email' id='email-input' type="email" placeholder='johndoe@email.com' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="password-input">Password</label>
                                <input style={inputStyle} name='password' id='password-input' type="password" placeholder='Password' onChange={changeMyData} required />
                            </div>
                            <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                                <Dialog.Close asChild>
                                    <button className="btn btn-cancel" data-icon='close' aria-label="Close">
                                        Cancel
                                    </button>
                                </Dialog.Close>
                                <button type='submit' className='btn btn-save'>Add Details</button>
                            </div>
                        </div>
                    </form>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

function PoAddAction() {
  const [input, setInput] = useState({})
  const navigate = useNavigate()
  const [userToken, setToken] = useState(sessionStorage.getItem("userToken"))
  
  const serverApi = "http://localhost:8080/api/user/add"
  
  const changeMyData = (event) => {
    setInput({
        ...input, "role": 'placement officer', [event.target.name]:event.target.value,
        "token": userToken
    })
  }

  const handleSubmit = (event)=>{
    axios.post(serverApi, input)
    .then(response =>{
        navigate('/dashboard')
    })
  }
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className='btn btn-add' data-icon="add-icon">Add Placement Officer</button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <div className='add-icon'></div>
                <Dialog.Title className="DialogTitle">Add profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Add a new faculty profile here. Click Add details when you're done.
                </Dialog.Description>
                    <form onSubmit={handleSubmit}>
                        <div style={{display: 'grid', gap:'1.25rem'}} className='form-body'>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="name-input">Name</label>
                                <input style={inputStyle} name='name' id='name-input' type="text" placeholder='John Doe' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="username-input">Username</label>
                                <input style={inputStyle} name='username' id='username-input' type="text" placeholder='@johndoe' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="project-input">Project</label>
                                <input style={inputStyle} name='project' id='project-input' type="text" placeholder='ICTAK' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="course-input">Course Name</label>
                                <input style={inputStyle} name='course' id='course-input' type="text" placeholder='FSD' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="email-input">Email</label>
                                <input style={inputStyle} name='email' id='email-input' type="email" placeholder='johndoe@email.com' onChange={changeMyData} required />
                            </div>
                            <div style={editInputStyle}>
                                <label style={labelStyle} htmlFor="password-input">Password</label>
                                <input style={inputStyle} name='password' id='password-input' type="password" placeholder='Password' onChange={changeMyData} required />
                            </div>
                            <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                                <Dialog.Close asChild>
                                    <button className="btn btn-cancel" data-icon='close' aria-label="Close">
                                        Cancel
                                    </button>
                                </Dialog.Close>
                                <button type='submit' className='btn btn-save'>Add Details</button>
                            </div>
                        </div>
                    </form>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}



export {LearnerAddAction, ThAddAction, PoAddAction}