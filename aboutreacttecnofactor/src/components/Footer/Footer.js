import React, {Component} from 'react';

const styles = {
    footer: {
        bottom: 0,
        width: '100%',
        backgroundColor: '#111',
        color: 'white',
        textAlign: 'center',
    }
}

class Footer extends Component{
    state = {
        year:null
    }

    componentWillMount(){
        let year = new Date();
        this.setState({year:year.getFullYear()});
    }

    render(){
        
        const { year } = this.state;
        return(
            <div style={styles.footer}>
            <p>© {year} by TECNOFACTOR Todos los derechos reservados</p>
            </div>
        )
    }
}

export default Footer;
