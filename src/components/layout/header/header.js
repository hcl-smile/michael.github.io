import React, {Component} from 'react'
import Nav from './components/nav/nav'

import './header.less'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0
        }

        this.change = this.change.bind(this)
    }

    //tab切换
    change(index) {
        this.setState({
            currentIndex: index
        })
    }

    render() {
        let {currentIndex} = this.state

        return (
            <div className="head-container">
                <img className="logo" />
                <Nav change={this.change} active={currentIndex} />
                <div className="head-avatar">
                    <div className="avatar-img"></div>
                </div>
            </div>
        )
    }
}

export default Header