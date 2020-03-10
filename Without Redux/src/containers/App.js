import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import '../containers/App.css';
//props - never change; we take input and don't change it; 
//state - dynamic; object that describes your app

class App extends React.Component {
    constructor() { //executed first
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() { //third
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users });
            });
        //everytime state changes we have to update thus calls render
    }

    //use arrow function for those that you are writing 
    //and is not provided by react
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}); 
    }

    render() { //second //fourth
        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter((user) => {
            return user.name.toLowerCase()
                    .includes(searchfield.toLowerCase());
        });
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }        
} 

export default App;