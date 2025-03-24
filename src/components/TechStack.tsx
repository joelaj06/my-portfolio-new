import { Chip, Avatar } from "@mui/material";
import { stacks } from "../common";

const TechStack = () => (
  <div>
    <h2 className="text-xl font-bold">🛠 Tech Stack</h2>
    <div className="flex flex-row gap-2 p-1">
      {stacks.map((stack, index) => (
        <Chip
          key={index}
          avatar={<Avatar alt={stack.name} src={stack.image} />}
          label={stack.name}
          variant="outlined"
          sx={{
            borderRadius: "6px",
            height: "1.5rem",
            paddingBlock: "1.0rem",
            borderColor: stack.color,
            color: "white",
          }}
        />
      ))}
    </div>
  </div>
);

export default TechStack;
