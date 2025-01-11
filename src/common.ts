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
