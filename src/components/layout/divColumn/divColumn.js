import React from 'react'
import './divColumn.less'

export default (props) => {
    let {children} = props

    return (
        <div className="div-column">
            {children}
        </div>
    )
}