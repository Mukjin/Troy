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

    <!-- 서비스 소개 모달 -->
    <div id="serviceModal" class="service-modal">
        <div class="service-modal-content">
            <div class="service-modal-header">
                <h2>Troy 서비스 소개</h2>
                <span class="close-btn" onclick="hideServiceInfo()">&times;</span>
            </div>
            
            <div class="service-tabs">
                <button class="service-tab active" onclick="switchService('influencer')">인플루언서 마케팅</button>
                <button class="service-tab" onclick="switchService('campaign')">캠페인 관리</button>
                <button class="service-tab" onclick="switchService('analytics')">데이터 분석</button>
            </div>

            <div class="service-modal-body">
                <!-- 인플루언서 마케팅 -->
                <div id="influencer" class="service-content-section">
                    <h3>인플루언서 마케팅</h3>
                    <p>Troy의 인플루언서 마케팅 서비스는 브랜드와 인플루언서를 효과적으로 연결하여 진정성 있는 마케팅 캠페인을 구현합니다.</p>
                    
                    <div class="service-features">
                        <h4>주요 특징</h4>
                        <ul>
                            <li>다양한 플랫폼 (Instagram, YouTube, TikTok, 네이버 블로그) 지원</li>
                            <li>인플루언서 매칭 알고리즘을 통한 최적의 파트너 추천</li>
                            <li>실시간 성과 모니터링 및 분석 리포트 제공</li>
                            <li>투명한 비용 구조와 성과 기반 요금제</li>
                            <li>브랜드 세이프티를 위한 엄격한 인플루언서 검증 시스템</li>
                        </ul>
                    </div>

                    <div class="service-stats">
                        <div class="stat-item">
                            <div class="stat-number">10,000+</div>
                            <div class="stat-label">등록 인플루언서</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">500+</div>
                            <div class="stat-label">성공 캠페인</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">95%</div>
                            <div class="stat-label">고객 만족도</div>
                        </div>
                    </div>
                </div>

                <!-- 캠페인 관리 -->
                <div id="campaign" class="service-content-section" style="display: none;">
                    <h3>통합 캠페인 관리</h3>
                    <p>Troy의 캠페인 관리 서비스는 복잡한 마케팅 캠페인을 하나의 플랫폼에서 체계적으로 관리할 수 있도록 지원합니다.</p>
                    
                    <div class="service-features">
                        <h4>핵심 기능</h4>
                        <ul>
                            <li>직관적인 대시보드를 통한 캠페인 현황 관리</li>
                            <li>자동화된 워크플로우로 효율적인 업무 처리</li>
                            <li>실시간 알림 및 상태 업데이트 시스템</li>
                            <li>다양한 캠페인 유형 지원 (구매평, 체험단, 콘텐츠 제작)</li>
                            <li>예산 관리 및 ROI 추적 기능</li>
                        </ul>
                    </div>

                    <div class="service-stats">
                        <div class="stat-item">
                            <div class="stat-number">1,000+</div>
                            <div class="stat-label">관리 캠페인</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">24/7</div>
                            <div class="stat-label">실시간 모니터링</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">99.9%</div>
                            <div class="stat-label">시스템 안정성</div>
                        </div>
                    </div>
                </div>

                <!-- 데이터 분석 -->
                <div id="analytics" class="service-content-section" style="display: none;">
                    <h3>데이터 분석 & 인사이트</h3>
                    <p>Troy의 데이터 분석 서비스는 마케팅 캠페인의 모든 데이터를 수집, 분석하여 실행 가능한 인사이트를 제공합니다.</p>
                    
                    <div class="service-features">
                        <h4>분석 영역</h4>
                        <ul>
                            <li>캠페인 성과 분석 (도달률, 참여율, 전환율)</li>
                            <li>인플루언서 성과 평가 및 랭킹</li>
                            <li>오디언스 분석 및 세그멘테이션</li>
                            <li>경쟁사 동향 및 시장 분석</li>
                            <li>트렌드 예측 및 기회 발굴</li>
                        </ul>
                    </div>

                    <div class="service-stats">
                        <div class="stat-item">
                            <div class="stat-number">1TB+</div>
                            <div class="stat-label">분석 데이터</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">50+</div>
                            <div class="stat-label">분석 지표</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">실시간</div>
                            <div class="stat-label">데이터 업데이트</div>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        
    <!-- 공지사항 모달 -->
    <div id="noticeModal" class="service-modal">
        <div class="service-modal-content">
            <div class="service-modal-header">
                <h2>공지사항</h2>
                <span class="close-btn" onclick="hideNoticeBoard()">&times;</span>
            </div>
            
            <div class="notice-board">
                <div class="board-header">
                    <h3>공지사항 목록</h3>
                    <div class="board-stats">총 8개의 공지사항</div>
                </div>

                <div class="notice-list">
                    <div class="notice-header">
                        <div>번호</div>
                        <div>제목</div>
                        <div>작성일</div>
                        <div>조회수</div>
                    </div>

                    <div class="notice-item" onclick="openNoticeDetail(1)">
                        <div class="notice-number">8</div>
                        <div class="notice-title important">시스템 정기 점검 안내 (2025.08.30)</div>
                        <div class="notice-date">2025.08.27</div>
                        <div class="notice-views">1,245</div>
                    </div>

                    <div class="notice-item" onclick="openNoticeDetail(2)">
                        <div class="notice-number">7</div>
                        <div class="notice-title">캠페인 등록 기능 개선 안내</div>
                        <div class="notice-date">2025.08.25</div>
                        <div class="notice-views">892</div>
                    </div>

                    <div class="notice-item" onclick="openNoticeDetail(3)">
                        <div class="notice-number">6</div>
                        <div class="notice-title">Troy 플랫폼 2.0 업데이트 완료</div>
                        <div class="notice-date">2025.08.20</div>
                        <div class="notice-views">2,156</div>
                    </div>

                    <div class="notice-item" onclick="openNoticeDetail(4)">
                        <div class="notice-number">5</div>
                        <div class="notice-title important">개인정보처리방침 개정 안내</div>
                        <div class="notice-date">2025.08.15</div>
                        <div class="notice-views">1,678</div>
                    </div>

                    <div class="notice-item" onclick="openNoticeDetail(5)">
                        <div class="notice-number">4</div>
                        <div class="notice-title">새로운 파트너사 등록 오픈</div>
                        <div class="notice-date">2025.08.10</div>
                        <div class="notice-views">934</div>
                    </div>

                    <div class="notice-item" onclick="openNoticeDetail(6)">
                        <div class="notice-number">3</div>
                        <div class="notice-title">여름 휴가철 고객센터 운영 안내</div>
                        <div class="notice-date">2025.08.01</div>
                        <div class="notice-views">567</div>
          </div>
          
                    <div class="notice-item" onclick="openNoticeDetail(7)">
                        <div class="notice-number">2</div>
                        <div class="notice-title">Troy 모바일 앱 출시 안내</div>
                        <div class="notice-date">2025.07.25</div>
                        <div class="notice-views">3,421</div>
          </div>
          
                    <div class="notice-item" onclick="openNoticeDetail(8)">
                        <div class="notice-number">1</div>
                        <div class="notice-title">Troy 플랫폼 오픈 기념 이벤트</div>
                        <div class="notice-date">2025.07.01</div>
                        <div class="notice-views">5,234</div>
          </div>
        </div>
        
                <div class="pagination">
                    <button class="page-btn" disabled>‹</button>
                    <button class="page-btn active">1</button>
                    <button class="page-btn">2</button>
                    <button class="page-btn">3</button>
                    <button class="page-btn">›</button>
                </div>
        </div>
      </div>
  </div>
