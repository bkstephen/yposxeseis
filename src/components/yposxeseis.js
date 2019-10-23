import React from 'react'

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
        if (this.state.progress == "100%") {
            this.setState({ showPic: true })
            const list = document.getElementById(this.props.id)
            list.innerHTML = 'ΟΛΟΚΛΗΡΏΘΗΚΕ    100% '
            list.style.color = "#20c997"
        }
    }
    render() {
        return (
            <div className="card bg-light mb-3" style={{ display: "table", margin: "auto", width: "80%", position: "relative" }}>
                <div className="card-header" >

                    <h5 className="card-title">Πρόοδος:</h5>
                    <div id={this.props.id}>

                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated"
                                role="progressbar"
                                aria-valuenow={this.state.progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: this.state.progress }}>
                            </div>                   

                        </div>
                        <div style={{ position: "relative", fontSize: "150%" }}>{this.state.progress}</div>
                    </div>
                    {this.state.showPic ? <img style={{ marginLeft: "1%", width: "80px" }} src={require("../img/happy.PNG")} /> : <div></div>}
                </div>
                <div style={{ color: "black" }} className="card-body" >
                    <p className="card-text">
                        {this.state.description}
                    </p>
                </div>
            </div>
        )
    }
}