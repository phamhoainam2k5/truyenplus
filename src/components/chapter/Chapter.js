import "./Chapter.css"
import {Dialog} from "@mui/material";
import {Close, Delete} from "@mui/icons-material";
import {useState} from "react";
function Chapter() {
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleCloseEditModal = () => {

        setOpenEditModal(false);
    };
    const handleEditClick = () => {

        setOpenEditModal(true);
    };
    return (

        <div
            className="vung-doc"
            id="vungdoc"
            style={{backgroundColor: "#fafaf3", color: "#000000", fontSize: 18}}
        >
            <div className="chapter_wrap">
                <div className="chapter_control" id="gotochap">
                    <a href="#" className="back disabled">
                        &lt;&lt; Chương trước
                    </a>
                    <a onClick={handleEditClick} className="btn-dschuong"/>
                    <a href="/de-ba/chuong-2/974743.html" className="next">
                        Chương tiếp &gt;&gt;
                    </a>
                </div>
                <div>
                    <h1 className="current-book">
                        <a href="/de-ba"> Bồ công anh nở muộn </a>{" "}
                        <span className="current-chapter">Chương 1: Cậu ấy</span>
                    </h1>
                </div>
                <div className="clearfix"/>
            </div>
            <div className="truyen">

                Cậu ấy!

                Đối với tôi, là người bạn thân nhất!



            </div>
            <div className="chapter_wrap">
                <div className="clearfix"/>
                <div className="chapter_control control--last">
                    <a href="/de-ba/chuong-2/974743.html" className="next">
                        Chương tiếp &gt;&gt;
                    </a>
                </div>
                <div className="clearfix"/>
            </div>
            <Dialog open={openEditModal} onClose={handleCloseEditModal}>

                <div id="browse-chapter">

                    <div className="title-list-chapter"><span>Danh sách chương</span>
                        <Close className="button b-close" onClick={handleCloseEditModal}/>

                    </div>
                    <div className="content" >
                        <div className="b-ajax-wrapper">
                            <div className="chapter-list">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12"><span><a href="/de-ba/chuong-1/974742.html">Chương 1: Tam Quỷ Gia (1)</a></span><span><a
                                        href="/de-ba/chuong-2/974743.html">Chương 2: Tam Quỷ Gia (2)</a></span><span><a
                                        href="/de-ba/chuong-3/974744.html">Chương 3: Tẩy Nhan Cổ Phái (1)</a></span><span><a
                                        href="/de-ba/chuong-4/974745.html">Chương 4: Tẩy Nhan Cổ Phái (2)</a></span><span><a
                                        href="/de-ba/chuong-5/974746.html">Chương 5: Vị hôn thê (1)</a></span><span><a
                                        href="/de-ba/chuong-6/974747.html">Chương 6: Vị hôn thê (2)</a></span><span><a
                                        href="/de-ba/chuong-7/974748.html">Chương 7: Cửu Thánh yêu môn (1)</a></span><span><a
                                        href="/de-ba/chuong-8/974749.html">Chương 8: Cửu Thánh yêu môn (2)</a></span><span><a
                                        href="/de-ba/chuong-9/974750.html">Chương 9: Giết người không chớp mắt (1)</a></span><span><a
                                        href="/de-ba/chuong-10/974751.html">Chương 10: Giết người không chớp mắt (2)</a></span><span><a
                                        href="/de-ba/chuong-11/974752.html">Chương 11: Là ta ngang ngược, ương ngạnh (1)</a></span><span><a
                                        href="/de-ba/chuong-12/974753.html">Chương 12: Là ta ngang ngược, ương ngạnh (2)</a></span><span><a
                                        href="/de-ba/chuong-13/974754.html">Chương 13: Rừng Loạn Tâm (thượng)</a></span><span><a
                                        href="/de-ba/chuong-14/974755.html">Chương 14: Rừng Loạn Tâm (hạ)</a></span><span><a
                                        href="/de-ba/chuong-15/974756.html">Chương 15: Kì tích trong tay ta (thượng)</a></span><span><a
                                        href="/de-ba/chuong-16/974757.html">Chương 16: Kỳ tích trong tay ta (hạ)</a></span><span><a
                                        href="/de-ba/chuong-17/974758.html">Chương 17: Luân Nhật Yêu Hoàng (Thượng)</a></span><span><a
                                        href="/de-ba/chuong-18/974759.html">Chương 18: Luân Nhật Yêu Hoàng (Hạ)</a></span><span><a
                                        href="/de-ba/chuong-19/974760.html">Chương 19: Ương ngạnh không cần nhìn địa phương (thượng)</a></span><span><a
                                        href="/de-ba/chuong-20/974761.html">Chương 20: Ngang ngạnh bất cứ đâu! (Hạ)</a></span><span><a
                                        href="/de-ba/chuong-21/974762.html">Chương 21: Thánh Động (thượng)</a></span><span><a
                                        href="/de-ba/chuong-22/974763.html">Chương 22: Thánh động (hạ)</a></span><span><a
                                        href="/de-ba/chuong-23/974764.html">Chương 23: Cửu Thánh công chúa (Thượng)</a></span><span><a
                                        href="/de-ba/chuong-24/974765.html">Chương 24: Cửu Thánh công chúa (hạ)</a></span><span><a
                                        href="/de-ba/chuong-25/974766.html">Chương 25: Thần Nha Phong (Thượng)</a></span><span><a
                                        href="/de-ba/chuong-26/974767.html">Chương 26: Thần Nha Phong (hạ)</a></span><span><a
                                        href="/de-ba/chuong-27/974768.html">Chương 27: Nguyệt Qua Dương Luân Công (Thượng)</a></span><span><a
                                        href="/de-ba/chuong-28/974769.html">Chương 28: Nguyệt Qua Dương Luân Công (Hạ)</a></span><span><a
                                        href="/de-ba/chuong-29/974770.html">Chương 29: Mười hai Tiên Thể (Thượng)</a></span><span><a
                                        href="/de-ba/chuong-30/974771.html">Chương 30: Mười hai Tiên Thể (Hạ)</a></span><span><a
                                        href="/de-ba/chuong-31/974772.html">Chương 31: Côn Bằng Lục Biến (thượng)</a></span><span><a
                                        href="/de-ba/chuong-32/974773.html">Chương 32: Côn Bằng Lục Biến (hạ)</a></span><span><a
                                        href="/de-ba/chuong-33/974774.html">Chương 33: Kỳ Môn Đao (thượng)</a></span><span><a
                                        href="/de-ba/chuong-34/974775.html">Chương 34: Kỳ Môn Đao (hạ)</a></span><span><a
                                        href="/de-ba/chuong-35/974776.html">Chương 35: Trấn Ngục Thần Thể (thượng)</a></span><span><a
                                        href="/de-ba/chuong-36/974777.html">Chương 36: Trấn Ngục Thần Thể (hạ)</a></span><span><a
                                        href="/de-ba/chuong-37/974778.html">Chương 37: Đồ Bất Ngữ (thượng)</a></span><span><a
                                        href="/de-ba/chuong-38/974779.html">Chương 38: Đồ Bất Ngữ (hạ)</a></span><span><a
                                        href="/de-ba/chuong-39/974780.html">Chương 39: Công chúa giá lâm (thượng)</a></span><span><a
                                        href="/de-ba/chuong-40/974781.html">Chương 40: Công chúa giá lâm (hạ)</a></span><span><a
                                        href="/de-ba/chuong-41/974782.html">Chương 41: Công chúa cũng chỉ có thể làm tỳ nữ (thượng)</a></span><span><a
                                        href="/de-ba/chuong-42/974783.html">Chương 42: Công chúa cũng chỉ có thể làm tỳ nữ (hạ)</a></span><span><a
                                        href="/de-ba/chuong-43/974784.html">Chương 43: Mưu lược của Đại trưởng lão (1)</a></span><span><a
                                        href="/de-ba/chuong-44/974785.html">Chương 44: Đại trưởng lão mưu lược (2)</a></span><span><a
                                        href="/de-ba/chuong-45/974786.html">Chương 45: Đại trưởng lão mưu lược (3)</a></span><span><a
                                        href="/de-ba/chuong-46/974787.html">Chương 46: Không phục liền đánh đến ngươi chịu phục (1)</a></span><span><a
                                        href="/de-ba/chuong-47/974788.html">Chương 47: Không phục liền đánh đến ngươi chịu phục (2)</a></span><span><a
                                        href="/de-ba/chuong-48/974789.html">Chương 48: Không phục liền đánh đến ngươi chịu phục (3)</a></span><span><a
                                        href="/de-ba/chuong-75/974790.html">Chương 75: Truyền Đạo Thụ Nghiệp (1)</a></span><span><a
                                        href="/de-ba/chuong-76/974791.html">Chương 76: Truyền Đạo Thụ Nghiệp (2)</a></span>
                                    </div>
                                    <div className="col-md-6 col-sm-12"><span><a href="/de-ba/chuong-77/974792.html">Chương 77: Truyền Đạo Thụ Nghiệp (3)</a></span><span><a
                                        href="/de-ba/chuong-78/974793.html">Chương 78: Thụ Đạo Hung Tàn Nhất (1)</a></span><span><a
                                        href="/de-ba/chuong-79/974794.html">Chương 79: Thụ Đạo Hung Tàn Nhất (2)</a></span><span><a
                                        href="/de-ba/chuong-80/974795.html">Chương 80: Thụ Đạo Hung Tàn Nhất (3)</a></span><span><a
                                        href="/de-ba/chuong-81/974796.html">Chương 81: Thụ Đạo Hung Tàn Nhất (4)</a></span><span><a
                                        href="/de-ba/chuong-82/974797.html">Chương 82: Tiên Vương Giảng Kinh Cùng Lắm Cũng Chỉ Như Thế Này Thôi (1)</a></span><span><a
                                        href="/de-ba/chuong-83/974798.html">Chương 83: Tiên Vương Giảng Kinh Cùng Lắm Cũng Chỉ Như Thế Này Thôi (2)</a></span><span><a
                                        href="/de-ba/chuong-84/974799.html">Chương 84: Tiên Vương Giảng Kinh Cùng Lắm Cũng Chỉ Như Thế Này Thôi (3)</a></span><span><a
                                        href="/de-ba/chuong-85/974800.html">Chương 85: Âm Dương Huyết Hải (1)</a></span><span><a
                                        href="/de-ba/chuong-86/974801.html">Chương 86: Âm Dương Huyết Hải (2)</a></span><span><a
                                        href="/de-ba/chuong-87/974802.html">Chương 87: Âm Dương Huyết Hải (3)</a></span><span><a
                                        href="/de-ba/chuong-88/974803.html">Chương 88: Lô Thần (1)</a></span><span><a
                                        href="/de-ba/chuong-89/974804.html">Chương 89: Lô Thần (2)</a></span><span><a
                                        href="/de-ba/chuong-90/974805.html">Chương 90: Lô Thần (3)</a></span><span><a
                                        href="/de-ba/chuong-91/974806.html">Chương 91: Lô Thần (4)</a></span><span><a
                                        href="/de-ba/chuong-92/974807.html">Chương 92: Dược Sư, Đây Chẳng Qua Là Hứng Thú (1)</a></span><span><a
                                        href="/de-ba/chuong-93/974808.html">Chương 93: Dược Sư, Đây Chẳng Qua Là Hứng Thú (2)</a></span><span><a
                                        href="/de-ba/chuong-94/974809.html">Chương 94: Dược Sư, Đây Chẳng Qua Là Hứng Thú (3)</a></span><span><a
                                        href="/de-ba/chuong-95/974810.html">Chương 95: Âm Mưu (1)</a></span><span><a
                                        href="/de-ba/chuong-96/974811.html">Chương 96: Âm Mưu (2)</a></span><span><a
                                        href="/de-ba/chuong-97/974812.html">Chương 97: Âm Mưu (3)</a></span><span><a
                                        href="/de-ba/chuong-98/974813.html">Chương 98: Dương Thần Uy (1)</a></span><span><a
                                        href="/de-ba/chuong-99/974814.html">Chương 99: Dương thần uy (2)</a></span><span><a
                                        href="/de-ba/chuong-100/974815.html">Chương 100: Dương thần uy (3)</a></span><span><a
                                        href="/de-ba/chuong-101/974816.html">Chương 101: Chiến Thần Quyết (1)</a></span><span><a
                                        href="/de-ba/chuong-102/974817.html">Chương 102: Chiến Thần Quyết (2)</a></span><span><a
                                        href="/de-ba/chuong-103/974818.html">Chương 103: Chiến Thần Quyết (3)</a></span><span><a
                                        href="/de-ba/chuong-104/974819.html">Chương 104: Chiến Thần Quyết (4)</a></span><span><a
                                        href="/de-ba/chuong-105/974820.html">Chương 105: Lật tay thành mây trở tay thành mưa (1)</a></span><span><a
                                        href="/de-ba/chuong-106/974821.html">Chương 106: Lật tay thành mây trở tay thành mưa (2)</a></span><span><a
                                        href="/de-ba/chuong-107/974822.html">Chương 107: Lật tay thành mây trở tay thành mưa (3)</a></span><span><a
                                        href="/de-ba/chuong-108/974823.html">Chương 108: Tử Dương Thập Nhật Công (1)</a></span><span><a
                                        href="/de-ba/chuong-109/974824.html">Chương 109: Tử Dương Thập Nhật Công (2)</a></span><span><a
                                        href="/de-ba/chuong-110/974825.html">Chương 110: Tử Dương Thập Nhật Công (3)</a></span><span><a
                                        href="/de-ba/chuong-111/974826.html">Chương 111: Bày mưu nghĩ kế (1)</a></span><span><a
                                        href="/de-ba/chuong-112/974827.html">Chương 112: Bày mưu nghĩ kế (2)</a></span><span><a
                                        href="/de-ba/chuong-113/974828.html">Chương 113: Bày mưu nghĩ kế (3)</a></span><span><a
                                        href="/de-ba/chuong-114/974829.html">Chương 114: Quỷ lâu (1)</a></span><span><a
                                        href="/de-ba/chuong-115/974830.html">Chương 115: Quỷ lâu (2)</a></span><span><a
                                        href="/de-ba/chuong-116/974831.html">Chương 116: Quỷ lâu (3)</a></span><span><a
                                        href="/de-ba/chuong-117/974832.html">Chương 117: Quỷ lâu (4)</a></span><span><a
                                        href="/de-ba/chuong-118/974833.html">Chương 118: Tô Ngọc Hà (1)</a></span><span><a
                                        href="/de-ba/chuong-119/974834.html">Chương 119: Tô Ngọc Hà (2)</a></span><span><a
                                        href="/de-ba/chuong-120/974835.html">Chương 120: Tô Ngọc Hà (3)</a></span><span><a
                                        href="/de-ba/chuong-121/974836.html">Chương 121: Binh lâm dưới thành (1)</a></span><span><a
                                        href="/de-ba/chuong-122/974837.html">Chương 122: Binh lâm dưới thành (2)</a></span><span><a
                                        href="/de-ba/chuong-123/974838.html">Chương 123: Binh lâm dưới thành (3)</a></span><span><a
                                        href="/de-ba/chuong-124/974839.html">Chương 124: Phất tay giết ngàn địch (1)</a></span><span><a
                                        href="/de-ba/chuong-125/974840.html">Chương 125: Phất tay giết ngàn địch (2)</a></span><span><a
                                        href="/de-ba/chuong-126/974841.html">Chương 126: Phất tay giết ngàn địch (3)</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </Dialog>

        </div>

    )
}

export default Chapter