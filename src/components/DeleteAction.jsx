import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';


function DeleteAction() {
  return (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
        <button className='btn btn-delete' data-icon='delete-icon'></button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className="AlertDialogOverlay" />
            <AlertDialog.Content className="AlertDialogContent">
                <div className='error-icon'></div>
                <AlertDialog.Title className="AlertDialogTitle">Delete details</AlertDialog.Title>
                <AlertDialog.Description className="AlertDialogDescription">
                    Are you sure you want to delete this profile? This action cannot be undone.
                </AlertDialog.Description>
                <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr'}}>
                    <AlertDialog.Cancel asChild>
                        <button className="btn btn-cancel">Cancel</button>
                    </AlertDialog.Cancel>
                    <form>
                        <button className="btn btn-red">Delete</button>
                    </form>         
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default DeleteAction