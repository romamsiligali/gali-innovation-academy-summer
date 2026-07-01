const magicSchoolRooms = [
  { name: "מנטור הלמידה של גלי", link: "MAGICSCHOOL_ROOM_1_LINK" },
  { name: "חדר חקר הרעיונות", link: "MAGICSCHOOL_ROOM_2_LINK" },
  { name: "חדר ניסוח פרומפטים", link: "MAGICSCHOOL_ROOM_3_LINK" },
  { name: "חדר בדיקת מידע", link: "MAGICSCHOOL_ROOM_4_LINK" },
  { name: "חדר תכנון פרויקט", link: "MAGICSCHOOL_ROOM_5_LINK" },
  { name: "חדר יצירת תוכן", link: "MAGICSCHOOL_ROOM_6_LINK" },
  { name: "חדר עיצוב והצגה", link: "MAGICSCHOOL_ROOM_7_LINK" },
  { name: "חדר עבודת צוות", link: "MAGICSCHOOL_ROOM_8_LINK" },
  { name: "חדר משוב ושיפור", link: "MAGICSCHOOL_ROOM_9_LINK" },
  { name: "חדר הכנה להצגת תוצר", link: "MAGICSCHOOL_ROOM_10_LINK" }
];

const campDays = [
  "היכרות עם האקדמיה",
  "רעיונות ושאלות טובות",
  "פרומפטים שמובילים לתשובות טובות",
  "בדיקת מידע ואחריות דיגיטלית",
  "תכנון הפרויקט המסכם",
  "יצירת תוכן בעזרת AI",
  "עיצוב והצגת רעיונות",
  "עבודת צוות ושיפור תוצרים",
  "חזרות ומשוב לפני הצגה",
  "הצגת תוצרים וסיכום המסע"
];

const roomsContainer = document.querySelector("#magicRooms");
const daysContainer = document.querySelector("#campDays");
const attendanceMessage = document.querySelector("#attendanceMessage");
const attendanceButtons = document.querySelectorAll("[data-attendance]");

function renderMagicRooms() {
  roomsContainer.innerHTML = magicSchoolRooms
    .map((room, index) => {
      return `
        <article class="room-card">
          <span class="room-number">חדר ${index + 1}</span>
          <h3>${room.name}</h3>
          <a class="button button-link" href="${room.link}">כניסה לחדר</a>
        </article>
      `;
    })
    .join("");
}

function renderCampDays() {
  daysContainer.innerHTML = campDays
    .map((title, index) => {
      const dayNumber = index + 1;
      return `
        <article class="day-card">
          <span class="day-number">יום ${dayNumber}</span>
          <h3>${title}</h3>
          <dl class="day-fields">
            <div>
              <dt>מה עושים היום?</dt>
              <dd>טקסט זמני לעריכה בהמשך.</dd>
            </div>
            <div>
              <dt>קישור למשימה</dt>
              <dd><a href="DAY_${dayNumber}_TASK_LINK">קישור זמני למשימה</a></dd>
            </div>
            <div>
              <dt>סטטוס אישי</dt>
              <dd>טקסט זמני לסימון התקדמות.</dd>
            </div>
          </dl>
        </article>
      `;
    })
    .join("");
}

function todayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `attendance-${year}-${month}-${day}`;
}

function saveAttendance(value) {
  localStorage.setItem(todayKey(), value);
  attendanceMessage.textContent = "הסימון נשמר במכשיר זה.";
}

function showSavedAttendance() {
  const savedAttendance = localStorage.getItem(todayKey());
  if (savedAttendance) {
    attendanceMessage.textContent = "הסימון נשמר במכשיר זה.";
  }
}

attendanceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    saveAttendance(button.dataset.attendance);
  });
});

renderMagicRooms();
renderCampDays();
showSavedAttendance();
