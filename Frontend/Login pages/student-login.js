import { showToast } from "../Toast.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const loginData = {
    identifier: document.getElementById("identifier").value,
    password: document.getElementById("password").value,
  };

  let res;
  try {
    res = await fetch('http://localhost:3000/StudentLogin', {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
  } catch (networkErr) {
    console.error("Network error when calling StudentLogin", networkErr);
    alert(`❌ Unable to reach server. Is the backend running and publicly forwarded?`);
    return;
  }

  let data = {};
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    try {
      data = await res.json();
    } catch (err) {
      data = { message: res.statusText || "No response body" };
    }
  } else {
    data = { message: res.statusText || "No response body" };
  }

  if (res.ok) {
    showToast("✅ Login successful!");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    showToast("❌ " + (data.message || `Request failed (${res.status})`));
  }
});