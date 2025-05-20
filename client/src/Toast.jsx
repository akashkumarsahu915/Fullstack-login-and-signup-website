import React from 'react'
// import button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
export default function Toast({Open,message,onClose}) {
    return (
        <div>
            <Snackbar
                open={Open}
                autoHideDuration={5000}
                onClose={onClose}
                message={message}
            />
        </div>
    )
}
