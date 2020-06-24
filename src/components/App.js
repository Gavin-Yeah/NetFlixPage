import React from 'react';
import logo from './netflix.jpg';
import './App.css';
import List from "./List";
import {connect} from'react-redux';

const mapStateToProps = state => state
class App extends React.Component{
    componentDidMount() {
        const httpUrl = "/data.json";
        let mylist=[];
        let recommendations = [];

        fetch(httpUrl).then(result =>{
            return result.json();
        }).then(data=>{
            mylist = data.mylist;
            recommendations = data.recommendations;
            // console.log( mylist);
            this.props.dispatch({type:"INIT",mylist,recommendations});
            // console.log(this.props)
        })
        
    }

    render() {
        // console.log("store",this.props)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="container">
                    <div>
                        <h3>My List</h3>
                        <List list={this.props.mylist||[]} btnText={'remove'} />
                    </div>
                   <div>
                       <h3>Recommendations</h3>
                       <List list={this.props.recommendations||[]} btnText={'add'} />
                   </div>

                </div>
            </div>
        );
    }


}



export default connect(mapStateToProps)(App);
