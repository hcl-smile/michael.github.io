import React, {Component} from 'react'
import './block6.less'
import icon1 from '../../../../assets/icon-1.png'
import icon2 from '../../../../assets/icon-2.png'
import icon3 from '../../../../assets/icon-3.png'
import icon4 from '../../../../assets/icon-4.png'
import icon5 from '../../../../assets/icon-5.png'
import icon6 from '../../../../assets/icon-6.png'
import icon7 from '../../../../assets/icon-7.png'
import icon8 from '../../../../assets/icon-8.png'
import icon9 from '../../../../assets/icon-9.png'
import icon10 from '../../../../assets/icon-10.png'

class Block6 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timeLine: [
                {
                    id: 0,
                    date: '2018-10-23',
                    text: '10月24日至27日，微软技术暨生态大会将在上海世博中心召开，届时宽投金融科技，将作为特邀推荐应用，在金融行业展位隆重推出全新打造的智能股票机器人“小宽”，集成白话选股、白话策略回测与优化等亮点功能，通过自然语言对话式交互结合宽投实时高效复杂事件处理引擎，实现零门槛量化交易。'
                },
                {
                    id: 1,
                    date: '2018-11-06',
                    text: '11月5日，宽投金融科技携倾心打造的智能量化交易平台和小宽全能股票机器人亮相第十二届深圳国际金融博览会。宽投独创的免编程式量化投资策略平台和自然语言全能股票机器人吸引到众多来访嘉宾的兴趣和围观，很多参展参会者表示，不管是散户还是专业用户，白话选股功能均可极大减轻择时选股与回测检验所花费的时间精力，而解套宝更是直接帮到众多散户的痛点。'
                },
                {
                    id: 2,
                    date: '2019-04-08',
                    text: '4月8-9日，由微软中国、嘉吉全球联合举办的数字化转型黑客松活动在上海举行。宽投通过人工智能技术的应用和量化平台服务，精准捕捉社交媒体和其他数据源相关有价值的信息，快速进行处理和情绪分析，并依据算法模型以及一系列的市场机会解析和策略构建与优化机制，实施交易的应用场景，为金属商品交易领域的数字化转型提供了创新解决方案。'
                },
                {
                    id: 3,
                    date: '2019-05-08',
                    text: '宽投CEO张毅接受了Microsoft Inspire Cover Story的专访，张总分享了很多与微软合作的感受，还通过视频的方式表达了对参加Microsoft Inspire的热切之情'
                }
            ],
            currentText: '',
            currentIndex: 0,
            maxLen: 0,
            moveLeft: 260,
            serviceList: [
                {
                    id: 1,
                    title: '选股择时',
                    desc: '通过自然语言描述思路，快速实现基本面、技术形态、实盘数据等实时选股、定时选股',
                    icon: icon1
                },
                {
                    id: 2,
                    title: '智能盯盘',
                    desc: '指定股票、期货、指数等标的，设置价格或条件，如止盈、止损、回落触发，或使用自然语言编辑量化盯盘策略',
                    icon: icon2
                },
                {
                    id: 3,
                    title: '量化策略系统',
                    desc: '无需编程，自然语言+简易公式编辑策略，条件设置即可细化策略逻辑，15分钟将投资思路转变为策略，大幅降低量化应用门槛',
                    icon: icon3
                },
                {
                    id: 4,
                    title: '精准回测',
                    desc: '支持沪深A股、指数、基金等其他金融衍生品等跨品种策略回测；支持15种时间周期策略回测；比普通Python快10~100倍',
                    icon: icon4
                },
                {
                    id: 5,
                    title: '智能策略优化',
                    desc: '基于海量历史数据，采用深度机器学习和算法模型完成策略优化',
                    icon: icon5
                },
                {
                    id: 6,
                    title: '归因分析',
                    desc: '从个股角度和行业角度来进行多维度多指标分析，根据指标分析产生黑名单',
                    icon: icon6
                },
                {
                    id: 7,
                    title: '策略执行',
                    desc: '支持策略触发下单；支持多策略组交易；支持单个标的对应不同策略组下单；支持全自动交易和自动触发信号手工确认交易',
                    icon: icon7
                },
                {
                    id: 8,
                    title: '高级订单管理（OMS)',
                    desc: '采用极速全内存运算技术，轻松实现毫秒级委托订单业务处理，配合主动推送技术，支持多种下单类型',
                    icon: icon8
                },
                {
                    id: 9,
                    title: '期权策略分析',
                    desc: '基于对市场未来预期，对不同时间跨度、涨跌幅的期待，进行期权策略扫描，获取不同期权策略组合的结构、收益、风险及图示',
                    icon: icon9
                },
                {
                    id: 10,
                    title: '模拟交易',
                    desc: '在模拟交易环境中磨练策略和交易技术，通过模拟交易培养、磨练并完善所需交易技巧支持策略交易和手动交易',
                    icon: icon10
                }
            ]
        }

        this.tabChange = this.tabChange.bind(this)
        this.handleArrow = this.handleArrow.bind(this)
    }

    /**
     * 渲染时间轴
     * @param {array} list 时间轴数组 
     */
    renderTimeLine(list) {
        let {currentIndex} = this.state

        if(!list) {
            return
        }

        return list.map(
            item => <span 
                        className={currentIndex == item.id ? 'actived' : ''}
                        key={item.id} 
                        onClick={() => this.tabChange(item)}
                        >{item.date}
                    </span>
        )
    }

    /**
     * tab切换
     */
    tabChange(data) {
        this.setState({
            currentText: data.text,
            currentIndex: data.id
        },() => {
            this.setState({
                moveLeft: (2-this.state.currentIndex)*130
            })
        })
    }

    /**
     * 点击箭头滚动
     */
    handleArrow(type) {

        if(type === 1) {
            this.add()
        }else {
            this.remove()
        }
    }

    /**
     * 加
     */
    add() {
        let {currentIndex,timeLine,moveLeft} = this.state

        currentIndex++

        if(currentIndex > timeLine.length - 1) {
            currentIndex = timeLine.length - 1
        }else {
            moveLeft = moveLeft - 130
        }

        this.tabChange(timeLine[currentIndex])

        this.setState({
            currentIndex,
            moveLeft
        })
    }

    /**
     * 减
     */
    remove() {
        let {currentIndex,timeLine,moveLeft} = this.state

        currentIndex--

        if(currentIndex < 0) {
            currentIndex = 0
        }else {
            moveLeft = moveLeft + 130
        }

        this.tabChange(timeLine[currentIndex])

        this.setState({
            currentIndex,
            moveLeft
        })
    }
    
    /**
     * 渲染服务列表
     */
    renderServiceList(list) {
        if(!list) {
            return
        }

        return list.map(
            item => <div className="block6-brand-item" key={item.id}>
                    <img src={item.icon} />
                    <h3>{item.title}</h3>
                    <span>{item.desc}</span>
                </div>
        )
    }

    componentDidMount() {
        let {timeLine} = this.state
        this.tabChange(timeLine[timeLine.length-1])

        // this.setState({
        //     maxLen: Math.ceil(this.state.timeLine.length/5)
        // },() => {
        // })
    }

    render() {
        let {timeLine,currentText,moveLeft,serviceList} = this.state
        console.log(this.state.currentIndex, 'currentIndex');
        return (
            <div className="block6-wrap">
                <div className="block6-item">
                    <div className="block6-info">
                        <div className="block6-info-inner">
                            <div className="com-status">公司动态</div>
                            <div className="com-timeline">
                            <div className="com-tl-arrow">
                                <span onClick={() => this.handleArrow(2)}></span>
                                <span onClick={() => this.handleArrow(1)}></span>
                            </div>
                            <div className="com-tl-process">
                                <div className="com-tlp-inner" style={{marginLeft: moveLeft}}>
                                    {this.renderTimeLine(timeLine)}
                                </div>
                            </div>
                            <div className="com-tl-con">
                                <div>{currentText}</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="block6-brand">
                        <div className="block6-brand-title">专业全面的量化服务</div>
                        <div className="block6-brand-list">
                            <div className="block6-brand-inner">
                                {this.renderServiceList(serviceList)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block6