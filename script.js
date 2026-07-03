/* =========================================================
   PORTFOLIO — script.js (bản chốt)
   1. Nội dung song ngữ
   2. Chuyển ngôn ngữ EN/VI + đổi link CV
   3. Menu hamburger
   4. Fade-in + năm footer
   ========================================================= */

const content = {
  en: {
    "nav.about": "About", "nav.skills": "Skills", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.education": "Education", "nav.contact": "Contact",

    "hero.viewProjects": "View Projects",
    "hero.downloadCV": "Download CV",
    "hero.contact": "Contact Me",
    "hero.openToWork": "OPEN TO WORK",
    "hero.tagline": "Stable. Available. Recoverable.",

    "about.title": "About",
    "about.text": "Database Administrator (DBA) with over a year of hands-on experience across banking, securities, and healthcare systems, on both cloud and on-premise environments. I focus on building and operating stable, scalable database systems with high availability — proactively detecting issues early and resolving them promptly to ensure customer satisfaction. I believe a stable system comes not only from technical skill but also from initiative, responsibility, and effective teamwork. That is why I keep a mindset of continuous learning, listening, and self-improvement.",

    "skills.title": "Skills",
    "skills.g1": "Database Administration",
    "skills.g2": "High Availability & Replication",
    "skills.g3": "Performance Tuning & Optimization",
    "skills.g4": "Infrastructure & Automation",

    "experience.title": "Experience",
    "experience.present": "Present",
    "experience.b1": "Deploy Oracle Database systems, including both primary and standby environments.",
    "experience.b2": "Monitor, run routine health-check reports, and resolve incidents across systems.",
    "experience.b3": "Build scheduled backup routines (RMAN, Data Pump).",
    "experience.b4": "Plan database performance optimization (indexing, partitioning, parameter tuning).",
    "experience.b5": "Automate database administration tasks with Shell/Bash, SQL scripts, and cron jobs.",

    "projects.title": "Featured Projects",
    "proj.current": "Current", "proj.current2": "Current", "proj.current3": "Current",

    "projects.p1sub": "Vietnam Bank for Social Policies",
    "projects.p1b1": "Contributed to the Core Banking Oracle Database upgrade from 11g to 19c (Sep 2025).",
    "projects.p1b2": "Helped design the database migration plan; performed backup/restore and Transportable Tablespaces tasks.",
    "projects.p1b3": "Monitored and reported system status daily; supported incident resolution.",

    "projects.p2sub": "Hanoi Stock Exchange",
    "projects.p2b1": "Deployed Oracle Data Guard standby systems.",
    "projects.p2b2": "Monitored, reported, and handled incidents across the system.",
    "projects.p2b3": "Proposed SQL query and system parameter optimizations.",

    "projects.p3sub": "Intellectual Property Office of Vietnam",
    "projects.p3b1": "Deployed Oracle Database systems along with Data Guard standby environments.",
    "projects.p3b2": "Built scheduled backup routines using RMAN and Data Pump.",
    "projects.p3b3": "Supported incident resolution and system parameter tuning.",

    "projects.p4sub": "Payment & Digital Services",
    "projects.p4b1": "Deployed Oracle Data Guard standby systems on AIX.",
    "projects.p4b2": "Supported switchover operations between primary and standby environments.",

    "projects.p5sub": "Hospital Database Systems",
    "projects.p5b1": "Monitored and supported database operations for multiple hospital systems.",
    "projects.p5b2": "Built scheduled data backup routines.",
    "projects.p5b3": "Proposed SQL query and system parameter optimizations.",

    "projects.p6name": "Nguyen Dinh Chieu Hospital",
    "projects.p6sub": "Ben Tre",
    "projects.p6b1": "Operated and administered Oracle Database, keeping primary and standby systems stable.",
    "projects.p6b2": "Built scheduled backup routines using RMAN and Data Pump.",
    "projects.p6b3": "Supported routine maintenance and incident resolution.",

    "education.title": "Education & Certifications",
    "education.eduTag": "Education",
    "education.certTag": "Certification",
    "education.school": "Hanoi Open University",
    "education.major": "Information Technology",

    "contact.title": "Contact",
    "contact.lead": "Open to DBA roles and freelance engagements. Let's talk about keeping your databases reliable.",
    "contact.phone": "Phone",
    "contact.downloadCV": "Download CV (PDF)"
  },

  vi: {
    "nav.about": "Giới thiệu", "nav.skills": "Kỹ năng", "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án", "nav.education": "Học vấn", "nav.contact": "Liên hệ",

    "hero.viewProjects": "Xem dự án",
    "hero.downloadCV": "Tải CV",
    "hero.contact": "Liên hệ",
    "hero.openToWork": "SẴN SÀNG NHẬN VIỆC",
    "hero.tagline": "Ổn định. Sẵn sàng. Phục hồi.",

    "about.title": "Giới thiệu",
    "about.text": "Database Administrator (DBA) với hơn một năm kinh nghiệm thực chiến trên các hệ thống ngân hàng, chứng khoán và bệnh viện, trên cả môi trường cloud lẫn on-premise. Tôi tập trung xây dựng và vận hành các hệ thống dữ liệu ổn định với khả năng mở rộng, tính sẵn sàng cao, chủ động phát hiện sớm sự cố và xử lý kịp thời đảm bảo đem lại sự hài lòng cho khách hàng. Tôi luôn tin rằng một hệ thống ổn định không chỉ đến từ kỹ thuật mà còn từ sự chủ động, trách nhiệm và khả năng phối hợp hiệu quả giữa các thành viên trong đội ngũ. Vì vậy, tôi luôn duy trì tinh thần học hỏi, lắng nghe và không ngừng hoàn thiện bản thân.",

    "skills.title": "Kỹ năng",
    "skills.g1": "Quản trị CSDL",
    "skills.g2": "Sẵn sàng cao & Dự phòng",
    "skills.g3": "Tối ưu hiệu năng",
    "skills.g4": "Hạ tầng & Tự động hóa",

    "experience.title": "Kinh nghiệm",
    "experience.present": "Hiện tại",
    "experience.b1": "Triển khai hệ thống Oracle Database, gồm cả hệ thống chính và hệ thống dự phòng.",
    "experience.b2": "Giám sát, báo cáo health check định kỳ và xử lý sự cố phát sinh trên hệ thống.",
    "experience.b3": "Xây dựng kịch bản sao lưu định kỳ (RMAN, Data Pump).",
    "experience.b4": "Lên phương án tối ưu hiệu năng cơ sở dữ liệu (Indexing, Partition, parameter tuning).",
    "experience.b5": "Tự động hóa các tác vụ quản trị cơ sở dữ liệu bằng Shell/Bash, SQL Script, Cron job.",

    "projects.title": "Dự án tiêu biểu",
    "proj.current": "Hiện tại", "proj.current2": "Hiện tại", "proj.current3": "Hiện tại",

    "projects.p1sub": "Ngân hàng Chính sách Xã hội",
    "projects.p1b1": "Tham gia dự án nâng cấp Core Banking Oracle Database từ 11g lên 19c (09/2025).",
    "projects.p1b2": "Tham gia xây dựng phương án thực hiện switchover, backup/restore & Transportable Tablespaces.",
    "projects.p1b3": "Giám sát, báo cáo tình trạng hệ thống hằng ngày & hỗ trợ xử lý sự cố phát sinh.",

    "projects.p2sub": "Sở Giao dịch Chứng khoán Hà Nội",
    "projects.p2b1": "Triển khai cài đặt hệ thống dự phòng Oracle Data Guard.",
    "projects.p2b2": "Giám sát, báo cáo hàng ngày và xử lý sự cố phát sinh trên hệ thống.",
    "projects.p2b3": "Đề xuất tối ưu câu lệnh SQL và tham số hệ thống.",

    "projects.p3sub": "Cục Sở hữu Trí tuệ Việt Nam",
    "projects.p3b1": "Triển khai cài đặt hệ thống Oracle Database và hệ thống dự phòng Data Guard.",
    "projects.p3b2": "Xây dựng kịch bản sao lưu định kỳ với RMAN và Data Pump.",
    "projects.p3b3": "Hỗ trợ xử lý sự cố và tối ưu tham số hệ thống.",

    "projects.p4sub": "Dịch vụ Thanh toán & Số",
    "projects.p4b1": "Triển khai cài đặt hệ thống dự phòng Oracle Data Guard trên môi trường AIX.",
    "projects.p4b2": "Hỗ trợ thực hiện switchover giữa hệ thống chính và dự phòng.",

    "projects.p5sub": "Hệ thống CSDL Bệnh viện",
    "projects.p5b1": "Giám sát và hỗ trợ vận hành hệ thống cơ sở dữ liệu cho các bệnh viện.",
    "projects.p5b2": "Xây dựng kịch bản sao lưu dữ liệu định kỳ.",
    "projects.p5b3": "Đề xuất tối ưu câu lệnh SQL và tham số hệ thống.",

    "projects.p6name": "Bệnh viện Nguyễn Đình Chiểu",
    "projects.p6sub": "Bến Tre",
    "projects.p6b1": "Vận hành và quản trị Oracle Database, giữ hệ thống chính và dự phòng luôn ổn định.",
    "projects.p6b2": "Xây dựng kịch bản sao lưu định kỳ với RMAN và Data Pump.",
    "projects.p6b3": "Hỗ trợ bảo trì định kỳ và xử lý sự cố phát sinh.",

    "education.title": "Học vấn & Chứng chỉ",
    "education.eduTag": "Học vấn",
    "education.certTag": "Chứng chỉ",
    "education.school": "Đại học Mở Hà Nội",
    "education.major": "Công nghệ Thông tin",

    "contact.title": "Liên hệ",
    "contact.lead": "Sẵn sàng cho các vị trí DBA và cơ hội freelance. Hãy trao đổi về việc giữ cho hệ thống dữ liệu của bạn luôn tin cậy.",
    "contact.phone": "Điện thoại",
    "contact.downloadCV": "Tải CV (PDF)"
  }
};

let currentLang = "en";

function applyLang(lang) {
  currentLang = lang;
  const dict = content[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;

  const cvFile = lang === "vi" ? "assets/CV_PhanDuyQuang_VI.pdf" : "assets/CV_PhanDuyQuang_EN.pdf";
  document.querySelectorAll('a[download]').forEach((a) => { a.href = cvFile; });

  document.querySelectorAll("[data-lang-en]").forEach((s) => s.classList.toggle("is-active", lang === "en"));
  document.querySelectorAll("[data-lang-vi]").forEach((s) => s.classList.toggle("is-active", lang === "vi"));
}

document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(currentLang === "en" ? "vi" : "en"));
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

applyLang("en");
