// Mobile menu (drawer)
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const drawerClose = document.getElementById("drawerClose");

function openDrawer() {
  if (!drawer) return;
  drawer.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  if (!drawer) return;
  drawer.classList.remove("open");
  document.body.style.overflow = "";
}

menuBtn?.addEventListener("click", openDrawer);
drawerClose?.addEventListener("click", closeDrawer);

drawer?.addEventListener("click", (e) => {
  if (e.target === drawer) closeDrawer();
});

drawer?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));
