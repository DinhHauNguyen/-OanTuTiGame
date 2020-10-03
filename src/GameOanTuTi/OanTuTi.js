import React, { Component } from 'react'
import { connect } from 'react-redux'

class OanTuTi extends Component {

    render() {
        console.log(this.props.banChon)
        return (
            <div className=" pt-5 pb-2 bx">
                <div>
                    <div>
                        <img style={{ backgroundColor: "white", padding: 40, width: "40%", border: '2px solid green' }} src={this.props.banChon.find(item => item.datCuoc === true).hinhAnh} alt={this.props.banChon.find(item => item.datCuoc === true).hinhAnh}></img>
                    </div>
                    <div className="display-4 text-center text-warning">
                        <img style={{ width: "80%", height: "80%" }} src="./img/gameoantuxi/player.png"></img>
                    </div>
                    <div>
                        {this.props.banChon.map((banChon, index) => {
                            let border = {};
                            if (banChon.datCuoc){
                                border = {border:'2px solid orange'}
                            }
                            return <img onClick={() => {
                                this.props.chonDatCuoc(banChon.ma)
                            }} key={index} className="mx-2"  style={{ backgroundColor: 'white', width: 50, borderRadius: 8 }} src={banChon.hinhAnh}></img>
                        })}
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
const mapDispatchToProps = (dispatch) => {
    return {
        chonDatCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_DAT_CUOC',
                maCuoc
            })
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OanTuTi)
