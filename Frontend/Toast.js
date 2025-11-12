export function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) {
    console.error("Toast element not found in DOM");
    return;
  }
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => { 
    toast.className = toast.className.replace("show", ""); 
  }, 3000);
}