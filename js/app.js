document.addEventListener("DOMContentLoaded", () => {
    
    
    const navItems = document.querySelectorAll(".nav-item");
    const views = document.querySelectorAll(".view");

    navItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();

           
            navItems.forEach(nav => nav.classList.remove("active"));
            
            this.classList.add("active");

            
            const targetId = this.getAttribute("data-target");

            
            views.forEach(view => {
                if(view.id === targetId) {
                    view.classList.add("active-view");
                } else {
                    view.classList.remove("active-view");
                }
            });
            
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

   
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox");

    
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            lightboxImg.src = item.src;
            lightboxImg.alt = item.alt;
            lightbox.style.display = "flex";
            lightbox.setAttribute("aria-hidden", "false");
        });
    });

 
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightbox.setAttribute("aria-hidden", "true");
    });

  
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
            lightbox.setAttribute("aria-hidden", "true");
        }
    });

    
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.style.display === "flex") {
            lightbox.style.display = "none";
            lightbox.setAttribute("aria-hidden", "true");
        }
    });
});
