export function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function timeStamp() {
   return Math.floor(Date.now() / 1000);
}

export function getDateNow() {
   const now = new Date();
   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
   ];
   const dayName = days[now.getDay()];
   const dateNow = now.getDate();
   const monthName = months[now.getMonth()];
   return {
      date: dateNow,
      day: dayName,
      month: monthName
   };
}

export function getRandomText(min, max) {
   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   const length = Math.floor(Math.random() * (max - min + 1)) + min;
   let result = "";

   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }

   return result;
}

export function truncateText(text, maxLength) {
   return text.length > maxLength ? text.slice(0, maxLength) : text;
}
