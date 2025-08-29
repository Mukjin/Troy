// 캠페인 데이터 초기화 및 통계 계산
function updateStatistics() {
  const campaigns = document.querySelectorAll(".campaign-item");
  const stats = {
    total: campaigns.length,
    scheduled: 0,
    applying: 0,
    progress: 0,
    completed: 0,
  };

  campaigns.forEach((campaign) => {
    const status = campaign.getAttribute("data-status");
    if (stats.hasOwnProperty(status)) {
      stats[status]++;
    }
  });

  // 통계 카드 업데이트
  document.getElementById("total-count").textContent = stats.total;
  document.getElementById("scheduled-count").textContent = stats.scheduled;
  document.getElementById("applying-count").textContent = stats.applying;
  document.getElementById("progress-count").textContent = stats.progress;
  document.getElementById("completed-count").textContent = stats.completed;

  // 진행률 업데이트
  updateProgressBars(stats);
}

// 진행률 바 업데이트
function updateProgressBars(stats) {
  const total = stats.total || 1; // 0으로 나누기 방지

  // 전체 캠페인 진행률
  const totalProgress = Math.round((stats.completed / total) * 100);
  updateProgressItem("전체 캠페인", totalProgress, stats.completed, total);

  // 예정 캠페인 진행률
  const scheduledProgress = Math.round((stats.scheduled / total) * 100);
  updateProgressItem("예정 캠페인", scheduledProgress, stats.scheduled, total);

  // 신청 캠페인 진행률
  const applyingProgress = Math.round((stats.applying / total) * 100);
  updateProgressItem("신청 캠페인", applyingProgress, stats.applying, total);
}

// 개별 진행률 아이템 업데이트
function updateProgressItem(label, percentage, current, total) {
  const progressItems = document.querySelectorAll(".progress-item");

  progressItems.forEach((item) => {
    const progressLabel = item.querySelector(".progress-label");
    if (progressLabel.textContent === label) {
      // 퍼센트 업데이트
      const percentageElement = item.querySelector(".progress-percentage");
      percentageElement.textContent = percentage + "%";

      // 진행률 바 업데이트
      const progressFill = item.querySelector(".progress-fill");
      progressFill.style.width = percentage + "%";

      // 상세 정보 업데이트
      const progressDetails = item.querySelector(".progress-details");
      if (label === "전체 캠페인") {
        progressDetails.innerHTML = `<span>진행 중: ${current}</span><span>종료: ${
          total - current
        }</span>`;
      } else {
        progressDetails.innerHTML = `<span>진행 중: ${current}</span><span>전체: ${total}</span>`;
      }
    }
  });
}

// 필터링 기능
function filterCampaigns(status) {
  const campaigns = document.querySelectorAll(".campaign-item");

  campaigns.forEach((campaign) => {
    if (status === "all" || campaign.getAttribute("data-status") === status) {
      campaign.classList.remove("hidden");
    } else {
      campaign.classList.add("hidden");
    }
  });

  // 활성 상태 카드 표시
  document.querySelectorAll(".stat-card").forEach((card) => {
    card.classList.remove("active");
  });
  document.querySelector(`[data-status="${status}"]`).classList.add("active");
}

// 검색 기능
function searchCampaigns(query) {
  const campaigns = document.querySelectorAll(".campaign-item");

  campaigns.forEach((campaign) => {
    const title = campaign.querySelector("h3").textContent.toLowerCase();
    const id = campaign.querySelector(".campaign-id").textContent.toLowerCase();

    if (
      title.includes(query.toLowerCase()) ||
      id.includes(query.toLowerCase())
    ) {
      campaign.classList.remove("hidden");
    } else {
      campaign.classList.add("hidden");
    }
  });
}

// TROY 로고 클릭 시 대시보드 화면으로 복귀
function goToHome() {
  // 어디서든 관리자 대시보드로 이동
  window.location.href = "/html/admin-dashboard.html";
}

// 서비스 소개 모달
function showServiceInfo() {
  const modal = document.getElementById("serviceModal");
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function hideServiceInfo() {
  const modal = document.getElementById("serviceModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function switchService(serviceName) {
  // 탭 활성화 상태 변경
  document.querySelectorAll(".service-tab").forEach((tab) => {
    tab.classList.remove("active");
  });
  event.target.classList.add("active");

  // 콘텐츠 섹션 변경
  document.querySelectorAll(".service-content-section").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(serviceName).style.display = "block";
}

// 공지사항 인라인 뷰
function showNoticeBoard() {
  // 메인 콘텐츠 숨기기
  const statsGrid = document.querySelector(".stats-grid");
  const searchSection = document.querySelector(".search-section");
  const campaignList = document.getElementById("campaignList");

  if (statsGrid) statsGrid.style.display = "none";
  if (searchSection) searchSection.style.display = "none";
  if (campaignList) campaignList.style.display = "none";

  // 공지사항 섹션 표시
  const noticeSection = document.getElementById("noticeSection");
  if (noticeSection) {
    noticeSection.style.display = "block";
  }

  // 페이지 제목 변경
  const pageTitle = document.querySelector(".page-title");
  const pageSubtitle = document.querySelector(".page-subtitle");

  if (pageTitle) pageTitle.textContent = "공지사항";
  if (pageSubtitle)
    pageSubtitle.textContent =
      "Troy 플랫폼의 최신 소식과 중요 공지사항을 확인하세요";

  // 페이지를 맨 위로 스크롤하여 상단 제목(공지사항/부제목)이 바로 보이게 함
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function hideNoticeBoard() {
  // 메인 콘텐츠 표시
  const statsGrid = document.querySelector(".stats-grid");
  const searchSection = document.querySelector(".search-section");
  const campaignList = document.getElementById("campaignList");

  if (statsGrid) statsGrid.style.display = "grid";
  if (searchSection) searchSection.style.display = "block";
  if (campaignList) campaignList.style.display = "block";

  // 공지사항 섹션 숨기기
  const noticeSection = document.getElementById("noticeSection");
  if (noticeSection) {
    noticeSection.style.display = "none";
  }

  // 페이지 제목 복원
  const pageTitle = document.querySelector(".page-title");
  const pageSubtitle = document.querySelector(".page-subtitle");

  if (pageTitle) pageTitle.textContent = "관리자 대시보드";
  if (pageSubtitle)
    pageSubtitle.textContent = "캠페인 현황을 한눈에 확인하고 관리하세요";

  // 페이지를 맨 위로 스크롤 (제거)
  // window.scrollTo({ top: 0, behavior: "smooth" });
}

function openNoticeDetail(id) {
  alert(`공지사항 ${id}번을 확인합니다. (상세 페이지는 준비 중입니다.)`);
}

// 로그아웃 함수
function logout() {
  if (confirm("로그아웃하시겠습니까?")) {
    // 로그인 상태 삭제
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userType");
    sessionStorage.removeItem("userId");
    // 로그인 페이지로 이동
    window.location.href = "/index.html";
  }
}

// 페이지 로드 시 로그인 상태 확인
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const userType = sessionStorage.getItem("userType");

  if (isLoggedIn !== "true" || userType !== "admin") {
    // 로그인되지 않았거나 관리자가 아니면 로그인 페이지로 이동
    alert("로그인이 필요합니다.");
    window.location.replace("/index.html");
    return;
  }
});

// 이벤트 리스너
document.addEventListener("DOMContentLoaded", function () {
  // 통계 초기화
  updateStatistics();

  // 통계 카드 클릭 이벤트
  document.querySelectorAll(".stat-card").forEach((card) => {
    card.addEventListener("click", function () {
      const status = this.getAttribute("data-status");
      filterCampaigns(status);
    });
  });

  // 검색 기능
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const resetBtn = document.getElementById("reset-btn");

  searchBtn.addEventListener("click", function () {
    searchCampaigns(searchInput.value);
  });

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchCampaigns(this.value);
    }
  });

  resetBtn.addEventListener("click", function () {
    searchInput.value = "";
    filterCampaigns("all");
  });

  // 액션 버튼들
  document.querySelectorAll(".action-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("이 기능은 준비 중입니다.");
    });
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (confirm("정말 삭제하시겠습니까?")) {
        alert("삭제 기능은 준비 중입니다.");
      }
    });
  });

  // 메뉴 아이템 클릭
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", function () {
      document
        .querySelectorAll(".menu-item")
        .forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // 새 캠페인 등록 버튼
  document
    .querySelector(".new-campaign-btn")
    .addEventListener("click", function () {
      window.location.href = "/campaign-create.html";
    });

  // 기본으로 전체 보기
  filterCampaigns("all");
});

// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
  const serviceModal = document.getElementById("serviceModal");
  const noticeModal = document.getElementById("noticeModal");
  if (event.target == serviceModal) {
    hideServiceInfo();
  }
  if (event.target == noticeModal) {
    hideNoticeBoard();
  }
};
