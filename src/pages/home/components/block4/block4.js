import React, {Component} from 'react'
import './block4.less'

class Block4 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"block4-wrap"}>
                <div className={"block4-item"}>
                    <div className={"block4-title"}>
                        <div className="block4-tit-inner">
                            <h2>多样化下单管理</h2>
                            <span>TradeBot高级订单管理系统采用极速全内存运算技术实现毫秒级内委托订单业务处理，配合主动推送技术：支持策略下单、投资组合下单、文件导入下单；支持策略拆单、算法下单等，隐藏下单痕迹；支持风控管理、仓位管理；支持股票、期货、期权、外汇。</span>
                        </div>
                    </div>
                </div>
                <div className="point-group">
                    <div className="point-i point-i1">芝加哥</div>
                    <div className="point-i point-i2">纽约</div>
                    <div className="point-i point-i3">伦敦</div>
                    <div className="point-i point-i4">上海</div>
                    <div className="point-i point-i5">深圳</div>
                    <div className="point-i point-i6">香港</div>
                    <div className="point-i point-i7">新加坡</div>
                    <div className="point-i point-i8">东京</div>
                </div>
                <div className="point-line">
                    <div className="point-l point-l1">
                        <div></div>
                    </div>
                    <div className="point-l point-l2">
                        <div></div>
                    </div>
                    <div className="point-l point-l3">
                        <div></div>
                    </div>
                    <div className="point-l point-l4">
                        <div></div>
                    </div>
                    <div className="point-l point-l5">
                        <div></div>
                    </div>
                    <div className="point-l point-l6">
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block4