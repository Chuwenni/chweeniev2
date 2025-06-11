let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar() {
  const calendarGrid = document.getElementById('calendarGrid');
  const monthLabel = document.getElementById('monthLabel');

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

  monthLabel.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  calendarGrid.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('day-empty');
    calendarGrid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement('div');
    dayCell.textContent = day;
    dayCell.classList.add('day');

    if (day === 21) {
      dayCell.classList.add('marked');
    }

    // Pass both day and the cell element to the event
    dayCell.addEventListener('click', () => openModal(day, dayCell));
    calendarGrid.appendChild(dayCell);
  }
}

function changeMonth(offset) {
  currentMonth += offset;

  // Handle year change
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  } else if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  renderCalendar();
}

function openModal(day, element) {
  const modal = document.getElementById('myModal');
  const modalText = document.getElementById('modalText');

  if (element.classList.contains('marked')) {
    modalText.textContent = `Our monthsary is on ${day}`;
  } else {
    modalText.textContent = `Nothing special on ${day}`;
  }

  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', closeModal);

// Initial render of the calendar
renderCalendar();

// Event listeners for changing months
document.getElementById('prevMonth').addEventListener('click', () => changeMonth(-1));
document.getElementById('nextMonth').addEventListener('click', () => changeMonth(1));
