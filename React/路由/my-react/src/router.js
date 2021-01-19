//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件 
import Home from './views/pages/home.jsx';
import Page1 from './views/pages/page1.jsx';
import Page2 from './views/pages/page2.jsx';
import Page3 from './views/pages/page3.jsx';
import Page4 from './views/pages/page4.jsx';

//引入一些模块
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function router() {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
                <Route path="/page4" component={Page4} />
                <Route path="/" render={
                    () => (
                        <Redirect to="/home" />)}>
                </Route>
                {/* 把 / 重定向到/home页 */}
            </Switch>
        </Router>);
}

export default router;