import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getList} from './actions'
import Points from './components/points/points'
import Block1 from './components/block1/block1'
import Block2 from './components/block2/block2'
import Block3 from './components/block3/block3'
import Block4 from './components/block4/block4'
import Block5 from './components/block5/block5'
import Block6 from './components/block6/block6'

import './home.less'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            on: 1,
            scrollHeight: 0,
            list: [
                {
                    id: 1,
                    name: '',
                    component: <Block1 />,
                    isShowAni: false
                },
                {
                    id: 2,
                    name: '',
                    component: <Block2 />,
                    isShowAni: false

                },
                {
                    id: 3,
                    name: '',
                    component: <Block3 />,
                    isShowAni: false

                },
                {
                    id: 4,
                    name: '',
                    component: <Block4 />,
                    isShowAni: false

                },
                {
                    id: 5,
                    name: '',
                    component: <Block5 />,
                    isShowAni: false

                },
                {
                    id: 6,
                    name: '',
                    component: <Block6 />,
                    isShowAni: false

                }
            ],
            lastTop: 0,
            currTop: 0,
            direction: 1,
            offsetTops: [],
            ch: (document.documentElement.clientHeight || document.body.clientHeight)-170
        }

        this.homeNode = ''
        this.onWheel = this.onWheel.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.onScroll = this.onScroll.bind(this)
    }

    componentDidMount() {
        this.getAllOffset()
    }

    /**
     * 初始化获取块的offset
     * @param {*} e 
     * @param {*} lastTop 
     */
    getAllOffset() {
        let {offsetTops} = this.state
        let elements = document.getElementsByClassName('home-w-item')

        for(let i = 0; i < elements.length;i ++) {
            let el = elements[i]
            let top = el.offsetTop
            let h = el.offsetHeight

            offsetTops.push({top,h})
        }

        console.log(offsetTops, 'render tops')

        this.setState({
            offsetTops
        },() => {
            // console.log(this.state.offsetTops)
        })
    }

    /**
     * 监听鼠标滚轮滚动
     * 
     * @param {Object} e dom对象
     */
    onWheel(e) {
        // let {deltaY} = e
        // let {currTop,lastTop} = this.state
        // let on = this.scroll(deltaY)

        // this.setState({
        //     direction: deltaY
        // })

        // this.handlePageScroll(on)

        // if(on < 6) {
        //     document.getElementsByClassName('block6-wrap')[0].scrollTop = 0
        // }
    }

    onScroll(e) {
        let {on} = this.state
        let {offsetTops,ch} = this.state
        let {currentTarget: {scrollTop}} = e
        let current = (scrollTop + ch)

        offsetTops.forEach((items,index) => {
            if(current >= items.top-400) {
                on = index
            }
        })

        if(scrollTop == 0) {
            // on = 1
        }

        if(scrollTop > offsetTops[offsetTops.length-1].top) {
            on = offsetTops.length
        }

        this.setState({
            on
        })
        
    }

    /**
     * 页面滚动
     * 
     * @param {number} index 索引值 
     */
    handlePageScroll(index) {
        let {offsetTops,ch} = this.state
        let element = document.getElementsByClassName('home-container')[0]

        element.scrollTop = (offsetTops[index].top-ch-400)+offsetTops[index].h

    }

    /**
     * 累加
     * 
     * @param {Number} type 鼠标滚动方向
     */
    scroll(type) {
        let {on,list} = this.state
        let len = list.length

        if(type < 0) {
            on --

            if(on < 1) {
                on = 1
            }
        }

        if(type > 0) {
            on ++

            if(on > len) {
                on = len
            }
        }


        this.setState({
            on,
            direction: type
        })

        return on
    }

    /**
     * 渲染列表
     */
    renderList() {
        const {list, on} = this.state

        return list.map(listItem => {
                if(on == listItem.id) {
                    listItem.isShowAni = true
                }

                return <div 
                    className={`home-w-item ${listItem.id == on ? 'showAni' : ''}`}
                    key={listItem.id}
                >
                {listItem.component}
                </div>
            }
        )
    }

    /**
     * 聚焦滚动屏幕
     * 
     * @param {number} index 索引值 
     */
    handleFocus(index) {
        this.handlePageScroll(index-1)

        this.setState({
            on: index
        })
    }

    render() {
        let {scrollHeight,list,on} = this.state

        return (
            <div ref={(node) => this.homeNode = node} className="home-container" onWheel={this.onWheel} onScroll={this.onScroll}>
                <div className="home-wrap">
                    {
                        this.renderList()
                    }
                </div>
                <Points list={list} current={on} handle={this.handleFocus} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList: (params) => {
            dispatch(getList(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) 