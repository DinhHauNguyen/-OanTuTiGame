const mangOanTuTi = [
    { ma: 'keo', hinhAnh: './img/gameoantuxi/keo.png', datCuoc: true  },
    { ma: 'bua', hinhAnh: './img/gameoantuxi/bua.png', datCuoc: false  },
    { ma: 'bao', hinhAnh: './img/gameoantuxi/bao.png', datCuoc: false  },
]

const stateDefault = {
    banChon: [
        { ma: 'keo', hinhAnh: './img/gameoantuxi/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/gameoantuxi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/gameoantuxi/bao.png', datCuoc: false },
    ],
    ketQua: 'Im Iron Man, I love you 3000',
    soBanThang: 0,
    tongSoBanChoi: 0,
    mangOanTuTi:{ ma: 'keo', hinhAnh: './img/gameoantuxi/keo.png' },
}

export const gameOanTuTiReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'CHON_DAT_CUOC': {
            let mangDatCuocUpdate = [...state.banChon];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
                return { ...item, datCuoc: false }
            })
            let index = mangDatCuocUpdate.findIndex(qc => qc.ma === action.maCuoc);
            if (index !== -1) {
                mangDatCuocUpdate[index].datCuoc = true;
            }
            state.banChon = mangDatCuocUpdate;
            return { ...state }
        }
        case 'PLAY_GAME': {
                let soNgauNhien = Math.floor(Math.random() * 3);
                let oanTuTiNgauNhien = state.banChon[soNgauNhien];
            state.mangOanTuTi = oanTuTiNgauNhien;

            return { ...state };
        }
        case 'KET_QUA': {
            let banChoi = state.banChon.find(bc => bc.datCuoc === true);
            let mayChoi = state.mangOanTuTi;
            switch (banChoi.ma) {
                case 'keo':
                    if (mayChoi.ma === 'keo') {
                        state.ketQua = 'Hoà Nhé !';
                    } else if (mayChoi.ma === 'bua') {
                        state.ketQua = 'Thua Gồi !!!'
                    } else {
                        state.ketQua = 'Im Iron Man, I love you 3000';
                        state.soBanThang += 1
                    } break;
                case 'bua':
                    if (mayChoi.ma === 'keo') {
                        state.ketQua = 'Im Iron Man, I love you 3000';
                        state.soBanThang += 1;
                    } else if (mayChoi.ma === 'bua') {
                        state.ketQua = 'Hoà Nhé !'
                    } else {

                        state.ketQua = 'Thua Gồi !!!'
                    } break;
                case 'bao':
                    if (mayChoi.ma === 'keo') {
                        state.ketQua = 'Thua Gồi !!';
                    } else if (mayChoi.ma === 'bua') {
                        state.ketQua = 'Im Iron Man, I love you 3000';
                        state.soBanThang += 1;
                        
                    } else {

                        state.ketQua = 'Hoà Nhé !'
                    } break;
                default: state.ketQua = 'Im Iron Man, I love you 3000';
                
            }
            state.tongSoBanChoi += 1;
            return { ...state }
            
        }
        default: return { ...state }
    }
}
// export default gameOanTuTiReducer;