import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, BrowserRouter} from 'react-router-dom';

class App extends Component{
    render(){
        return(<div>
            <h1>App</h1>
            <Link to="/app1">Submit Idea</Link>
            <Link to="/app2"> Submit Suggestion</Link>
            <Link to="/">Go Home</Link>
            { this.props.children }
            </div>);
    }
}

class App1 extends Component{
    render(){
        return(<div>Idea form</div>);
    }
}

class App2 extends Component{
    render(){
        return(<div>Suggestion Form</div>);
    }
}



class Home extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <App>
                        <Route path='/app1' component={App1} />
                        <Route path='/app2' component={App2} />
                    </App>
                </BrowserRouter>
            </div>
        );
    }
}

render(<Home />, document.getElementById('root'));