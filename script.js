let currentDay = "1";
let currentWeek = "1-3";

function initFilters() {
  const buttons = document.querySelectorAll('.toggle-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const btn = e.target;
      const filterType = btn.getAttribute('data-filter-type');
      const value = btn.getAttribute('data-value');
      
      const parentGroup = btn.parentElement;
      parentGroup.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      
      btn.classList.add('active');
      
      if (filterType === 'day') {
        currentDay = value;
      } else if (filterType === 'week') {
        currentWeek = value;
      }
      
      applyFilters();
    });
  });
}

function applyFilters() {
  const rows = document.querySelectorAll('.lesson-row');
  
  rows.forEach(row => {
    const rowDay = row.getAttribute('data-day');
    const rowWeek = row.getAttribute('data-week');
    
    if (rowDay === currentDay && rowWeek === currentWeek) {
      row.classList.remove('hide');
    } else {
      row.classList.add('hide');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  applyFilters();
});