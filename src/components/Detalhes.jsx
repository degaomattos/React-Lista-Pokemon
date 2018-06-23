import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Detalhes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        let that = this;
        axios.get('https://pokeapi.co/api/v2/pokemon/' + params.id + '/')
            .then(function (response) {
                //this.setState({pokemons: response.data})
                console.log(response)
                that.setState({ pokemon: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {

        return (
            <div>
                <section className="container">
                    {this.state.pokemon ?
                        <div className="card">
                            <div className="card-header">
                                Detalhes do Pokemon
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.pokemon.name}</h5>
                                <p className="card-text">Peso: {this.state.pokemon.weight}</p>
                                <Link to="/" className="btn btn-primary">Voltar</Link>
                            </div>
                        </div>
                    : ""}
                </section>
            </div>
        )
    }
}

export default Detalhes;