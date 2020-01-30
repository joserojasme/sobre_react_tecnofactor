import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetListaUsuarios } from '../reducers/actions/UserAction';

class Listas extends Component {

    handleClick = ()=>{
        const {setListaUsuarios} = this.props;
        let array = new Array();
        array.push({nombre:'CARLOS ANDRÉS'});
        setListaUsuarios(array)
    }

    render() {
        const { listaUsuarios } = this.props;
        
        return (
            <div>
                <div>Hola desde listas</div>
                <div>
                    <ul>
                    {listaUsuarios.map(item=>(
                        <li>{item.nombre}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <button onClick={this.handleClick}>Llenar Lista</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        listaUsuarios: state.User.listaUsuarios
    }
}

const mapDispatchToProps = (dispatch) => ({
    setListaUsuarios: (item) => dispatch(SetListaUsuarios(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Listas);