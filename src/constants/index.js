import DNS from "../images/dns.svg";
import Check from "../images/check-box.svg";
import People from "../images/people-alt.svg";
import Employee from "../images/business-center.svg";
import Task from "../images/donut-small.svg";

export const navItems = [
  {
    title: "Umumiy",
    img: {
      src: DNS,
      alt: "umumiy icon",
    },
    link: "/public",
  },
  {
    title: "Block langanlar",
    img: {
      src: Check,
      alt: "check icon",
    },
    link: "/blocks",
  },
  {
    title: "Managerlar",
    img: {
      src: People,
      alt: "people icon",
    },
    link: "/managers",
  },
  {
    title: "Hodimlar",
    img: {
      src: Employee,
      alt: "employee icon",
    },
    link: "employes",
  },
  {
    title: "Vazifalar",
    img: {
      src: Task,
      alt: "task icon",
    },
    link: "/tasks",
  },
];

export const addEmploy = [
  {
    labelText: "Familiya",
    placeholderText: "Familiyani kiriting",
    id: "Familiya",
    type: "text",
    errorText: "Familiya 4 ta belgidan kop bolishi kerak",
  },
  {
    labelText: "Ism",
    placeholderText: "Ismingizni kiriting",
    id: "Ism",
    type: "text",
    errorText: "Ism 4 ta belgidan kop bolishi kerak",
  },
  {
    labelText: "Hodim turi",
    placeholderText: "Xodim turini tanlang",
    id: "employType",
    type: "select",
    errorText: "Hodim turi tanlash majburiy",
    values: ["Hodim", "Meneger"],
  },
  {
    labelText: "Email",
    placeholderText: "Email kiriting",
    id: "email",
    errorText: "Email xato kiritilgan",
    type: "email",
  },
];

export const addTasks = [
  {
    labelText: "Hodim turi",
    placeholderText: "Xodim turini tanlang",
    id: "employType",
    type: "select",
    errorText: "Hodim turi tanlash majburiy",
    values: ["Hodim", "Meneger"],
  },
  {
    labelText: "Vazifa nomi",
    placeholderText: "vazifani kiriting",
    id: "task",
    type: "text",
    errorText: "task 4 ta belgidan kop bolishi kerak",
  },
];

export const tableData = [
  {
    name: "Петренко Владимир",
    type: "Manager",
    phone: "+7 900 000-00-00",
    email: "v.petrenko@mail.ru",
  },
  {
    name: "Новиков Иван",
    type: "Hodim",
    phone: "+7 900 000-00-00",
    email: "i.novikov@mail.ru",
  },
  {
    name: "Макарова Анна",
    type: "Manager",
    phone: "+7 900 000-00-00",
    email: "a.makarova@gmail.com",
  },
];
