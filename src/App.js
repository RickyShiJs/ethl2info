import React, { Component } from 'react'
import { HashRouter,Route,Switch} from 'react-router-dom'

// import Home from './pages/home/home'
import Timeline from './pages/timeline/timeline'

export default class App extends Component {
    render() {
        return (
            /**路由跳转 */
            <HashRouter>
                <Switch>
                    {/* 加exact使得一进'/'地址就加载home界面 */}
                    <Route path='/' component={Timeline} exact />
                    <Route path='/home' component={Timeline}/>
                    {/* path:网页路由  component:jsx文件中class名（首字母大写） */
                    // <Route path="/class" component={Class} />
                    // <Route path="/docker" component={Docker} />
                    // <Route path="/sExperiment" component={SExperiment} />
                    // <Route path="/aExperiment" component={AExperiment} />
                    // <Route path="/feedback" component={Feedback} />
                    }
                </Switch>
            </HashRouter>
        )
    }
}
