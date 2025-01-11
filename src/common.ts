import ReactImg from "./assets/reactjs.png";
import FlutterImg from "./assets/flutter.png";
import NodeJsImg from "./assets/nodejs.png";
import MongodbImg from "./assets/mongodb.png";
import ExpressjsImg from "./assets/expressjs.png";
import SocketIoImg from "./assets/socketio.png";

export interface TechStack {
  name: string;
  image: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Auto Manager",
    description:
      "A fleet management app for car owners to efficiently manage vehicles, drivers, sales, expenses, and leasing.",
    link: "https://github.com/joelaj06/auto-manager",
  },
  {
    title: "Auto Manager API",
    description:
      "A backend service powering AutoManager, with endpoints for fleet tracking, driver management, sales, expenses, and leasing.",
    link: "https://github.com/joelaj06/auto-manager-api",
  },
  {
    title: "Workforce Compass Mobile",
    description:
      "A workforce management app for employees to receive tasks, clock in/out, chat, and use maps with geofence constraints.",
    link: "https://github.com/joelaj06/workforc-compass-mobile",
  },
  {
    title: "Workforce Compass Web Portal",
    description:
      "A management tool for supervisors to assign tasks, manage employees, view reports, and oversee workforce productivity.",
    link: "https://github.com/joelaj06/workforce-compass",
  },
  {
    title: "Roll Kall Backend",
    description:
      "The backend for Workforce Compass, providing APIs for tasks, check-ins, notifications, and workforce communication.",
    link: "https://github.com/joelaj06/roll-kall-backend",
  },
  {
    title: "Bookme",
    description:
      "An app for small businesses to showcase services, allowing clients to browse, book, and manage appointments.",
    link: "https://github.com/joelaj06/bookme",
  },
];

// export const projects: Project[] = [
//   {
//     title: "Auto Manager",
//     description:
//       "A comprehensive fleet management app designed for car owners to efficiently manage their vehicles and drivers. With features to track vehicle assignments, monitor driver performance, record weekly sales, manage expenses, and handle car leasing, AutoManager simplifies the process of overseeing fleet operations.",
//     link: "https://github.com/joelaj06/auto-manager",
//   },
//   {
//     title: "Auto Manager API",
//     description:
//       "A robust backend service designed to power the AutoManager platform. It provides a seamless interface for managing fleet operations programmatically. With endpoints for tracking vehicles, managing driver assignments, recording and retrieving sales, monitoring expenses, and handling car leasing operations, the API ensures efficient data synchronization and automation across all features. Scalable and secure, the AutoManager API is built to support car owners in integrating fleet management capabilities into their workflows with ease.",
//     link: "https://github.com/joelaj06/auto-manager-api",
//   },
//   {
//     title: "Workforce Compass Mobile",
//     description:
//       "Workforce Compass is a workforce management mobile app designed to streamline employee operations. The app allows employees to receive tasks, clock in and clock out, and communicate seamlessly via its chat feature. With geofence detection, it ensures that check-ins and check-outs occur only within designated areas. Additionally, the inbuilt map aids employees in route planning and destination identification, making it an all-in-one solution for efficient task management and workforce coordination.",
//     link: "https://github.com/joelaj06/workforc-compass-mobile",
//   },
//   {
//     title: "Workforce Compass Web Portal",
//     description:
//       "A powerful management tool designed for supervisors and managers to oversee and coordinate workforce operations efficiently. The portal enables managers to assign tasks to employees, add and manage employee profiles, view detailed reports, and monitor workforce productivity. With an intuitive interface and robust features, the web portal complements the mobile app, providing a comprehensive solution for effective workforce management.",
//     link: "https://github.com/joelaj06/workforce-compass",
//   },
//   {
//     title: "Roll Kall Backend",
//     description:
//       "A backend service designed to power the Workforce Compass mobile and web app. It provides a seamless interface for managing employee operations. With endpoints for managing tasks, checking in and out, receiving notifications, and communicating seamlessly via its chat feature, the API ensures efficient data synchronization and automation across all features. Scalable and secure, the Workforce Compass API is built to support workforce management in organizations with a diverse range of employees.",
//     link: "https://github.com/joelaj06/roll-kall-backend",
//   },
//   {
//     title: "Bookme",
//     description:
//       "A user-friendly app designed for small-scale businesses to connect with clients effortlessly. It enables businesses to showcase their services while allowing clients to browse, book, and manage appointments conveniently. With streamlined booking features and an intuitive interface, BookMe bridges the gap between service providers and clients, making it easier to access and manage essential business services.",
//     link: "https://github.com/joelaj06/bookme",
//   },
// ];

export const stacks: TechStack[] = [
  {
    name: "Flutter",
    image: FlutterImg,
    color: "#0086FF",
  },
  {
    name: "React",
    image: ReactImg,
    color: "#61DAFB",
  },

  {
    name: "Node.js",
    image: NodeJsImg,
    color: "#3C873A",
  },
  {
    name: "MongoDB",
    image: MongodbImg,
    color: "#47A248",
  },
  {
    name: "Express.js",
    image: ExpressjsImg,
    color: "#9b9b9b",
  },
  {
    name: "Socket.io",
    image: SocketIoImg,
    color: "#010101",
  },
];
