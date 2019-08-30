import React, {Component} from 'react'
import {Header} from '@components/layout/header'
import {Footer} from '@components/layout/footer'

import './app.less'
import './reset.less'

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="root-container">
                <Header />
                <div className="main-container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default App