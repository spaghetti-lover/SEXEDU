let questions = [
    {
        numb: 1,
        question: 'Dấu hiệu nào sau đây ở con gái đánh dấu sự chính thức dậy thì?',
        answer: 'Có kinh nguyệt.',
        options: [
            'Nổi mụn trứng cá.',
            'Có kinh nguyệt.',
            'Ngực to nhanh.',
            'Chân to ra',
            'Ngủ nhiều'
        ]
    },
    {
        numb: 2,
        question: 'Dấu hiệu nào sau đây ở con trai đánh dấu sự chính thức dậy thì?',
        answer: 'Xuất hiện mộng tinh.',
        options: [
            'Cơ thể béo nhanh.',
            'Thấp đi',
            'Xuất hiện mộng tinh.',
            'Ngủ nhiều',
            'Đẹp trai hơn'
        ]
    },
    {
        numb: 3,
        question: 'Lắng nghe cơ thể, ăn khi cảm thấy đói và duy trì thói quen ăn uống có lợi cho sức khoẻ, tham gia thể dục thể thao giúp:',
        answer: 'Trẻ vị thành niên tăng chiều cao tối đa, thể trạng và sức khoẻ tốt.',
        options: [
            'Thừa cân, béo phì và có nguy cơ ảnh hưởng xấu đến sức khoẻ sinh sản khi trưởng thành.',
            'Không cần quan tâm',
            'Trẻ vị thành niên tăng chiều cao tối đa, thể trạng và sức khoẻ tốt.',
            'Không giúp ích gì.',
            'Nên ăn nhiều đồ ăn nhanh để tiết kiệm thời gian dành cho học tập.'
        ]
    },
    {
        numb: 4,
        question: 'Trong quá trình dậy thì ở nam giới, dấu hiệu nào thường xuất hiện trước hết?',
        answer: 'Sự tăng cân đột ngột',
        options: [
            'Sự phát triển của cơ thể',
            'Sự thay đổi trong giấc ngủ',
            'Sự quan tâm đến việc trang điểm',
            'Sự thích tham gia các hoạt động thể chất',
            'Sự tăng cân đột ngột'
        ]
    },
    {
        numb: 5,
        question: 'Trong quá trình dậy thì ở nam giới, dấu hiệu nào thường xuất hiện trước hết?',
        answer: 'Sự tăng cân đột ngột',
        options: [
            'Sự phát triển của cơ thể',
            'Sự thay đổi trong giấc ngủ',
            'Sự quan tâm đến việc trang điểm',
            'Sự thích tham gia các hoạt động thể chất',
            'Sự tăng cân đột ngột'
        ]
    },
    {
        numb: 6,
        question: 'Trong quan hệ tình dục an toàn, biện pháp nào sau đây là phổ biến nhất để ngăn ngừa việc lây nhiễm các bệnh truyền nhiễm qua đường tình dục?',
        answer: 'Đặt bao cao su',
        options: [
            'Sử dụng thuốc tránh thai',
            'Đặt bao cao su',
            'Tiêm vaccine',
            'Kiểm tra y tế định kỳ',
            'Tăng cường vệ sinh cá nhân'
        ]
    },
    {
        numb: 7,
        question: 'Trong giáo dục giới tính, mục tiêu chính của việc giảng dạy về quan hệ tình dục là gì?',
        answer: 'Thúc đẩy sự chủ động và an toàn trong quan hệ tình dục',
        options: [
            'Khuyến khích hành vi tình dục sớm',
            'Thúc đẩy sự chủ động và an toàn trong quan hệ tình dục',
            'Ngăn chặn hoàn toàn hành vi tình dục',
            'Chỉ ra những hậu quả tiêu cực của tình dục trước hôn nhân',
            'Tăng cường sức khỏe cả về thể chất và tinh thần'
        ]
    },
    {
        numb: 8,
        question: 'Trong việc truyền đạt kiến thức về giới tính, phương pháp nào sau đây thường được coi là hiệu quả nhất cho học sinh trẻ?',
        answer: 'Tổ chức các hoạt động thực hành và tương tác',
        options: [
            'Giảng dạy lý thuyết từ sách giáo khoa',
            'Thảo luận nhóm trong lớp học',
            'Sử dụng hình ảnh và đồ họa minh họa',
            'Tổ chức buổi thảo luận với phụ huynh',
            'Tổ chức các hoạt động thực hành và tương tác'
        ]
    },
    {
        numb: 9,
        question: 'Trong quá trình giáo dục giới tính, tầm quan trọng của việc khuyến khích sự tự tin và tôn trọng bản thân ở học sinh là gì?',
        answer: 'Tạo điều kiện cho họ dễ dàng chia sẻ và thảo luận về các vấn đề liên quan đến giới tính',
        options: [
            'Giúp họ hiểu rõ về các nguy cơ của quan hệ tình dục không an toàn',
            'Tạo điều kiện cho họ dễ dàng chia sẻ và thảo luận về các vấn đề liên quan đến giới tính',
            'Hỗ trợ họ phát triển kỹ năng giao tiếp và quan hệ xã hội lành mạnh',
            'Giúp họ nhận biết và phản đối các hành vi tình dục bất lợi và không an toàn',
            'Khuyến khích họ tìm kiếm thông tin và hỗ trợ từ các nguồn đáng tin cậy'
        ]
    },
    {
        numb: 10,
        question: 'Trong giáo dục giới tính, việc đảm bảo tính phổ quát và không phân biệt đối xử dựa trên giới tính là quan trọng vì lý do gì?',
        answer: 'Tất cả các phương án trên',
        options: [
            'Giảm nguy cơ lạm dụng tình dục và bạo lực trong mối quan hệ',
            'Tạo điều kiện cho sự phát triển sức khỏe tinh thần và xã hội toàn diện',
            'Xây dựng môi trường học tập và làm việc công bằng và công bằng',
            'Khuyến khích sự phát triển cá nhân và tìm kiếm sự đa dạng',
            'Tất cả các phương án trên'
        ]
    },
];