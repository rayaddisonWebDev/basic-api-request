import React from 'react';

class App extends React.Component{

//two pieces of state needed here
  state = {
    items: [],
    isLoaded: false
  }

//componentDidMount runs after render method and then updates render method
//arrow functions bind "this" to res and json
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

//content needed before returning outputted data
  render(){

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      console.log("loading data");
    } else {
      console.log("Data has been loaded");
    }

//mapping through data
    return(
      <div>
        <ul>
          {items.map(item => (
            <li key={item.id}>Name: {item.name} <br/> Email: {item.email}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
