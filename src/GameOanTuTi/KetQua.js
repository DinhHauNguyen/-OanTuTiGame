import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div className="mt-5">
                <div>
                    <div>
                        <div className="text-center display-4 text-warning">
                            <span className="text-warning">{this.props.ketQua}</span>
                        </div>
                        <div style={{ fontSize: '30px' }} className="text-center text-success">
                            SỐ BÀN THẮNG : <span className="text-warning">{this.props.soBanThang}</span>
                        </div>
                        <div style={{ fontSize: '30px' }} className="text-center text-success">
                            SỐ BÀN CHƠI : <span className="text-warning">{this.props.tongSoBanChoi}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ketQua: state.stateGameOanTuTi.ketQua,
        soBanThang: state.stateGameOanTuTi.soBanThang,
        tongSoBanChoi: state.stateGameOanTuTi.tongSoBanChoi
    }
}
export default connect(mapStateToProps)(KetQua)
