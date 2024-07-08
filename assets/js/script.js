let currentPage = 0;
const itemsPerPage = 4;
const items = document.querySelectorAll('.inner-menu ul .numb');

function showItems() {
    items.forEach((item, index) => {
        item.classList.remove('show');
        if (index >= currentPage * itemsPerPage && index < (currentPage + 1) * itemsPerPage) {
            item.classList.add('show');
        }
    });
}

function nextPage() {
    if ((currentPage + 1) * itemsPerPage < items.length) {
        currentPage++;
        showItems();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showItems();
    }
}

// Initial display
showItems();

function toggleMenu() {
    const menu = document.querySelector('.inner-menu');
    const overlay = document.querySelector('.overlay');
    const ul = document.querySelector('.inner-menu ul');
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    ul.classList.toggle('show');
}

document.querySelectorAll('.inner-menu a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        const menu = document.querySelector('.inner-menu');
        const overlay = document.querySelector('.overlay');
        const ul = document.querySelector('.inner-menu ul');
        menu.classList.remove('show');
        overlay.classList.remove('show');
        ul.classList.remove('show');
    });
});

// Bars


// Description

document.querySelectorAll('.show-description').forEach(button => {
  button.addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    var jobDescription = document.getElementById('job-description');
    var description = '';

    switch (this.getAttribute('data-description')) {
      case 'manager-description':
        description = `
          <h2>Mô tả công việc - Quản lý nhân sự</h2>
          <p>• Quản lý và điều hành công việc của bộ phận nhân sự.</p>
          <p>• Tuyển dụng và đào tạo nhân viên mới.</p>
          <p>• Xây dựng chính sách và quy trình làm việc.</p>
          <h2>Yêu cầu công việc</h2>
          <p>• Tinh thần trách nhiệm cao, chịu áp lực tốt</p>
          <p>• Có kiến thức và kinh nghiệm quản lý nhân sự.</p>
          <p>• Kỹ năng lãnh đạo và quản lý thời gian tốt.</p>
          <h2>Phúc lợi</h2>
          <p>• Chăm sóc sức khỏe</p>
          <p>• Được đào tạo, thăng tiến trong công việc</p>
          <p>• Du lịch</p>
          <p>• Tăng lương</p>
          <button id="close-description">Đóng</button>
        `;
        break;
      case 'teacher-description':
        description = `
          <h2>Mô tả công việc - Giáo viên</h2>
          <p>• Giảng dạy các môn học theo chương trình của trung tâm.</p>
          <p>• Chuẩn bị bài giảng và tài liệu giảng dạy.</p>
          <p>• Đánh giá và hỗ trợ học viên.</p>
          <h2>Yêu cầu công việc</h2>
          <p>• Tốt nghiệp đại học chuyên ngành liên quan.</p>
          <p>• Có kinh nghiệm giảng dạy là một lợi thế.</p>
          <p>• Kỹ năng giao tiếp và truyền đạt tốt.</p>
          <h2>Phúc lợi</h2>
          <p>• Chăm sóc sức khỏe</p>
          <p>• Được đào tạo</p>
          <p>• Du lịch</p>
          <p>• Tăng lương</p>
          <button id="close-description">Đóng</button>
        `;
        break;
      case 'assistant-description':
        description = `
          <h2>Mô tả công việc - Trợ giảng</h2>
          <p>• Hỗ trợ giáo viên trong quá trình giảng dạy.</p>
          <p>• Chuẩn bị tài liệu và thiết bị giảng dạy.</p>
          <p>• Giải đáp thắc mắc của học viên.</p>
          <h2>Yêu cầu công việc</h2>
          <p>• Độ tuổi 20 – 25 tuổi, ưu tiên sinh viên năm 3, 4 hoặc mới tốt nghiệp.</p>
          <p>• Giáo viên, sinh viên đang học hoặc tốt nghiệp từ các trường phù hợp với chuyên ngành giảng dạy.</p>
          <p>• Thái độ làm việc cầu tiến, chuyên nghiệp, hoà đồng với môi trường mới.</p>
          <h2>Phúc lợi</h2>
          <p>• Chăm sóc sức khỏe</p>
          <p>• Được đào tạo, thăng tiến trong công việc</p>
          <p>• Du lịch</p>
          <p>• Tăng lương</p>
          <button id="close-description">Đóng</button>
        `;
        break;
      case 'reception-description':
        description = `
          <h2>Mô tả công việc - Lễ tân</h2>
          <p>• Tư vấn trực tiếp các khoá học tại trung tâm cho học viên, thuyết phục học viên đăng kí các khoá học tại trung tâm. (Không phải tự tìm kiếm học viên)</p>
          <p>• Hướng dẫn học viên vào lớp học, sắp xếp lịch học</p>
          <p>• Thực hiện các công việc chăm sóc học viên, giải đáp thắc mắc của học viên.</p>
          <h2>Yêu cầu công việc</h2>
          <p>• Nữ, khoảng 18 đến 35 tuổi.</p>
          <p>• Khả năng giao tiếp, ứng xử linh hoạt, niềm nở, vui vẻ.</p>
          <p>• Chăm chỉ, cẩn thận và có trách nhiệm trong công việc.</p>
          <p>• Cam kết làm việc tại trung tâm TỐI THIỂU 6 tháng.</p>
          <h2>Phúc lợi</h2>
          <p>• Chăm sóc sức khỏe</p>
          <p>• Được đào tạo, thăng tiến trong công việc</p>
          <p>• Du lịch</p>
          <p>• Tăng lương</p>
          <button id="close-description">Đóng</button>
        `;
        break;
    }

    jobDescription.innerHTML = description;
    overlay.style.display = 'flex';

    document.getElementById('close-description').addEventListener('click', function() {
      overlay.style.display = 'none';
    });
  });
});


// End Description


