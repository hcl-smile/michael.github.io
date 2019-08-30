import React from 'react'
import './points.less'

export default (props) => {
    let {list,current,handle} = props
    
    return (
        <div className="point-wrap">
            {
                list.map(listItem =>  <div 
                                        className={current == listItem.id ? 'active' : ''} 
                                        key={listItem.id}
                                        onClick={() => {handle(listItem.id)}}
                                    >

                                        </div>)
            }
        </div>
    )
}