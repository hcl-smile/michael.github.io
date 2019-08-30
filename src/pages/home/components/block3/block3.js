import React, {Component} from 'react'
import './block3.less'

class Block3 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"block3-wrap"}>
                <div className={"block3-item"}>
                    <div className={"common-title block1-title block3-title"}>
                        <h2>策略构建简易化</h2>
                        <span>形成一个完整的策略，需要细化很多逻辑，个股资金如何分配？建仓数目如何控制进仓条件有哪些？进仓如何控制？风控条件如何设置？是否重复开仓？出仓条件又有哪些？如何调仓？在InSync量化平台上，以上这些逻辑都无需编程。用户设置相关条件即可，15分钟将投资思路转变为策略。</span>
                    </div>
                    <div className="block3-con">
                        <div className={"block3-con-card"}></div>
                        
                        <div className={"block3-con-wrap"}>
                            <div className={"block3-con-icon block3-con-icon1"}></div>
                            <div className={"block3-con-icon block3-con-icon2"}></div>
                            <div className={"block3-con-icon block3-con-icon3"}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block3