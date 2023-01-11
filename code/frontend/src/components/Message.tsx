import React from 'react'


function Message({ variant, children }) {
    return (
        <alert   variant={variant}>
            {children}
        </alert>
    )
}

export default Message
