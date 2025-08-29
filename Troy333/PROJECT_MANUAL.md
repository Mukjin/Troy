# Troy 플랫폼 - 상세 실행 매뉴얼

## 🎯 빠른 시작 가이드

### 1분 만에 실행하기

```bash
# 1. 프로젝트 폴더로 이동
cd /Users/limjinmuk/Desktop/Troy2/Troy333

# 2. 의존성 설치 (최초 1회만)
npm install

# 3. 서버 실행
npm run dev

# 4. 브라우저에서 접속
# http://localhost:3000
```

---

## 📋 상세 실행 단계

### Step 1: 환경 확인

```bash
# Node.js 버전 확인
node --version  # v14.0.0 이상 필요

# npm 버전 확인
npm --version   # v6.0.0 이상 필요
```

### Step 2: 프로젝트 설정

```bash
# 프로젝트 디렉토리로 이동
cd /Users/limjinmuk/Desktop/Troy2/Troy333

# 현재 위치 확인
pwd
# 출력: /Users/limjinmuk/Desktop/Troy2/Troy333
```

### Step 3: 패키지 설치

```bash
# 필요한 패키지 설치
npm install

# 설치 확인
ls node_modules
```

### Step 4: 서버 실행

```bash
# 개발 모드 실행 (권장)
npm run dev

# 또는 프로덕션 모드
npm start
```

### Step 5: 접속 확인

```
브라우저에서 http://localhost:3000 접속
```

---

## 🔐 로그인 테스트

### 테스트 계정 정보

| 역할     | 아이디     | 비밀번호 | 접속 페이지                     |
| -------- | ---------- | -------- | ------------------------------- |
| 관리자   | `admin`    | `1234`   | `/html/admin-dashboard.html`    |
| 대행사   | `agency`   | `1234`   | `/html/agency-dashboard.html`   |
| 고객사   | `customer` | `1234`   | `/html/customer-dashboard.html` |
| 파트너사 | `partner`  | `1234`   | `/html/partner-dashboard.html`  |

### 로그인 테스트 순서

1. **http://localhost:3000** 접속
2. 아이디/비밀번호 입력
3. "로그인하기" 버튼 클릭
4. 해당 대시보드로 자동 이동 확인

---

## 🛠️ 개발자 도구 사용법

### 브라우저 개발자 도구

```javascript
// F12 키를 눌러 개발자 도구 열기

// Console에서 로그인 상태 확인
console.log(sessionStorage.getItem("isLoggedIn"));
console.log(sessionStorage.getItem("userType"));

// 로그아웃 테스트
sessionStorage.clear();
location.reload();
```

### 서버 로그 확인

```bash
# 터미널에서 실시간 로그 확인
npm run dev

# 로그 예시:
# Server running on http://localhost:3000
# GET / - 200
# GET /html/admin-dashboard.html - 200
```

---

## 📁 파일 구조 상세 설명

```
Troy333/
├── 📄 package.json              # 프로젝트 설정 및 의존성
├── 🖥️ server.js                # Node.js Express 서버
├── 📖 README.md                # 기본 메뉴얼
├── 📖 PROJECT_MANUAL.md        # 이 파일 (상세 매뉴얼)
│
├── 📁 html/                    # HTML 페이지들
│   ├── 🏠 index.html           # 로그인 페이지
│   ├── 📊 admin-dashboard.html # 관리자 대시보드
│   ├── ➕ campaign-create.html # 캠페인 등록
│   ├── 👤 my-info.html        # 내 정보
│   ├── 🏢 agency-dashboard.html    # 대행사 대시보드
│   ├── 🏪 customer-dashboard.html  # 고객사 대시보드
│   └── 🤝 partner-dashboard.html   # 파트너사 대시보드
│
├── 🎨 css/                     # 스타일시트
│   ├── 📊 admin-dashboard.css # 관리자 대시보드 스타일
│   ├── 🔐 troy-login.css      # 로그인 페이지 스타일
│   └── [기타 CSS 파일들]
│
├── ⚙️ js/                      # JavaScript 파일들
│   ├── 📊 admin-dashboard.js  # 관리자 대시보드 기능
│   ├── 🔐 index.js           # 로그인 기능
│   └── [기타 JS 파일들]
│
└── 🖼️ assets/                 # 이미지 및 리소스
    ├── 🐎 horse.png          # Troy 로고
    ├── 🌿 left.png           # 왼쪽 장식
    └── 🌿 right.png          # 오른쪽 장식
```

---

## 🔧 문제 해결 가이드

### ❌ 자주 발생하는 오류

#### 1. 포트 3000이 이미 사용 중

```bash
# 오류 메시지: Address already in use
# 해결 방법:
lsof -ti:3000 | xargs kill -9
npm run dev
```

#### 2. 모듈을 찾을 수 없음

```bash
# 오류 메시지: Cannot find module 'express'
# 해결 방법:
rm -rf node_modules package-lock.json
npm install
```

#### 3. 페이지 로딩 실패

```bash
# 오류 메시지: Cannot GET /admin-dashboard.html
# 해결 방법:
# 1. 서버 재시작
npm run dev

# 2. 브라우저 캐시 삭제
# 3. 시크릿 모드로 접속
```

#### 4. 로그인 후 페이지 이동 실패

```bash
# 문제: 로그인 후 대시보드로 이동하지 않음
# 해결 방법:
# 1. 브라우저 개발자 도구 열기 (F12)
# 2. Console 탭에서 오류 메시지 확인
# 3. Network 탭에서 요청 상태 확인
```

### 🐛 디버깅 체크리스트

- [ ] Node.js 버전이 14.0.0 이상인가?
- [ ] npm install이 성공적으로 완료되었는가?
- [ ] 서버가 정상적으로 시작되었는가?
- [ ] 브라우저에서 localhost:3000에 접속 가능한가?
- [ ] 로그인 정보가 정확한가?
- [ ] 브라우저 캐시를 삭제했는가?

---

## 🚀 고급 설정

### 환경 변수 설정

```bash
# .env 파일 생성 (선택사항)
echo "PORT=3000" > .env
echo "NODE_ENV=development" >> .env
```

### 포트 변경

```bash
# 다른 포트로 실행
PORT=8080 npm run dev
# 접속: http://localhost:8080
```

### HTTPS 설정 (개발용)

```bash
# 자체 서명 인증서 생성
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

# HTTPS 서버 실행
HTTPS=true npm run dev
```

---

## 📊 성능 모니터링

### 서버 성능 확인

```bash
# 메모리 사용량 확인
ps aux | grep node

# 포트 사용 현황
lsof -i :3000

# 프로세스 종료
pkill -f "node server.js"
```

### 브라우저 성능 확인

```javascript
// 개발자 도구 Console에서
console.time("페이지 로딩");
// 페이지 새로고침 후
console.timeEnd("페이지 로딩");
```

---

## 🔒 보안 체크리스트

### 개발 환경 보안

- [ ] 기본 비밀번호 변경 (현재: 1234)
- [ ] 환경 변수로 민감 정보 관리
- [ ] HTTPS 사용 (프로덕션)
- [ ] 세션 타임아웃 설정
- [ ] 입력값 검증 구현

### 프로덕션 배포 전 체크

- [ ] 로그 파일 관리
- [ ] 에러 핸들링 강화
- [ ] 보안 헤더 설정
- [ ] 데이터베이스 연결 보안
- [ ] 백업 시스템 구축

---

## 📞 지원 및 문의

### 기술 지원

- **이메일**: dev-support@troy-platform.com
- **슬랙**: #troy-dev-support
- **문서**: https://docs.troy-platform.com

### 긴급 상황

- **서버 다운**: 010-1234-5678
- **보안 이슈**: security@troy-platform.com
- **데이터 손실**: backup@troy-platform.com

### 커뮤니티

- **GitHub**: https://github.com/troy-platform
- **Discord**: https://discord.gg/troy-platform
- **블로그**: https://blog.troy-platform.com

---

## 📝 개발 노트

### 최근 업데이트 (2025-01-XX)

- ✅ 로그인/로그아웃 세션 관리 완성
- ✅ 서비스 소개 모달 UI 개선
- ✅ 공지사항 기능 추가
- ✅ 반응형 디자인 적용
- ✅ 브라우저 호환성 개선

### 다음 개발 계획

- [ ] 데이터베이스 연동 (MySQL/PostgreSQL)
- [ ] 실시간 알림 (WebSocket)
- [ ] 파일 업로드 기능
- [ ] API 문서화 (Swagger)
- [ ] 단위 테스트 추가

---

**© 2025 Troy Platform Development Team**
