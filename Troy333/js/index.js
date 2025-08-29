// 페이지 로드 시 로그인 상태 확인
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const userType = sessionStorage.getItem("userType");

  if (isLoggedIn === "true" && userType) {
    // 이미 로그인된 상태라면 해당 대시보드로 이동
    switch (userType) {
      case "admin":
        window.location.replace("/html/admin-dashboard.html");
        break;
      case "agency":
        window.location.replace("/html/agency-dashboard.html");
        break;
      case "customer":
        window.location.replace("/html/customer-dashboard.html");
        break;
      case "partner":
        window.location.replace("/html/partner-dashboard.html");
        break;
    }
  }
});

// 로그인 버튼 클릭 시
document.querySelector(".btn").addEventListener("click", function () {
  const userId = document.getElementById("bizId").value;
  const password = document.getElementById("password").value;

  if (!userId || !password) {
    alert("아이디와 비밀번호를 입력해주세요.");
    return;
  }

  // 각 유형별 로그인 처리
  if (userId === "admin" && password === "1234") {
    alert("관리자 로그인 성공!");
    // 로그인 상태 저장
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userType", "admin");
    sessionStorage.setItem("userId", userId);
    setTimeout(
      () => window.location.replace("/html/admin-dashboard.html"),
      500
    );
  } else if (userId === "agency" && password === "1234") {
    alert("대행사 로그인 성공!");
    // 로그인 상태 저장
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userType", "agency");
    sessionStorage.setItem("userId", userId);
    setTimeout(
      () => window.location.replace("/html/agency-dashboard.html"),
      500
    );
  } else if (userId === "customer" && password === "1234") {
    alert("고객 로그인 성공!");
    // 로그인 상태 저장
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userType", "customer");
    sessionStorage.setItem("userId", userId);
    setTimeout(
      () => window.location.replace("/html/customer-dashboard.html"),
      500
    );
  } else if (userId === "partner" && password === "1234") {
    alert("파트너 로그인 성공!");
    // 로그인 상태 저장
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userType", "partner");
    sessionStorage.setItem("userId", userId);
    setTimeout(
      () => window.location.replace("/html/partner-dashboard.html"),
      500
    );
  } else {
    alert("아이디 또는 비밀번호가 올바르지 않습니다.");
  }
});
