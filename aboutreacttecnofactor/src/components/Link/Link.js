import React, { Component } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

class Link extends Component {
    render() {
        return (
            <div>
                <div>
                    <LinkRouter key={1} to={{ pathname: '/listas' }}>
                        <a>LISTAS</a>
                    </LinkRouter>
                </div>
                <div>
                    <LinkRouter key={2} to={{ pathname: '/' }}>
                        <a>HOME</a>
                    </LinkRouter>
                </div>
            </div>
        )
    }
}

export default Link;