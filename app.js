const magicSchoolRooms = [
  { name: "חדר המשחקים והגמיפיקציה 🎮", link: "https://student.magicschool.ai/s/join?joinCode=2oZCog" },
  { name: "מעבדת ניהול הפרויקט 🚀", link: "https://student.magicschool.ai/s/join?joinCode=SRXRoA" },
  { name: "מעבדת עבודת הצוות 👥", link: "https://student.magicschool.ai/s/join?joinCode=iEiMvA" },
  { name: "מעבדת בקרת איכות ✅", link: "https://student.magicschool.ai/s/join?joinCode=f57gUA" },
  { name: "מעבדת ההצגה והשכנוע 🎤", link: "https://student.magicschool.ai/s/join?joinCode=GH5cWg" },
  { name: "מעבדת העיצוב ב-Canva", link: "https://student.magicschool.ai/s/join?joinCode=XiSw5g" },
  { name: "מעבדת ה-AI 🤖", link: "https://student.magicschool.ai/s/join?joinCode=oDHCCg" },
  { name: "מעבדת הרעיונות 💡", link: "https://student.magicschool.ai/s/join?joinCode=hjYMVg" },
  { name: "מעבדת החקר - חוקרים ושואלים שאלות 🔍", link: "https://student.magicschool.ai/s/join?joinCode=EWLLCQ" },
  { name: "מנטור הלמידה של גלי - תבנית בסיס 🧠", link: "https://student.magicschool.ai/s/join?joinCode=mnTzoA" }
];

const openingDate = new Date("2026-07-12T00:00:00+03:00");
const lockedMessage = "הקישור יהיה פעיל החל מ-12 ביולי.";
const linksAreOpen = new Date() >= openingDate;

const campDays = [
  {
    day: 1,
    title: "פתיחה, היכרות עם AI, התחברות וחלוקה לצוותים",
    today: "פתיחה, משחק Genially, היכרות עם חדרי MagicSchool, חלוקה לצוותים.",
    taskLink: "",
    status: ""
  },
  {
    day: 2,
    title: "בחירת אתגר, עבודת צוות ושאלת חקר",
    today: "גיבוש צוותים, בחירת אתגר חדשנות, ניסוח שאלת חקר.",
    taskLink: "",
    status: ""
  },
  {
    day: 3,
    title: "חקר, איסוף מידע והבנת הבעיה",
    today: "הבנת הבעיה, איסוף מידע, בניית מפת ידע.",
    taskLink: "",
    status: ""
  },
  {
    day: 4,
    title: "פיתוח רעיונות ובחירת פתרון",
    today: "סיעור מוחות, השוואה בין רעיונות, תכנון פרויקט.",
    taskLink: "",
    status: ""
  },
  {
    day: 5,
    title: "התחלת בנייה ב-Canva",
    today: "הדגמת Canva, התחלת בניית תוצר, בקרת איכות ראשונה.",
    taskLink: "",
    status: ""
  },
  {
    day: 6,
    title: "המשך בנייה ב-Canva ושיפור התוצר",
    today: "המשך בנייה ב-Canva, שיפור העיצוב, בחירת רכיב אינטראקטיבי לתוצר.",
    taskLink: "",
    status: ""
  },
  {
    day: 7,
    title: "בניית רכיב משחקי ושילוב עם התוצר",
    today: "עבודה בחדר המשחקים והגמיפיקציה, בניית פעילות משחקית, שילוב בתוצר ובקרת איכות.",
    taskLink: "",
    status: ""
  },
  {
    day: 8,
    title: "שיפור תוצרים, משוב ובקרת איכות",
    today: "משוב עמיתים, שיפור התוצרים, תכנון הצגה.",
    taskLink: "",
    status: ""
  },
  {
    day: 9,
    title: "הכנה להצגה וחזרות",
    today: "סיום תוצרים, כתיבת תסריט, חלוקת תפקידים וחזרות.",
    taskLink: "",
    status: ""
  },
  {
    day: 10,
    title: "תערוכת חדשנות, הצגת תוצרים וסיכום",
    today: "הצגת פרויקטים, גלריית תוצרים, רפלקציה וחלוקת תעודות.",
    taskLink: "",
    status: ""
  }
];

const roomsContainer = document.querySelector("#magicRooms");
const daysContainer = document.querySelector("#campDays");
const openingGameLink = document.querySelector("#openingGameLink");

function lockedButton(label) {
  return `
    <button class="button button-link button-disabled" type="button" data-locked-link>
      ${label}
    </button>
  `;
}

function renderMagicRooms() {
  roomsContainer.innerHTML = magicSchoolRooms
    .map((room, index) => {
      const roomAction = linksAreOpen
        ? `<a class="button button-link" href="${room.link}" target="_blank" rel="noopener">כניסה לחדר</a>`
        : lockedButton("כניסה לחדר");

      return `
        <article class="room-card">
          <span class="room-number">חדר ${index + 1}</span>
          <h3>${room.name}</h3>
          ${roomAction}
          ${linksAreOpen ? "" : `<p class="locked-note">${lockedMessage}</p>`}
        </article>
      `;
    })
    .join("");
}

function renderCampDays() {
  daysContainer.innerHTML = campDays
    .map((day) => {
      return `
        <article class="day-card">
          <span class="day-number">יום ${day.day}</span>
          <h3>${day.title}</h3>
          <dl class="day-fields">
            <div>
              <dt>מה עושים היום?</dt>
              <dd>${day.today}</dd>
            </div>
          </dl>
        </article>
      `;
    })
    .join("");
}

function setupOpeningGame() {
  if (linksAreOpen || !openingGameLink) return;

  openingGameLink.removeAttribute("href");
  openingGameLink.setAttribute("role", "button");
  openingGameLink.setAttribute("aria-disabled", "true");
  openingGameLink.classList.add("button-disabled");
  openingGameLink.insertAdjacentHTML("afterend", `<p class="locked-note">${lockedMessage}</p>`);
}

function setupLockedLinkMessage() {
  document.querySelectorAll("[data-locked-link]").forEach((button) => {
    button.addEventListener("click", () => {
      alert(lockedMessage);
    });
  });

  if (!linksAreOpen && openingGameLink) {
    openingGameLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert(lockedMessage);
    });
  }
}

renderMagicRooms();
renderCampDays();
setupOpeningGame();
setupLockedLinkMessage();
