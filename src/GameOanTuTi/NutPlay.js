import React, { Component } from 'react'
import { connect } from 'react-redux'

class NutPlay extends Component {
    renderOanTuTi = () => {
        const { mangOanTuTi } = this.props;
        return mangOanTuTi.map((oanTuTi, index) => {
            return <img key={index} style={{ backgroundColor: "white", padding: 40, width: "40%", border: '2px solid green' }} src={oanTuTi.hinhAnh}></img>
        })
    }
    render() {
        return (
            <div className=" my-5">
                <div>
                    <div>
                        {this.renderOanTuTi()}
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
