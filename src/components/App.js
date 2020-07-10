import React from 'react';
import logo from './netflix.png';
import './App.css';
import List from "./List";
import {connect} from'react-redux';
//get the state and map it to the props
const mapStateToProps = state => {
    return state;
}

class App extends React.Component{
    //get the data when initial components mount
    componentDidMount() {
        //the url to get the data
        const httpUrl = "/data.json";
        //the array stores the data from my list
        let mylist=[];
        //the array stores the data from recommendations
        let recommendations = [];
        //fetch the data from json file using http call
        fetch(httpUrl).then(result =>{
            return result.json();
        }).then(data=>{
            mylist = data.mylist;
            recommendations = data.recommendations;
            //initialize the data using redux
            this.props.dispatch({type:"INIT",mylist,recommendations});

        })
        
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="container">
                    {/*pass the arrays mylist/recommendations,button text, and title to the reusable component List*/}
                    <List list={this.props.mylist||[]} title={'My List'} />
                    <List list={this.props.recommendations||[]} title={'Recommendations'}/>
                </div>
            </div>
        );
    }


}



export default connect(mapStateToProps)(App);
