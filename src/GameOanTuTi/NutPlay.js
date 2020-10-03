import React, { Component } from 'react'
import { connect } from 'react-redux'

class NutPlay extends Component {
    render() {
        return (
            <div className=" my-5">
                <div>
                    <div>
                    <img style={{ backgroundColor: "white", padding: 40, width: "40%", border: '2px solid green' }} src={this.props.mangOanTuTi.hinhAnh}></img>
                    </div>
                    <div>
                        <img style={{ width: "80%", height: "80%" }} src="./img/gameoantuxi/playerComputer.png"></img>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        banChon: state.stateGameOanTuTi.banChon,
        mangOanTuTi: state.stateGameOanTuTi.mangOanTuTi,
    }
}


export default connect(mapStateToProps)(NutPlay)
