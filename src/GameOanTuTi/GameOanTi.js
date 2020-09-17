import React, { Component } from 'react'
import './gameStyle/gameStyle.css'
import OanTuTi from './OanTuTi'
import KetQua from './KetQua'
import NutPlay from './NutPlay'

export default class GameOanTi extends Component {
    render() {
        return (
            <div className="gameOanTuTi">
                <div className="row">
                    <div className="col-4">
                        <OanTuTi></OanTuTi>
                    </div>
                    <div className="col-4">
                        <KetQua></KetQua>
                    </div>
                    <div className="col-4">
                        <NutPlay></NutPlay>
                    </div>
                </div>
            </div>
        )
    }
}
