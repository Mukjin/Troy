const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공
app.use(express.static(__dirname));

// 기본 라우트
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "admin-dashboard.html"));
});

// HTML 파일들에 대한 라우팅
app.get("/campaign-create.html", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "campaign-create.html"));
});

app.get("/my-info.html", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "my-info.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "index.html"));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 Troy Dashboard 서버가 시작되었습니다!`);
  console.log(`📱 접속 주소: http://localhost:${PORT}`);
  console.log(
    `📁 대시보드: http://localhost:${PORT}/html/admin-dashboard.html`
  );
  console.log(`⏹️  서버 중지: Ctrl + C`);
  console.log(`🔄 자동 재시작: npm run dev`);
});

// 서버 종료 처리
process.on("SIGINT", () => {
  console.log("\n🛑 서버를 종료합니다...");
  process.exit(0);
});
