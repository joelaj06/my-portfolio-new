interface Props {
  mousePos: { x: number; y: number };
  radius: number;
  blurRadius: number; // Controls the blur radius of the grid overlay
}
const GridOverlay: React.FC<Props> = ({ mousePos, radius, blurRadius }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{
        boxShadow: "0 0 10px 2px #0799c8", // Soft glowing effect
        backgroundImage: `linear-gradient(90deg, rgba(7,153,200,0.2) 1px, transparent 1px),
                            linear-gradient(rgba(7,153,200,0.2) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        mixBlendMode: "screen",
        opacity: 0.8,
        maskImage: `radial-gradient(circle ${radius + blurRadius}px at ${
          mousePos.x
        }px ${
          mousePos.y
        }px, rgba(7,153,200,0.7), rgba(7,153,200,0.3) 40%, rgba(7,153,200,0) 70%)`,
        WebkitMaskImage: `radial-gradient(circle ${radius + blurRadius}px at ${
          mousePos.x
        }px ${
          mousePos.y
        }px, rgba(7,153,200,0.7), rgba(7,153,200,0.3) 40%, rgba(7,153,200,0) 70%)`,
      }}
    ></div>
  );
};

export default GridOverlay;
