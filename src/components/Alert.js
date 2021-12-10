import React, { useState } from 'react'


export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    console.log('messagt to alert', props);
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* This happens because all the JSX will be converted to the Javascript calls  */}
            <strong>{props.alert.type}</strong> : {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )

}
// export default Alert