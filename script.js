// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    } else {
        header.style.backgroundColor = '#1a1a1a';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 服务卡片动画
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// 社交媒体图标悬停效果
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // --- 頁首打字效果 ---
    const titleText = "星啟點國際娛樂"; // 標題文字
    // 確保選擇器正確指向 H1 內的 span
    const titleElement = document.querySelector('#main-title-typing .typing-effect');
    let titleIndex = 0;

    function typeTitle() {
        // 確保 titleElement 存在才執行
        if (titleElement && titleIndex < titleText.length) {
            titleElement.innerHTML += titleText.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeTitle, 150); // 打字速度
        } else {
            // 打完後可以選擇停留或重置
            // setTimeout(() => {
            //     if(titleElement) titleElement.innerHTML = "";
            //     titleIndex = 0;
            //     typeTitle();
            // }, 5000); // 停留5秒後重置
        }
    }
    if(titleElement) { // 確保元素存在才開始打字
         typeTitle();
    }


    // --- Header 輪播圖 (改為左右輪播) ---
    const carouselContainer = document.querySelector('.header-carousel-slides');
    const carouselImages = document.querySelectorAll('.header-carousel-slide');
    let currentImageIndex = 0;
    const totalImages = carouselImages.length;

    function showNextImage() {
        if (carouselContainer && totalImages > 0) {
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            const offset = -currentImageIndex * 100; // 計算偏移量 (%)
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }
    }

    if (carouselContainer && totalImages > 0) {
        // 設定輪播容器寬度
        carouselContainer.style.width = `${totalImages * 100}%`;
        setInterval(showNextImage, 4000); // 每4秒切換一次圖片
    }
});

// --- 查看詳情切換 (保持全域可訪問) ---
function toggleDetails(button) {
    const cardContent = button.closest('.card-content');
    const detailsDiv = cardContent.querySelector('.job-details');

    if (detailsDiv) { // 確保 detailsDiv 存在
        if (detailsDiv.style.display === 'block') {
            detailsDiv.style.display = 'none';
            button.textContent = '查看詳情';
        } else {
            detailsDiv.style.display = 'block';
            button.textContent = '收合內容';
        }
    }
} 