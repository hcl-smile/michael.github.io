import React, {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {App} from '@components/layout/app'
import {Home} from '@pages/home'
import {Usa} from '@pages/usa'
import {Intellect} from '@pages/intellect'
import {Service} from '@pages/service'
import {Download} from '@pages/download'
import {Help} from '@pages/help'

const Root = () => {
    return (
        <Router>
            <Suspense fallback={<div>loading</div>}>
                <Switch>
                    <App>
                        <Route path='/' exact component={Home} />
                        <Route path='/usa' exact component={Usa} />
                        <Route path='/intellect' exact component={Intellect} />
                        <Route path='/service' exact component={Service} />
                        <Route path='/download' exact component={Download} />
                        <Route path='/help' component={Help} />
                    </App>
                </Switch>
            </Suspense>
        </Router>
    )
}

export default Root