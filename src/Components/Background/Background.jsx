import Galaxy from "./Galaxy";
import "./Background.css";

function Background() {
  return (
    <div className="site-background">
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1}
        glowIntensity={0.3}
        saturation={0}
        hueShift={140}
        twinkleIntensity={0.3}
        rotationSpeed={0.1}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.5}
        speed={1}
      />
    </div>
  );
}

export default Background;
