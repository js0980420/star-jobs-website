// --- JavaScript 功能 ---

// 當整個 HTML 文件載入並解析完成後執行
document.addEventListener('DOMContentLoaded', () => {

    // --- 功能 1: 平滑滾動到錨點 ---
    // 選取所有帶有 'data-scroll' 屬性的 <a> 標籤
    const scrollLinks = document.querySelectorAll('a[data-scroll]');

    // 為每個選中的連結添加點擊事件監聽器
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // 防止連結的默認跳轉行為
            e.preventDefault();

            // 獲取目標元素的 ID
            const targetId = link.getAttribute('href');
            // 根據 ID 選取目標元素
            const targetElement = document.querySelector(targetId);

            // 如果目標元素存在
            if (targetElement) {
                // 使用 scrollIntoView 方法平滑滾動到目標元素
                targetElement.scrollIntoView({
                    behavior: 'smooth', // 指定平滑滾動
                    block: 'start'      // 將目標元素的頂部與視窗頂部對齊
                });
            }
        });
    });

    // --- 功能 2: 處理聯絡表單提交 (前端提示) ---
    // 選取 ID 為 'contact-form' 的表單
    const contactForm = document.getElementById('contact-form');
    // 選取用於顯示訊息的容器
    const formMessage = document.getElementById('form-message');

    // 如果表單存在
    if (contactForm) {
        // 為表單添加提交事件監聽器
        contactForm.addEventListener('submit', (e) => {
            // 防止表單的默認提交行為 (防止頁面刷新)
            // **注意：這會阻止表單將數據發送到 action URL**
            // **如果您使用了第三方表單服務 (如 Formspree)，您可能需要移除或修改這部分**
            e.preventDefault();

            // --- 模擬提交成功 ---
            // 在實際應用中，如果沒有後端，這裡通常不做任何事，
            // 或者如果使用 AJAX 提交，則在這裡處理響應。
            // 如果使用第三方服務且不阻止默認提交，這段代碼可能不會執行。

            // 在訊息容器中顯示成功訊息
            if (formMessage) {
                formMessage.textContent = '收到您的資料，我們會盡快與您聯繫！';
                formMessage.style.color = 'green'; // 設置文字顏色為綠色

                 // 短暫延遲後清除訊息 (可選)
                 setTimeout(() => {
                    formMessage.textContent = '';
                 }, 5000); // 5 秒後清除
            }

            // 清空表單欄位 (可選)
            // contactForm.reset();

            console.log('表單已提交 (前端模擬)'); // 在控制台輸出訊息
        });
    }

});
