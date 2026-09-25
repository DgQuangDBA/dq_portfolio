/* =========================================================
   PORTFOLIO — script.js (bản chốt)
   1. Nội dung song ngữ
   2. Chuyển ngôn ngữ EN/VI + đổi link CV
   3. Menu hamburger
   4. Fade-in + năm footer
   ========================================================= */

const content = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.viewProjects": "View Projects",
    "hero.downloadCV": "Download CV",
    "hero.contact": "Contact Me",
    "hero.openToWork": "OPEN TO WORK",
    "hero.tagline": "Stable. Available. Recoverable.",

    "about.title": "About",
    "about.text":
      "Database Administrator (DBA) with over a year of hands-on experience across banking, securities, and healthcare systems, on both cloud and on-premise environments. I focus on building and operating stable, scalable database systems with high availability — proactively detecting issues early and resolving them promptly to ensure customer satisfaction. I believe a stable system comes not only from technical skill but also from initiative, responsibility, and effective teamwork. That is why I keep a mindset of continuous learning, listening, and self-improvement.",

    "skills.title": "Skills",
    "skills.g1": "Database Administration",
    "skills.g2": "High Availability & Replication",
    "skills.g3": "Performance Tuning & Optimization",
    "skills.g4": "Infrastructure & Automation",

    "experience.title": "Experience",
    "experience.present": "Present",
    "experience.b1":
      "Deploy Oracle Database systems, including both primary and standby environments.",
    "experience.b2":
      "Monitor, run routine health-check reports, and resolve incidents across systems.",
    "experience.b3": "Build scheduled backup routines (RMAN, Data Pump).",
    "experience.b4":
      "Plan database performance optimization (indexing, partitioning, parameter tuning).",
    "experience.b5":
      "Automate database administration tasks with Shell/Bash, SQL scripts, and cron jobs.",

    "projects.title": "Featured Projects",
    "proj.current": "Current",
    "proj.current2": "Current",
    "proj.current3": "Current",

    "projects.p1sub": "Vietnam Bank for Social Policies",
    "projects.p1b1":
      "Contributed to the Core Banking Oracle Database upgrade from 11g to 19c (Sep 2025).",
    "projects.p1b2":
      "Helped design the database migration plan; performed backup/restore and Transportable Tablespaces tasks.",
    "projects.p1b3":
      "Monitored and reported system status daily; supported incident resolution.",

    "projects.p2sub": "Hanoi Stock Exchange",
    "projects.p2b1": "Deployed Oracle Data Guard standby systems.",
    "projects.p2b2":
      "Monitored, reported, and handled incidents across the system.",
    "projects.p2b3": "Proposed SQL query and system parameter optimizations.",

    "projects.p3sub": "Intellectual Property Office of Vietnam",
    "projects.p3b1":
      "Deployed Oracle Database systems along with Data Guard standby environments.",
    "projects.p3b2":
      "Built scheduled backup routines using RMAN and Data Pump.",
    "projects.p3b3":
      "Supported incident resolution and system parameter tuning.",

    "projects.p4sub": "Payment & Digital Services",
    "projects.p4b1": "Deployed Oracle Data Guard standby systems on AIX.",
    "projects.p4b2":
      "Supported switchover operations between primary and standby environments.",

    "projects.p5sub": "Hospital Database Systems",
    "projects.p5b1":
      "Monitored and supported database operations for multiple hospital systems.",
    "projects.p5b2": "Built scheduled data backup routines.",
    "projects.p5b3": "Proposed SQL query and system parameter optimizations.",

    "projects.p6name": "Nguyen Dinh Chieu Hospital",
    "projects.p6sub": "Ben Tre",
    "projects.p6b1":
      "Operated and administered Oracle Database, keeping primary and standby systems stable.",
    "projects.p6b2":
      "Built scheduled backup routines using RMAN and Data Pump.",
    "projects.p6b3": "Supported routine maintenance and incident resolution.",

    "education.title": "Education & Certifications",
    "education.eduTag": "Education",
    "education.certTag": "Certification",
    "education.school": "Hanoi Open University",
    "education.major": "Information Technology",

    "contact.title": "Contact",
    "contact.lead":
      "Open to DBA roles and freelance engagements. Let's talk about keeping your databases reliable.",
    "contact.phone": "Phone",
    "contact.downloadCV": "Download CV (PDF)",

    "cv.view": "View online",
  },

  vi: {
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.education": "Học vấn",
    "nav.contact": "Liên hệ",

    "hero.viewProjects": "Xem dự án",
    "hero.downloadCV": "Tải CV",
    "hero.contact": "Liên hệ",
    "hero.openToWork": "SẴN SÀNG NHẬN VIỆC",
    "hero.tagline": "Ổn định. Sẵn sàng. Phục hồi.",

    "about.title": "Giới thiệu",
    "about.text":
      "Database Administrator (DBA) với hơn một năm kinh nghiệm thực chiến trên các hệ thống ngân hàng, chứng khoán và bệnh viện, trên cả môi trường cloud lẫn on-premise. Tôi tập trung xây dựng và vận hành các hệ thống dữ liệu ổn định với khả năng mở rộng, tính sẵn sàng cao, chủ động phát hiện sớm sự cố và xử lý kịp thời đảm bảo đem lại sự hài lòng cho khách hàng. Tôi luôn tin rằng một hệ thống ổn định không chỉ đến từ kỹ thuật mà còn từ sự chủ động, trách nhiệm và khả năng phối hợp hiệu quả giữa các thành viên trong đội ngũ. Vì vậy, tôi luôn duy trì tinh thần học hỏi, lắng nghe và không ngừng hoàn thiện bản thân.",

    "skills.title": "Kỹ năng",
    "skills.g1": "Quản trị CSDL",
    "skills.g2": "Sẵn sàng cao & Dự phòng",
    "skills.g3": "Tối ưu hiệu năng",
    "skills.g4": "Hạ tầng & Tự động hóa",

    "experience.title": "Kinh nghiệm",
    "experience.present": "Hiện tại",
    "experience.b1":
      "Triển khai hệ thống Oracle Database, gồm cả hệ thống chính và hệ thống dự phòng.",
    "experience.b2":
      "Giám sát, báo cáo health check định kỳ và xử lý sự cố phát sinh trên hệ thống.",
    "experience.b3": "Xây dựng kịch bản sao lưu định kỳ (RMAN, Data Pump).",
    "experience.b4":
      "Lên phương án tối ưu hiệu năng cơ sở dữ liệu (Indexing, Partition, parameter tuning).",
    "experience.b5":
      "Tự động hóa các tác vụ quản trị cơ sở dữ liệu bằng Shell/Bash, SQL Script, Cron job.",

    "projects.title": "Dự án tiêu biểu",
    "proj.current": "Hiện tại",
    "proj.current2": "Hiện tại",
    "proj.current3": "Hiện tại",

    "projects.p1sub": "Ngân hàng Chính sách Xã hội",
    "projects.p1b1":
      "Tham gia dự án nâng cấp Core Banking Oracle Database từ 11g lên 19c (09/2025).",
    "projects.p1b2":
      "Tham gia xây dựng phương án thực hiện switchover, backup/restore & Transportable Tablespaces.",
    "projects.p1b3":
      "Giám sát, báo cáo tình trạng hệ thống hằng ngày & hỗ trợ xử lý sự cố phát sinh.",

    "projects.p2sub": "Sở Giao dịch Chứng khoán Hà Nội",
    "projects.p2b1": "Triển khai cài đặt hệ thống dự phòng Oracle Data Guard.",
    "projects.p2b2":
      "Giám sát, báo cáo hàng ngày và xử lý sự cố phát sinh trên hệ thống.",
    "projects.p2b3": "Đề xuất tối ưu câu lệnh SQL và tham số hệ thống.",

    "projects.p3sub": "Cục Sở hữu Trí tuệ Việt Nam",
    "projects.p3b1":
      "Triển khai cài đặt hệ thống Oracle Database và hệ thống dự phòng Data Guard.",
    "projects.p3b2": "Xây dựng kịch bản sao lưu định kỳ với RMAN và Data Pump.",
    "projects.p3b3": "Hỗ trợ xử lý sự cố và tối ưu tham số hệ thống.",

    "projects.p4sub": "Dịch vụ Thanh toán & Số",
    "projects.p4b1":
      "Triển khai cài đặt hệ thống dự phòng Oracle Data Guard trên môi trường AIX.",
    "projects.p4b2":
      "Hỗ trợ thực hiện switchover giữa hệ thống chính và dự phòng.",

    "projects.p5sub": "Hệ thống CSDL Bệnh viện",
    "projects.p5b1":
      "Giám sát và hỗ trợ vận hành hệ thống cơ sở dữ liệu cho các bệnh viện.",
    "projects.p5b2": "Xây dựng kịch bản sao lưu dữ liệu định kỳ.",
    "projects.p5b3": "Đề xuất tối ưu câu lệnh SQL và tham số hệ thống.",

    "projects.p6name": "Bệnh viện Nguyễn Đình Chiểu",
    "projects.p6sub": "Bến Tre",
    "projects.p6b1":
      "Vận hành và quản trị Oracle Database, giữ hệ thống chính và dự phòng luôn ổn định.",
    "projects.p6b2": "Xây dựng kịch bản sao lưu định kỳ với RMAN và Data Pump.",
    "projects.p6b3": "Hỗ trợ bảo trì định kỳ và xử lý sự cố phát sinh.",

    "education.title": "Học vấn & Chứng chỉ",
    "education.eduTag": "Học vấn",
    "education.certTag": "Chứng chỉ",
    "education.school": "Đại học Mở Hà Nội",
    "education.major": "Công nghệ Thông tin",

    "contact.title": "Liên hệ",
    "contact.lead":
      "Sẵn sàng cho các vị trí DBA và cơ hội freelance. Hãy trao đổi về việc giữ cho hệ thống dữ liệu của bạn luôn tin cậy.",
    "contact.phone": "Điện thoại",
    "contact.downloadCV": "Tải CV (PDF)",

    "cv.view": "Xem trực tuyến",
  },
};

let currentLang = "vi";

function applyLang(lang) {
  currentLang = lang;
  const dict = content[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;

  const cvFile =
    lang === "vi"
      ? "assets/CV_PhanDuyQuang_VI.pdf"
      : "assets/CV_PhanDuyQuang_EN.pdf";
  document.querySelectorAll("a[download]").forEach((a) => {
    a.href = cvFile;
  });

  document
    .querySelectorAll("[data-lang-en]")
    .forEach((s) => s.classList.toggle("is-active", lang === "en"));
  document
    .querySelectorAll("[data-lang-vi]")
    .forEach((s) => s.classList.toggle("is-active", lang === "vi"));

  renderAbout(lang);
  document.querySelectorAll(".contact__lead").forEach((el) => {
    el.innerHTML = dict["contact.lead"]
      .split(/(?<=\.)\s+/)
      .map((line) => `<span class="line">${line}</span>`)
      .join("");
  });
  setCvLang(lang);
  syncTagline(lang);
}

/* ---------- About: câu đầu làm lead, câu cuối làm trích dẫn, tô từ khóa ---------- */
const aboutHighlights = {
  en: ["banking, securities, and healthcare", "cloud", "on-premise", "high availability"],
  vi: ["ngân hàng, chứng khoán và bệnh viện", "cloud", "on-premise", "tính sẵn sàng cao"],
};
function highlight(text, lang) {
  aboutHighlights[lang].forEach((word) => {
    // gạch nối không ngắt dòng (on-premise)
    text = text.replace(word, `<mark>${word.replace("-", "‑")}</mark>`);
  });
  return text;
}
function renderAbout(lang) {
  const sentences = content[lang]["about.text"].split(/(?<=\.)\s+/);
  const [lead, body, ...rest] = sentences;
  document.getElementById("aboutText").innerHTML =
    `<p class="about__lead">${highlight(lead, lang)}</p>` +
    `<div class="about__body"><p>${highlight(body, lang)}</p>` +
    `<p class="about__quote">${rest.join(" ")}</p></div>`;
}

/* ---------- Nút "Xem trực tuyến" CV theo ngôn ngữ trang ---------- */
function setCvLang(lang) {
  const file = `assets/CV_PhanDuyQuang_${lang.toUpperCase()}.pdf`;
  document.querySelectorAll("[data-cv-view]").forEach((a) => (a.href = file));
}

document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
  btn.addEventListener("click", () =>
    applyLang(currentLang === "en" ? "vi" : "en"),
  );
});

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  burger.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------- Kiểu xuất hiện cho từng khối ---------- */
function setReveal(selector, kind) {
  document.querySelectorAll(selector).forEach((el, i) => {
    const k = typeof kind === "function" ? kind(i) : kind;
    if (k) el.classList.add("reveal", "reveal--" + k);
  });
}
setReveal(".section__head", "left");
setReveal(".about__text", "left");
setReveal(".skillcard", (i) => (i % 2 ? "right" : "left"));
setReveal(".project, .exp", "flip");
setReveal(".edu__card", (i) => (i % 2 ? "right" : "left"));
setReveal(".contact__item", "zoom");
/* ---------- Reveal khi cuộn (card trong lưới hiện lần lượt) ---------- */
document
  .querySelectorAll(".skillgrid, .projects, .edu, .contact__grid")
  .forEach((grid) => {
    [...grid.children].forEach((el, i) => {
      el.style.setProperty("--rd", i * 90 + "ms");
    });
  });
document.querySelectorAll(".skillcard__tags, .exp__list").forEach((list) => {
  [...list.children].forEach((el, i) => el.style.setProperty("--ti", i));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add("is-visible");
        observer.unobserve(el);
        // hiện xong -> chuyển sang transition nhanh cho hover/tilt
        setTimeout(
          () => el.classList.add("is-settled"),
          900 + (parseInt(el.style.getPropertyValue("--rd")) || 0),
        );
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Hero: tên, chức danh, tagline gõ lần lượt như đang code ---------- */
const heroName = document.querySelector(".hero__name");
const heroRole = document.querySelector(".hero__role");
const heroTagline = document.querySelector(".hero__tagline");
const typeCaret = document.createElement("span");
typeCaret.className = "type-caret";
typeCaret.setAttribute("aria-hidden", "true");
let typingState = reduceMotion ? "done" : "idle";

// dựng sẵn từng ký tự (ẩn) để chữ hiện ra không làm xô lệch bố cục
function prepType(el, text) {
  el.classList.add("type");
  el.setAttribute("aria-label", text);
  el.innerHTML = `<span aria-hidden="true">${[...text]
    .map((c) => `<span class="ch">${c}</span>`)
    .join("")}</span>`;
}
function syncTagline(lang) {
  const text = content[lang]["hero.tagline"];
  if (typingState === "done") {
    heroTagline.textContent = text;
    if (!reduceMotion) heroTagline.appendChild(typeCaret);
  } else {
    prepType(heroTagline, text);
  }
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
async function typeEl(el, speed) {
  el.firstElementChild.prepend(typeCaret);
  for (let i = 0; ; i++) {
    const chars = el.querySelectorAll(".ch");
    if (i >= chars.length) break;
    chars[i].classList.add("on");
    chars[i].after(typeCaret);
    await wait(chars[i].textContent === " " ? speed * 2 : speed + Math.random() * speed * 0.6);
  }
}
async function runHeroTyping() {
  if (typingState !== "idle") return;
  typingState = "typing";
  typeCaret.classList.add("is-typing");
  await typeEl(heroName, 80);
  await wait(250);
  await typeEl(heroRole, 42);
  await wait(200);
  await typeEl(heroTagline, 40);
  typeCaret.classList.remove("is-typing");
  typingState = "done";
}
if (!reduceMotion) {
  prepType(heroName, heroName.textContent.trim());
  prepType(heroRole, heroRole.textContent.trim());
}

applyLang("vi");

/* ---------- Màn chờ (loader) ---------- */
const loader = document.getElementById("loader");
const loaderBar = document.getElementById("loaderBar");
const loaderPct = document.getElementById("loaderPct");
const LOADER_MIN = 1900;
let pageLoaded = document.readyState === "complete";
let loaderFinished = false;
const loaderStart = performance.now();

window.addEventListener("load", () => (pageLoaded = true));
setTimeout(() => (pageLoaded = true), 5000); // an toàn nếu ảnh tải chậm

function finishLoader() {
  if (loaderFinished) return;
  loaderFinished = true;
  loaderBar.style.width = "100%";
  loaderPct.textContent = "100%";
  loader.classList.add("is-done");
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");
  setTimeout(runHeroTyping, 700);
  setTimeout(() => loader.remove(), 1200);
}

function loaderTick(now) {
  if (loaderFinished) return;
  const p = Math.min(1, (now - loaderStart) / LOADER_MIN);
  const eased = 1 - Math.pow(1 - p, 3);
  const shown = pageLoaded ? eased : Math.min(eased, 0.9);
  loaderBar.style.width = (shown * 100).toFixed(1) + "%";
  loaderPct.textContent = Math.round(shown * 100) + "%";
  if (shown >= 1) setTimeout(finishLoader, 250);
  else requestAnimationFrame(loaderTick);
}

if (reduceMotion) finishLoader();
else {
  requestAnimationFrame(loaderTick);
  loader.addEventListener("click", finishLoader); // bấm để bỏ qua
}

/* ---------- Nav: tiến độ cuộn, thu gọn, nút lên đầu trang ---------- */
const nav = document.getElementById("nav");
const scrollProgress = document.getElementById("scrollProgress");
const toTop = document.getElementById("toTop");
const toTopProgress = document.getElementById("toTopProgress");
const RING = 2 * Math.PI * 22;

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? window.scrollY / max : 0;
  scrollProgress.style.transform = `scaleX(${p})`;
  toTopProgress.style.strokeDashoffset = RING * (1 - p);
  nav.classList.toggle("is-scrolled", window.scrollY > 20);
  toTop.classList.toggle("is-shown", window.scrollY > 600);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Link menu sáng theo section đang xem ---------- */
const navMap = new Map();
navLinks.querySelectorAll('a[href^="#"]').forEach((a) => {
  navMap.set(a.getAttribute("href").slice(1), a);
});
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navMap.forEach((a) => a.classList.remove("is-active"));
      const link = navMap.get(entry.target.id);
      if (link) link.classList.add("is-active");
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

/* ---------- Card: spotlight theo chuột + nghiêng 3D ---------- */
if (finePointer) {
  document
    .querySelectorAll(".skillcard, .project, .contact__item, .edu__card, .exp")
    .forEach((el) => {
      el.classList.add("spot");
      const tilt = el.matches(".skillcard, .project") && !reduceMotion;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        el.style.setProperty("--mx", x + "px");
        el.style.setProperty("--my", y + "px");
        if (tilt) {
          const rx = (y / r.height - 0.5) * -6;
          const ry = (x / r.width - 0.5) * 8;
          el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        }
      });
      if (tilt) el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
}

/* ---------- Nền động: sao + mạng dữ liệu + sao băng ---------- */
const sky = document.getElementById("sky");
const ctx = sky.getContext("2d");
let W = 0, H = 0, stars = [], nodes = [], meteors = [];
const mouse = { x: -9999, y: -9999 };

function resizeSky() {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  W = window.innerWidth;
  H = window.innerHeight;
  sky.width = W * dpr;
  sky.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const starCount = Math.min(220, Math.round((W * H) / 7000));
  stars = Array.from({ length: starCount }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.1 + 0.3,
    depth: Math.random() * 0.8 + 0.2,
    tw: Math.random() * 2 + 0.5,
    ph: Math.random() * Math.PI * 2,
  }));
  const nodeCount = W < 700 ? 16 : 34;
  nodes = Array.from({ length: nodeCount }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
  }));
}
window.addEventListener("resize", resizeSky);
window.addEventListener("pointermove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
document.addEventListener("pointerleave", () => (mouse.x = mouse.y = -9999));
resizeSky();

let nextMeteor = 3;
function drawSky(s) {
  ctx.clearRect(0, 0, W, H);
  const sy = window.scrollY;
  const mx = mouse.x > -1 ? (mouse.x - W / 2) : 0;

  // sao: nhấp nháy + trôi theo cuộn (parallax)
  for (const st of stars) {
    const y = (((st.y - sy * st.depth * 0.12) % H) + H) % H;
    const x = st.x - mx * st.depth * 0.012;
    const a = 0.25 + 0.6 * Math.abs(Math.sin(s * st.tw + st.ph)) * st.depth;
    ctx.fillStyle = `rgba(231,236,245,${a.toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(x, y, st.r, 0, Math.PI * 2);
    ctx.fill();
  }

  // mạng dữ liệu: các node nối với nhau và với con trỏ
  for (const n of nodes) {
    if (!reduceMotion) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    }
  }
  ctx.lineWidth = 1;
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 150) {
        ctx.strokeStyle = `rgba(56,225,176,${((1 - d / 150) * 0.16).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
    const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
    if (dm < 190) {
      ctx.strokeStyle = `rgba(91,157,255,${((1 - dm / 190) * 0.4).toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(56,225,176,.55)";
    ctx.beginPath();
    ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
    ctx.fill();
  }

  // sao băng thỉnh thoảng
  if (!reduceMotion && s > nextMeteor) {
    nextMeteor = s + 4 + Math.random() * 5;
    meteors.push({ x: Math.random() * W * 0.8 + W * 0.2, y: Math.random() * H * 0.4, life: 1 });
  }
  meteors = meteors.filter((m) => m.life > 0);
  for (const m of meteors) {
    m.x -= 9;
    m.y += 4.5;
    m.life -= 0.018;
    const g = ctx.createLinearGradient(m.x, m.y, m.x + 90, m.y - 45);
    g.addColorStop(0, `rgba(231,236,245,${m.life.toFixed(3)})`);
    g.addColorStop(1, "rgba(231,236,245,0)");
    ctx.strokeStyle = g;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(m.x + 90, m.y - 45);
    ctx.stroke();
  }
}

/* ---------- 2 đĩa bay lượn quanh trang và bắn nhau ---------- */
// mỗi đĩa bay theo quỹ đạo Lissajous riêng -> phủ đều màn hình, ít khi chồng lên nhau
const ufos = [
  { el: document.getElementById("ufoA"), fx: 0.11, fy: 0.17, px: 0, py: 1.3, color: "56,225,176" },
  { el: document.getElementById("ufoB"), fx: 0.083, fy: 0.13, px: 2.6, py: 4.4, color: "255,120,190" },
].map((u) => ({ ...u, x: 0, y: 0, hitUntil: 0, beaming: false }));
let bolts = [];
let sparks = [];
let nextShot = 4;
let shooter = 0;

function moveUfos(s) {
  ufos.forEach((u, k) => {
    const size = u.el.offsetWidth;
    u.x = W * (0.5 + 0.42 * Math.sin(s * u.fx + u.px));
    u.y = H * (0.5 + 0.36 * Math.sin(s * u.fy + u.py)) + Math.sin(s * 2.1 + k) * 6;
    const tilt = Math.cos(s * u.fx + u.px) * 12;
    // trúng đạn: rung nhẹ + loé sáng
    const hit = s < u.hitUntil;
    const jx = hit ? (Math.random() - 0.5) * 6 : 0;
    const jy = hit ? (Math.random() - 0.5) * 6 : 0;
    u.el.style.transform = `translate3d(${u.x - size / 2 + jx}px, ${u.y - size / 2 + jy}px, 0) rotate(${tilt}deg)`;
    u.el.classList.toggle("is-hit", hit);
    const beam = (s + k * 6) % 14 > 11;
    if (beam !== u.beaming) {
      u.beaming = beam;
      u.el.classList.toggle("is-beaming", beam);
    }
  });
}

function fire(s) {
  const a = ufos[shooter];
  const b = ufos[1 - shooter];
  shooter = 1 - shooter;
  if (Math.hypot(b.x - a.x, b.y - a.y) < 90) return;
  // bắn hơi đón đầu hướng bay của đối thủ
  const tx = b.x + Math.cos(s * b.fx + b.px) * 30;
  const ang = Math.atan2(b.y - a.y, tx - a.x);
  const speed = 11;
  bolts.push({
    x: a.x, y: a.y,
    vx: Math.cos(ang) * speed, vy: Math.sin(ang) * speed,
    color: a.color, target: b, life: 1,
  });
  sparks.push({ x: a.x, y: a.y, vx: 0, vy: 0, life: 0.5, r: 7, color: a.color }); // chớp nòng
}

function drawCombat(s) {
  if (reduceMotion || !document.body.classList.contains("is-ready")) return;
  if (s > nextShot) {
    fire(s);
    nextShot = s + 1.1 + Math.random() * 1.8;
  }
  ctx.lineCap = "round";
  bolts = bolts.filter((b) => b.life > 0);
  for (const b of bolts) {
    b.x += b.vx;
    b.y += b.vy;
    b.life -= 0.012;
    const t = b.target;
    if (Math.hypot(t.x - b.x, t.y - b.y) < 26) {
      b.life = 0;
      t.hitUntil = s + 0.35;
      for (let i = 0; i < 16; i++) {
        const a = Math.random() * Math.PI * 2;
        const v = 1 + Math.random() * 3.5;
        sparks.push({ x: b.x, y: b.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1, r: 1.2 + Math.random() * 1.6, color: b.color });
      }
      continue;
    }
    const tailX = b.x - b.vx * 2.4;
    const tailY = b.y - b.vy * 2.4;
    const g = ctx.createLinearGradient(b.x, b.y, tailX, tailY);
    g.addColorStop(0, `rgba(255,255,255,${b.life.toFixed(2)})`);
    g.addColorStop(0.3, `rgba(${b.color},${b.life.toFixed(2)})`);
    g.addColorStop(1, `rgba(${b.color},0)`);
    ctx.strokeStyle = g;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(b.x, b.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();
  }
  sparks = sparks.filter((p) => p.life > 0);
  for (const p of sparks) {
    p.x += p.vx;
    p.y += p.vy;
    p.vx *= 0.94;
    p.vy *= 0.94;
    p.life -= 0.035;
    ctx.fillStyle = `rgba(${p.color},${Math.max(0, p.life).toFixed(2)})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * (0.5 + p.life * 0.5), 0, Math.PI * 2);
    ctx.fill();
  }
}

/* ---------- Vòng lặp chung ---------- */
function frame(now) {
  const s = now / 1000;
  drawSky(s);
  moveUfos(s);
  drawCombat(s);
  if (!reduceMotion) requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
