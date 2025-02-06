import Task from "../images/donut-small.svg";
import Portfel from "../images/business-center.svg";
import ChekedImg from "../images/check-box.svg";
import ManagersIcon from "../images/people-alt.svg";
import Public from "../images/dns.svg";
import Tasks from "../images/donut-small.svg";
export const navItems = [
  {
    title: "Umumiy",
    img: {
      src: Public,
      alt: "umumiy icon",
    },
    link: "/",
  },
  {
    title: "Block langanlar",
    img: {
      src: ChekedImg,
      alt: "check icon",
    },
    link: "/users",
  },
  {
    title: "Managerlar",
    img: {
      src: ManagersIcon,
      alt: "people icon",
    },
    link: "/managers",
  },
  {
    title: "Hodimlar",
    img: {
      src: Portfel,
      alt: "employee icon",
    },
    link: "/employees",
  },
  {
    title: "Vazifalar",
    img: {
      src: Tasks,
      alt: "task icon",
    },
    link: "/tasks",
  },
];

export const addEmploy = [
  {
    labelText: "Familiya",
    placeholderText: "Familiyani kiriting",
    id: "last_name",
    type: "text",
    errorText: "Familiya 4 ta belgidan kop bolishi kerak",
  },
  {
    labelText: "Ism",
    placeholderText: "Ismingizni kiriting",
    id: "name",
    type: "text",
    errorText: "Ism 4 ta belgidan kop bolishi kerak",
  },
  {
    labelText: "Hodim turi",
    placeholderText: "Xodim turini tanlang",
    id: "type",
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
    id: "type",
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
