import React from 'react';

const useri = 
[
  {
  name: 'Bla'
}
];
export default class App extends React.Component {
  constructor () {
  	super();
    this.state = {
    	users: useri
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { users } = this.state,
    name = event.target.name.value;
    this.setState({ users: [...users,{
      name  
    }] 
  }, () => {
    document.querySelector('#name').value='';
  });
  }

  handleButtonPress = () => {
    const { users } = this.state;
    let div = document.querySelector('#ispis');
    console.log (
      users.map((user) => user.name)
    )
    div.append(users.map((user) => 
    user.name
  ))
  }
  
  render() {
  
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Ime:</label> 
        <input type="text" name="name" id="name" />
        <input type="submit" value="Potvrdi" />
      </form>
      <button onClick={this.handleButtonPress}>Početno stanje</button>
      <div id="ispis"></div>
      </div>
    );
  }
}
