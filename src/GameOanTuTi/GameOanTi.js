import React, { Component } from 'react'
import './gameStyle/gameStyle.css'
import OanTuTi from './OanTuTi'
import KetQua from './KetQua'
import NutPlay from './NutPlay'
import {connect} from 'react-redux'

class GameOanTi extends Component {
    render() {
        return (
            <div className="gameOanTuTi">
                <div className="row">
                    <div className="col-4">
                        <OanTuTi></OanTuTi>
                    </div>
                    <div className="col-4">
                        <KetQua></KetQua>
                        <button onClick={() => {
                            this.props.playGame()
                        }} className="btn btn-success text-center">PLAY GAME</button>
                    </div>
                    <div className="col-4">
                        <NutPlay></NutPlay>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProp = (dispatch)=> {
    return {
        playGame: ()  =>{ 
            dispatch({
                type:'PLAY_GAME'
            })
            dispatch({
                type:'KET_QUA'
            })
        }
        
    }
}
export default connect(null,mapDispatchToProp)(GameOanTi)
