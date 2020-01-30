import React, {Component} from 'react';

const styles = {
    footer: {
        width: '100%',
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
    }
}

class Reloj extends Component{
    state = {
        hora:'',
        minutos:'',
        segundos:''
    }

    componentWillMount(){
        setInterval(()=>this.nuevaHora(),1000);
    }

    nuevaHora = () =>{
        let horaActual = new Date();
        let hora = horaActual.getHours();
        let minutos = horaActual.getMinutes();
        let segundos = horaActual.getSeconds();
        this.setState({
            hora, 
            minutos, 
            segundos
        });
    }

    render(){
        const { hora, minutos, segundos } = this.state;

        return(
            <div style={styles.footer}>
                <p>
                    {`Hora actual: ${hora}:${minutos}:${segundos}`}
                </p>
            </div>
        )
    }
}

export default Reloj;