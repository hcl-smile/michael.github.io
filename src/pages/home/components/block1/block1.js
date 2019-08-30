import React, {Component} from 'react'
import './block1.less'
import cursor from '../../../../assets/cursor.png'

class Block1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                {
                    id: 1,
                    name: 1,
                    text: '10半量比大于2'
                },
                {
                    id: 2,
                    name: 1,
                    text: '过去3天连续放量'
                },
                {
                    id: 3,
                    name: 1,
                    text: '五分钟线均线大于3'
                },
                {
                    id: 4,
                    name: 1,
                    text: '价格比20均线高10%'
                },
                {
                    id: 5,
                    name: 1,
                    text: '买一量比卖一量高10%'
                },
                {
                    id: 6,
                    name: 1,
                    text: '成交量超过1000手'
                },
                {
                    id: 7,
                    name: 1,
                    text: '三金叉见底'
                },
                {
                    id: 8,
                    name: 1,
                    text: '流通股股本减少'
                },
                {
                    id: 9,
                    name: 1,
                    text: '毛利率同比增加10%'
                },
                {
                    id: 10,
                    name: 1,
                    text: '今天开盘价向上跳空'
                }
            ],
            isShow: false,
            on: 0,
            max: 85,
            isHover1: false,
            isHover2: false,
            isShowFunc: true
        }

        this.timer1 = null
        this.timer2 = null
        this.onEnterBar = this.onEnterBar.bind(this)
        this.onEnterHistory = this.onEnterHistory.bind(this)
        this.handleClickBtn = this.handleClickBtn.bind(this)
        this.handleClickFuncBtn = this.handleClickFuncBtn.bind(this)
    }

    handleClickBtn() {
        this.setState({
            isShow: true
        })
    }

    handleClickFuncBtn() {
        this.setState({
            isShowFunc: true
        })
    }

    showText() {
        let {on,max} = this.state

        this.timer = setInterval(() => {
            on ++

            if(on > max) {
                clearInterval(this.timer)
            }

            this.setState({
                on
            })
        },70)

    }

    onEnterBar() {
        this.setState({
            isHover1: true
        })
    }

    onEnterHistory() {
        this.setState({
            isHover2: true
        })
    }

    autoClickParseBtn() {
        this.timer = setTimeout(() => {
            this.setState({
                isShow: true
            })
        },6000)

        // this.timer2 = setTimeout(() => {
        //     this.setState({
        //         isShowFunc: true
        //     })
        // },7000)
    }

    componentDidMount() {
        this.autoClickParseBtn()
    }

    componentWillUnmount() {
        this.timer = null
    }

    render() {
        let {list,isShow,isHover1,isHover2,isShowFunc} = this.state

        return (
            <div className="block1-wrap">
                <div className="block-content">
                    <div className={"block1-item"}>
                        <div className={"common-title block1-title"}>
                            <h2>自然语言选股</h2>
                            <span>零门槛的量化选股之路，只需自然语言描述，即可精准快速选出目标股票<br/>基于宽投独家InSync CEP引擎和语义识别功能，应用最新人工智能和机器学习技术</span>
                        </div>
                        <div className={"block1-con"}>
                            <div className={"block1-ani-l"}>
                                <div className="block1-al-title">猜你想输入的：</div>
                                <div className="block1-al-list">
                                    <ul>
                                        {
                                            list.map(
                                                textItem => <li key={textItem.id}><input type="radio" />{textItem.text}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="block1-al-btn">换一批</div>
                            </div>
                            <div className={"block1-ani-r"}>
                                <div className={`block1-ar-parse actived`}>
                                    <div className={"block1-arp-w"} style={{width: '205px'}}>
                                        <span>5分钟线成交量比前30分钟总成交量高</span>
                                    </div>
                                    <div className={"block1-arp-btn"}>
                                        <span>智能解析</span>
                                        <img className={"cursor-img"} src={cursor} />
                                    </div>
                                </div>
                                <div className={"block1-ar-use"}>
                                    {
                                        isShowFunc && <div className="block1-ar-text">
                                            <div 
                                                className={`${isHover1 ? 'actived' : ''}`} 
                                                onMouseEnter={this.onEnterBar}>
                                                    {"BarVolume('5',0)"} 
                                                    {isHover1 && <span>5分钟线成交量</span>}
                                            </div>
                                            >=
                                            <div 
                                                className={`history-block ${isHover2 ? 'actived' : ''}`} 
                                                onMouseEnter={this.onEnterHistory}>
                                                    {"LoopSum({BarVolume('1','#')},-30,-1,1)"}
                                                    {isHover2 && <span>前30分钟线总成交量</span>}
                                            </div>
                                        </div>
                                    }
                                    
                                </div>
                                <div className="use-fun-btn">
                                    <span>使用公式</span>
                                    <img className={"cursor-img1"} src={cursor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block1


