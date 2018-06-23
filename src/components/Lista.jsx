import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pokemons: []
        };
      }
      componentDidMount() {
        let that = this;
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(function (response) {
          //this.setState({pokemons: response.data})
          console.log(response.data.results)
          that.setState({pokemons: response.data.results})
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    render() {
        return (
            <div>
                <section className="container">
                    <ul className="list-group">
                    {this.state.pokemons.map((item, key) => 
                        <li key={key  } className="list-group-item"><Link to={item.name}>{item.name}</Link></li>
                    )}
                    </ul>
                </section>
            </div>
        )
    }
}

export default Lista;