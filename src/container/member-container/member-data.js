import DucAnh from '../../assets/image/members/Duc Anh.jpg';
import MinhHieu from '../../assets/image/members/Minh Hieu.jpg';
import Yen from '../../assets/image/members/Yen.jpg';
import Quynh from '../../assets/image/members/Quynh.jpg';
import Thang from '../../assets/image/members/Thang.jpg';
import Tung from '../../assets/image/members/Tung.jpg';
import Thien from '../../assets/image/members/Thien.jpg';
import Loc from '../../assets/image/members/Loc.jpg';


const MEMBER_DATA = {
    president: {
        name: 'Trần Đức Anh',
        position: 'Chủ nhiệm',
        imageUrl: DucAnh
    },
    techniqueVicePresident: {
        name: 'Nguyễn Minh Hiếu',
        position: 'Phó chủ nhiệm kỹ thuật',
        imageUrl: MinhHieu
    },
    mediaVicePresident: {
        name: 'Bùi Thị Hải Yến',
        position: 'Phó chủ nhiệm truyền thông',
        imageUrl: Yen
    },
    personalManager: {
        name: 'Nguyễn Thị Xuân Quỳnh',
        position: 'Quản lý nhân sự',
        imageUrl: Quynh
    },
    mediaManager: {
        name: 'Phạm Văn Thắng',
        position: 'Trưởng mảng truyền thông',
        imageUrl: Thang
    },
    photoManager: {
        name: 'Bùi Thanh Tùng',
        position: 'Trưởng mảng ảnh',
        imageUrl: Tung
    },
    videoManager: {
        name: 'Nguyễn Đức Thiện',
        position: 'Trưởng mảng video',
        imageUrl: Thien
    },
    foreignAffairsManager: {
        name: 'Phùng Thế Gia Lộc',
        position: 'Trưởng ban đối ngoại',
        imageUrl: Loc
    }
};

export default MEMBER_DATA;