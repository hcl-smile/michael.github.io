import React, {Component} from 'react'
import './block5.less'

class Block5 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"block5-wrap"}>
                <div className={"block5-item"}>
                    <div className={"common-title block1-title block5-title"}>
                        <h2>我们支持美股啦</h2>
                        <span>你睡觉，我盯盘；写中文，炒美股</span>
                    </div>
                    <div className="block5-con">
                        <div className="block5-con-info">
                            <div className="block5-ci-line">
                                <div className="block5-cil-in">
                                    
                                </div>
                            </div>
                            <div className="block5-cil-t1">
                                <div></div>
                            </div>
                            <div className="block5-cil-t2">
                                <div></div>
                            </div>
                        </div>
                        <div className="block5-con-btn">进入美股</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block5