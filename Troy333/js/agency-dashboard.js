"use strict";

// 캠페인 데이터 초기화 및 통계 계산
function updateStatistics() {
  const campaigns = document.querySelectorAll('.campaign-item');
  const stats = { total: campaigns.length, scheduled: 0, progress: 0, completed: 0 };
  campaigns.forEach((c) => {
    const s = c.getAttribute('data-status');
    if (Object.prototype.hasOwnProperty.call(stats, s)) stats[s] += 1;
  });
  
  const id = (x) => document.getElementById(x);
  if (id('total-count')) id('total-count').textContent = stats.total;
  if (id('scheduled-count')) id('scheduled-count').textContent = stats.scheduled;
  if (id('progress-count')) id('progress-count').textContent = stats.progress;
  if (id('completed-count')) id('completed-count').textContent = stats.completed;
}

// 필터링 기능
function filterCampaigns(status) {
  document.querySelectorAll('.campaign-item').forEach((c) => {
    c.style.display = status === 'all' || c.getAttribute('data-status') === status ? 'grid' : 'none';
  });
  document.querySelectorAll('.stat-card').forEach((card) => card.classList.remove('active'));
  const active = document.querySelector(`[data-status="${status}"]`);
  if (active) active.classList.add('active');
}

// 로고 클릭
function goToHome() {
  window.location.href = '/html/agency-dashboard.html';
}

document.addEventListener('DOMContentLoaded', () => {
  updateStatistics();

  document.querySelectorAll('.stat-card').forEach((card) => {
    card.addEventListener('click', function () {
      filterCampaigns(this.getAttribute('data-status'));
    });
  });

  const logout = document.querySelector('.logout');
  if (logout) {
    logout.addEventListener('click', () => {
      if (confirm('로그아웃하시겠습니까?')) window.location.href = 'index.html';
    });
  }

  const newBtn = document.querySelector('.new-campaign-btn');
  if (newBtn) newBtn.addEventListener('click', () => alert('새로운 캠페인 등록 기능은 준비 중입니다.'));

  document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', function () {
      document.querySelectorAll('.menu-item').forEach((i) => i.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.querySelectorAll('.action-btn').forEach((btn) => {
    btn.addEventListener('click', () => alert('이 기능은 준비 중입니다.'));
  });

  document.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (confirm('정말 삭제하시겠습니까?')) alert('삭제 기능은 준비 중입니다.');
    });
  });

  const chatBtn = document.querySelector('.chat-button');
  if (chatBtn) chatBtn.addEventListener('click', () => alert('채팅 상담 기능은 준비 중입니다.'));

  filterCampaigns('all');
});

// 서비스 소개 모달
function showServiceInfo() {
  const modal = document.getElementById('serviceModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function hideServiceInfo() {
  const modal = document.getElementById('serviceModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function switchService(serviceName) {
  document.querySelectorAll('.service-tab').forEach((tab) => tab.classList.remove('active'));
  if (typeof event !== 'undefined' && event.target) event.target.classList.add('active');
  document.querySelectorAll('.service-content-section').forEach((sec) => (sec.style.display = 'none'));
  const target = document.getElementById(serviceName);
  if (target) target.style.display = 'block';
}

// 공지사항 모달
function showNoticeBoard() {
  const modal = document.getElementById('noticeModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function hideNoticeBoard() {
  const modal = document.getElementById('noticeModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function openNoticeDetail(id) {
  alert(`공지사항 ${id}번을 확인합니다. (상세 페이지는 준비 중입니다.)`);
}

// 모달 외부 클릭 시 닫기
window.addEventListener('click', (e) => {
  const serviceModal = document.getElementById('serviceModal');
  const noticeModal = document.getElementById('noticeModal');
  if (e.target === serviceModal) hideServiceInfo();
  if (e.target === noticeModal) hideNoticeBoard();
});
