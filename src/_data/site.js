// Everything you'd want to change in one place.
export default {
  name: "Cultivate Local",
  url: "https://www.cultivatelocalfood.com",
  city: "Indianapolis, Indiana",
  email: "hello@cultivatelocalfood.com",
  phone: "(317) 528-0078",
  phoneTel: "+13175280078",
  hours: "Tuesday through Friday, 3 to 7pm Eastern",
  hoursShort: "Tue–Fri, 3–7pm ET",

  // Google Calendar appointment schedule.
  // Paste the "booking page" link from Google Calendar here
  // (looks like https://calendar.google.com/calendar/appointments/schedules/AcZssZ...).
  // Leave blank and the Book page shows phone, email, and the form instead.
  bookingUrl: "",

  // Tally form IDs (the part after tally.so/r/)
  tally: {
    intake: "BE4ZkY",
    selfCheck: "kba56j",
  },

  // Google Analytics 4 measurement ID, like "G-XXXXXXXXXX". Blank = no analytics script.
  ga4: "",

  nav: [
    { label: "Services", url: "/services/" },
    { label: "Work", url: "/work/" },
    { label: "About", url: "/about/" },
    { label: "Resources", url: "/resources/" },
  ],
};
