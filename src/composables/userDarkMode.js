import { ref, onMounted, watch } from 'vue';

// Khởi tạo trạng thái isDarkMode và lấy giá trị từ localStorage nếu có
const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');

function toggleDarkMode() {
    // nếu isDarkMode hiện tại khác với isDarkMode tức đang kiểm tra value true hoặc false của isDarkMode và lưu vào localStorage
  isDarkMode.value = !isDarkMode.value;
  // Lưu trạng thái vào localStorage
  localStorage.setItem('darkMode', isDarkMode.value);
}

export default function useDarkMode() {
  // Khi component mount, thiết lập class cho body nếu isDarkMode = true
  onMounted(() => {
    if (isDarkMode.value) {
      document.body.classList.add('dark-mode');
    }
  });

  // Theo dõi isDarkMode và cập nhật class của body khi thay đổi
  watch(isDarkMode, (newValue) => {
    if (newValue) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });

  return { isDarkMode, toggleDarkMode };
}
