import axios from 'axios'
import Papa from 'papaparse';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog';

const importInputStyle = {
  display: 'grid',
  gap: '0.8rem',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBlock: '1rem',
  marginBottom: '1rem',
  borderRadius: '0.5rem',
  border: 'dashed var(--clr-border) 1.5px'
}

const fileimportInputStyle = {
  display: 'grid',
  gap: '0.8rem',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBlock: '1rem',
  marginBottom: '1rem',
  borderRadius: '0.5rem',
  border: 'dashed var(--clr-primary) 1.5px',
  backgroundColor: '#F9F5FF'
}

function LearnerImportAction() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handlefileremove = () => {
    setFile(null)
  }

  const handleSubmit = () => {
    if (!file) {
      return;
    }

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        axios.post('http://localhost:8080/learner/import', { data: results.data })
          .then(response => {
            navigate('/dashboard')
          })
          .catch(error => {
            console.error(error);
          });
      }
    });
  }

  const renderLabel = () => {
    if (file) {
      return(
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <div className='file-icon'></div>
          <div className='file-label'>{file.name}</div>
          <div onClick={handlefileremove} className='btn btn-remove' data-icon="remove-icon"></div>
        </div>
      );
    }
    return(
      <label for="file-upload" class="nofile-label">
        Click here to upload
      </label>
    );
  }
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className='btn btn-import' data-icon="import-icon">Import</button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <div className='import-icon'></div>
                <Dialog.Title className="DialogTitle">Import Learners</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Upload a csv file to import learner details to you database.
                </Dialog.Description>
                  <form onSubmit={handleSubmit}>
                    <div style={file ? fileimportInputStyle: importInputStyle}>
                      {renderLabel()}
                      <input id="file-upload" type="file" accept=".csv" onChange={handleFileChange} />
                    </div>
                    <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                      <Dialog.Close asChild>
                          <button onClick={handlefileremove} className="btn btn-cancel" data-icon='close' aria-label="Close">
                              Cancel
                          </button>
                      </Dialog.Close>
                      <button type='submit' className='btn btn-save'>Upload</button>
                    </div>
                  </form>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

function UserImportAction() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handlefileremove = () => {
    setFile(null)
  }

  const handleSubmit = () => {
    if (!file) {
      return;
    }

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        axios.post('http://localhost:8080/user/import', { data: results.data })
          .then(response => {
            navigate('/dashboard')
          })
          .catch(error => {
            console.error(error);
          });
      }
    });
  }

  const renderLabel = () => {
    if (file) {
      return(
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <div className='file-icon'></div>
          <div className='file-label'>{file.name}</div>
          <div onClick={handlefileremove} className='btn btn-remove' data-icon="remove-icon"></div>
        </div>
      );
    }
    return(
      <label for="file-upload" class="nofile-label">
        Click here to upload
      </label>
    );
  }
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className='btn btn-import' data-icon="import-icon">Import</button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <div className='import-icon'></div>
                <Dialog.Title className="DialogTitle">Import Faculty</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Upload a csv file to import faculty details to you database.
                </Dialog.Description>
                  <form onSubmit={handleSubmit}>
                    <div style={file ? fileimportInputStyle: importInputStyle}>
                      {renderLabel()}
                      <input id="file-upload" type="file" accept=".csv" onChange={handleFileChange} />
                    </div>
                    <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}} className='form-action'>
                      <Dialog.Close asChild>
                          <button onClick={handlefileremove} className="btn btn-cancel" data-icon='close' aria-label="Close">
                              Cancel
                          </button>
                      </Dialog.Close>
                      <button type='submit' className='btn btn-save'>Upload</button>
                    </div>
                  </form>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

export {LearnerImportAction, UserImportAction}
