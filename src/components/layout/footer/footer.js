import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import DivRow from '@layout/divRow/divRow'
import DivColumn from '@layout/divColumn/divColumn'

import './footer.less'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: [
                {
                    id: 0,
                    name: '关于我们',
                    path: '/'
                },
                {
                    id: 1,
                    name: '联系我们',
                    path: '/'
                },
                {
                    id: 2,
                    name: '帮助',
                    path: '/'
                },
                {
                    id: 3,
                    name: '下载',
                    path: '/'
                }
            ]
        }

        this.renderInfo = this.renderInfo.bind(this)
    }

    renderInfo() {
        let {info} = this.state

        return info.map(infos => (
                <Link to={infos.path} className="info-item" key={infos.id}>{infos.name}</Link>
            )
        )
    }

    render() {
        return (
            <div className="foot-container">
                <DivRow>
                    <div className="footer-left">
                        <DivColumn>
                            <div className="footer-text">
                                <DivRow>
                                    {this.renderInfo()}
                                </DivRow>
                            </div>
                            <div className="footer-desc">
                                @ 2018 Quancept Inc.    深圳宽投信息科技有限公司
                            </div>
                        </DivColumn>
                    </div>
                    <div className="footer-right">
                        <div>
                            <img />
                            <span>微信公众号</span>
                        </div>
                    </div>
                </DivRow>
            </div>
        )
    }
}

export default Footer