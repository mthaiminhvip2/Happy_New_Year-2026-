// var buttonActive = document.querySelector('.button button');
// buttonActive.onclick = function() {
//     // 1. Tối ưu việc active các bông hoa bằng vòng lặp thay vì viết từng dòng
//     document.querySelectorAll('.flower-img').forEach(flower => {
//         flower.classList.toggle("active");
//     });

//     // 2. Các phần tử khác giữ nguyên
//     var selectors = [
//         '.circle', '.box-slider_img1', '.cat', '.box-number', 
//         '.box-button', '.rhombus:nth-child(1)', '.rhombus:nth-child(2)', 
//         '.rhombus-img', '.mail'
//     ];
    
//     selectors.forEach(selector => {
//         var el = document.querySelector(selector);
//         if(el) el.classList.toggle("active");
//     });
// };

// // --- Sự kiện Click toàn màn hình để bắn pháo hoa ---
// document.addEventListener('click', function(e) {
//     // Kiểm tra xem thư viện đã load chưa
//     if (typeof confetti === 'function') {
//         confetti({
//             particleCount: 100,
//             spread: 70,
//             origin: {
//                 x: e.clientX / window.innerWidth,
//                 y: e.clientY / window.innerHeight
//             },
//             colors: ['#ff0000', '#ffd700', '#ffffff', '#ff4500'], // Màu đỏ, vàng, trắng đặc trưng Tết
//             zIndex: 9999 // Đảm bảo pháo hoa hiện trên cùng
//         });
//     }
// });

// // --- Giữ nguyên các phần code cũ của bạn ---
// var mail = document.querySelector(".mail");
// var slider3 = document.querySelector(".slider3");
// var closeSlider3 = document.querySelector(".fa-xmark");

// if(mail) {
//     mail.onclick = function() {
//         slider3.classList.add("active");
//     };
// }

// if(closeSlider3) {
//     closeSlider3.addEventListener('click', function() {
//         slider3.classList.remove('active');
//     });
// }

// // ------ Audio ------------
// var buttonSong = document.querySelector('.button');
// var mySong = document.getElementById("song");
// if(buttonSong && mySong) {
//     buttonSong.onclick = function() {
//         if(mySong.paused) {
//             mySong.play();
//         }
//     };
// }

// // ------ Slider ------------
// document.addEventListener("DOMContentLoaded", function() {
//     const images = document.querySelectorAll('.slider-img');
//     let currentIndex = 0;

//     if (images.length > 0) {
//         setInterval(() => {
//             images[currentIndex].classList.remove('active');
//             currentIndex = (currentIndex + 1) % images.length;
//             images[currentIndex].classList.add('active');
//         }, 3000);
//     }
// });
// function rainFlowers() {
//     var end = Date.now() + (100 * 1000); // Hiệu ứng chạy trong 100 giây, bạn có thể tăng thêm

//     // Định nghĩa các tông màu hoa (Vàng cho hoa mai, hồng cho hoa đào)
//     var colors = ['#FFD700', '#FFA500', '#FF4500', '#FFFACD'];

//     (function frame() {
//         confetti({
//             particleCount: 2,       // Mỗi khung hình rơi 2 hạt để không làm nặng máy
//             angle: 90,              // Rơi từ trên xuống (90 độ)
//             spread: 360,            // Lan tỏa khắp màn hình
//             origin: { x: Math.random(), y: -0.1 }, // Xuất phát ngẫu nhiên từ phía trên màn hình
//             colors: colors,
//             shapes: ['circle'],     // Hình tròn giả làm cánh hoa
//             gravity: 0.5,           // Tốc độ rơi (thấp = rơi chậm)
//             scalar: 0.7,            // Kích thước hạt hoa
//             drift: Math.random() - 0.5 // Tạo độ bay lướt sang trái/phải như có gió
//         });

//         if (Date.now() < end) {
//             requestAnimationFrame(frame);
//         }
//     }());
// }

// // Gọi hàm này khi người dùng nhấn nút mở đầu tiên
// var buttonActive = document.querySelector('.button button');
// buttonActive.addEventListener('click', function() {
//     rainFlowers(); // Bắt đầu cho hoa rơi khi nhấn nút
// });
// --- 1. XỬ LÝ SỰ KIỆN CLICK CHUỘT BẮN PHÁO HOA ---
document.addEventListener('click', function(e) {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 80,
            spread: 70,
            origin: {
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            },
            colors: ['#ff0000', '#ffd700', '#ffffff', '#ff4500'],
            zIndex: 9999
        });
    }
});

// --- 2. HÀM TẠO HIỆU ỨNG HOA RƠI ---
function rainFlowers() {
    var end = Date.now() + (180 * 1000); // Chạy trong 3 phút
    var colors = ['#FFD700', '#FFA500', '#FF4500', '#FFFACD']; // Màu hoa mai

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 90,
            spread: 360,
            origin: { x: Math.random(), y: -0.1 },
            colors: colors,
            shapes: ['circle'],
            gravity: 0.4, // Rơi chậm nhẹ nhàng
            scalar: 0.6, // Kích thước cánh hoa nhỏ xinh
            drift: Math.random() - 0.5
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// --- 3. XỬ LÝ NÚT BẤM CHÍNH (KÍCH HOẠT TẤT CẢ) ---
var buttonActive = document.querySelector('.button button');
var mySong = document.getElementById("song");

if (buttonActive) {
    buttonActive.onclick = function() {
        // A. Kích hoạt hiệu ứng hoa rơi
        rainFlowers();

        // B. Chạy nhạc (nếu có)
        if (mySong && mySong.paused) {
            mySong.play();
        }

        // C. Thêm class 'active' cho các bông hoa
        document.querySelectorAll('.flower-img').forEach(flower => {
            flower.classList.toggle("active");
        });

        // D. Thêm class 'active' cho các thành phần giao diện khác
        var selectors = [
            '.circle', '.box-slider_img1', '.cat', '.box-number', 
            '.box-button', '.rhombus:nth-child(1)', '.rhombus:nth-child(2)', 
            '.rhombus-img', '.mail'
        ];
        
        selectors.forEach(selector => {
            var el = document.querySelector(selector);
            if(el) el.classList.toggle("active");
        });
    };
}

// --- 4. XỬ LÝ PHẦN MỞ THƯ (MAIL) ---
var mail = document.querySelector(".mail");
var slider3 = document.querySelector(".slider3");
var closeSlider3 = document.querySelector(".fa-xmark");

if(mail && slider3) {
    mail.onclick = function() {
        slider3.classList.add("active");
    };
}

if(closeSlider3 && slider3) {
    closeSlider3.addEventListener('click', function() {
        slider3.classList.remove('active');
    });
}

// --- 5. XỬ LÝ SLIDER ẢNH TỰ ĐỘNG ---
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.slider-img');
    let currentIndex = 0;

    if (images.length > 0) {
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 3000);
    }
});