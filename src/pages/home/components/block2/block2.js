import React, {Component} from 'react'
import './block2.less'

class Block2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"block2-wrap"}>
                <div className="block2-item">
                    <div className={"common-title block2-title"}>
                        <h2>抢涨停，很简单</h2>
                        <span>独家TICK BY TICK驱动过滤引擎，实时监控全市场，不间断信号推送，一旦有股票满足条件，立即出现到预警窗口。例，抢涨停策略，实时涨幅超过8.5%的股票，即刻推送信号给用户，毫秒级响应，轻松抓住涨停股票</span>
                    </div>
                    <div className={"block2-con"}>
                        <div className={"line-1"}>
                            <span></span>
                        </div>
                        <div className={"line-2"}>
                            <span></span>
                        </div>
                        <div className={"buy-text"}>
                            <span>买入机会</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block2
