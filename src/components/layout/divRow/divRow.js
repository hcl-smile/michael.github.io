import React from 'react'
import './divRow.less'

export default (props) => {
    let {children} = props

    return (
        <div className="div-row">
            {children}
        </div>
    )
}