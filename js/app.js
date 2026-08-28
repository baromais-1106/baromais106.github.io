document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. ĐIỀU HƯỚNG SPA (Single Page Application) --- */
    const navItems = document.querySelectorAll(".nav-item");
    const views = document.querySelectorAll(".view");

    navItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();

            // Xóa class active ở tất cả nav
            navItems.forEach(nav => nav.classList.remove("active"));
            // Thêm class active cho nav được click
            this.classList.add("active");

            // Lấy ID view mục tiêu
            const targetId = this.getAttribute("data-target");

            // Ẩn tất cả views, hiện view mục tiêu
            views.forEach(view => {
                if(view.id === targetId) {
                    view.classList.add("active-view");
                } else {
                    view.classList.remove("active-view");
                }
            });
            
            // Cuộn mượt lên đầu nội dung
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    /* --- 2. LIGHTBOX CHO GALLERY --- */
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox");

    // Mở lightbox khi click vào ảnh
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            lightboxImg.src = item.src;
            lightboxImg.alt = item.alt;
            lightbox.style.display = "flex";
            lightbox.setAttribute("aria-hidden", "false");
        });
    });

    // Đóng lightbox khi click nút X
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightbox.setAttribute("aria-hidden", "true");
    });

    // Đóng lightbox khi click ra ngoài ảnh
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
            lightbox.setAttribute("aria-hidden", "true");
        }
    });

    // Hỗ trợ phím ESC để đóng lightbox (a11y)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.style.display === "flex") {
            lightbox.style.display = "none";
            lightbox.setAttribute("aria-hidden", "true");
        }
    });
});