
  const buttons = document.querySelectorAll(".tab-btn");
  const items = document.querySelectorAll(".menu-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // تغییر حالت فعال (active)
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // گرفتن دسته انتخابی
      const category = btn.dataset.category;

      // نمایش/مخفی کردن آیتم‌ها
      items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });