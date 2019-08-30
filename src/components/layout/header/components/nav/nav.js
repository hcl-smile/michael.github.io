import React from 'react'
import {Link} from 'react-router-dom'
import DivRow from '@layout/divRow/divRow'
import navList from '../../config'

import './nav.less'

export default (props) => {
    let {change,active} = props

    return (
        <div className="head-nav">
            <DivRow>
                {
                    navList.map(
                        navs => <Link 
                                    to={navs.path} 
                                    className={`nav-item ${active == navs.id ? 'nav-actived' : ''}` }
                                    key={navs.id} 
                                    onClick={() => change(navs.id)} 
                                >
                                    {navs.name}
                                </Link>
                    )
                }
            </DivRow>
        </div>
    )
}