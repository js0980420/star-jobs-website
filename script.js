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

    // 輪播圖
    const carouselContainer = document.querySelector('.header-carousel-slides');
    const carouselImages = document.querySelectorAll('.header-carousel-slide');
    let currentImageIndex = 0;
    const totalImages = carouselImages.length;

    function showImage(index) {
        if (carouselContainer && totalImages > 0) {
            const offset = -index * 100;
            // 使用更平滑的貝塞爾曲線
            carouselContainer.style.transition = 'transform 1s cubic-bezier(0.215, 0.61, 0.355, 1)';
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }

    if (carouselContainer && totalImages > 0) {
        showImage(0);
        setInterval(showNextImage, 4000);
    }

    // 圖片加載完成處理
    const imgElements = document.querySelectorAll('.header-carousel-slide img');
    let loadedCount = 0;
    
    imgElements.forEach(img => {
        if (img.complete) {
            loadedCount++;
        } else {
            img.addEventListener('load', () => {
                loadedCount++;
                // 當所有圖片加載完成時
                if (loadedCount === imgElements.length) {
                    document.querySelector('.header-carousel-wrapper').style.opacity = 1;
                }
            });
        }
    });
    
    // 如果所有圖片已經加載完成
    if (loadedCount === imgElements.length) {
        document.querySelector('.header-carousel-wrapper').style.opacity = 1;
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