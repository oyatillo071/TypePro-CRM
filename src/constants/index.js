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
