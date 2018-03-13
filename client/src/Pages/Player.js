import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from '../Util/api';
import {Col, Row, Container} from "../components/Grid";
import { List, ListItem } from "../components/List";


class Player extends Component {
    state = {
        players: {},
        player: {}
    };

    componentDidMount() {
        this.loadPlayers();
    }

    loadPlayers = () => {
        API.getPlayers()
            .then(res => this.setState({ players: res.data }))
            .catch(err => console.log(err));
    };

    loadPlayer = () => {
        API.getPlayer()
            .then(res => this.setState({player: res.data}))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron />
                    </Col>
                    <Col size="md-6 sm-12">
                        {this.state.players.length ? (
                            <List>
                                {this.state.players.map(player => (
                                    <ListItem key={player._id}>
                                        <a href={"/player/" + player._id}>
                                            <strong>
                                                {player.Year} by {player.Player}
                                            </strong>
                                        </a>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Player;