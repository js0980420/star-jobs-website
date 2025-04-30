// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(31, 41, 55, 0.95)';
    } else {
        header.style.backgroundColor = '#1F2937';
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

    // --- 輪播圖效果 ---
    const slides = document.querySelectorAll('.header-carousel-slide');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    if (slides.length > 0) {
        let current = 0;
        let timer = null;

        // 顯示指定索引的幻燈片
        function showSlide(idx) {
            // 隱藏所有幻燈片
            slides.forEach((slide, i) => {
                slide.style.opacity = '0';
                slide.style.zIndex = '1';
                if (dotsContainer && dotsContainer.children[i]) {
                    dotsContainer.children[i].classList.remove('active');
                }
            });
            
            // 顯示當前幻燈片
            slides[idx].style.opacity = '1';
            slides[idx].style.zIndex = '2';
            if (dotsContainer && dotsContainer.children[idx]) {
                dotsContainer.children[idx].classList.add('active');
            }
            
            current = idx;
        }

        // 顯示上一張
        function prevSlide() {
            const newIndex = (current - 1 + slides.length) % slides.length;
            showSlide(newIndex);
            resetTimer();
        }

        // 顯示下一張
        function nextSlide() {
            const newIndex = (current + 1) % slides.length;
            showSlide(newIndex);
            resetTimer();
        }

        // 重置計時器
        function resetTimer() {
            if (timer) clearInterval(timer);
            timer = setInterval(nextSlide, 4000);
        }

        // 創建圓點指示器
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            slides.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'dot';
                if (i === 0) dot.classList.add('active');
                dot.setAttribute('aria-label', `跳轉到第 ${i+1} 張輪播圖`);
                dot.addEventListener('click', () => {
                    showSlide(i);
                    resetTimer();
                });
                dotsContainer.appendChild(dot);
            });
        }

        // 綁定左右箭頭點擊事件
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);

        // 啟動輪播
        showSlide(0);
        resetTimer();
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

    // 移動端菜單切換
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// --- 查看詳情切換 (保持全域可訪問) ---
function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === "block") {
        details.style.display = "none";
        button.textContent = "查看詳情";
    } else {
        details.style.display = "block";
        button.textContent = "收起詳情";
    }
} 