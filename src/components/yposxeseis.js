import React from 'react'
import Card from 'react-bootstrap/Card';
import ProgressBar  from 'react-bootstrap/ProgressBar';

export default class Yposxeseis extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.description,
            progress: props.progress,
            showPic: false
        }
    }
    componentDidMount() {
        if (this.state.progress === 100) {
            this.setState({ showPic: true })
            const list = document.getElementById(this.props.id)
        }
    }
    render() {
        return (
            <Card className="mb-3" style={{ width: '80%', margin: 'auto', position: 'relative'}}>
                <Card.Header>
                    <Card.Title>Πρόοδος:</Card.Title>
                        {this.state.progress === 100 ? <div class="text-success">ΟΛΟΚΛΗΡΏΘΗΚΕ 100% </div> : <ProgressBar striped animated variant="success" now={this.state.progress} label={`${this.state.progress}%`} /> }
                        <br />
                        {this.state.showPic ? <Card.Img variant="top" style={{ width: '80px' }} src={require("../img/happy.PNG")} /> : <div></div>}
                    </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {this.state.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}