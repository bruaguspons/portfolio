"use client";

import Grainient from "@/components/Grainient";

const GrainientBackground = (): React.ReactNode => (
  <div className="fixed inset-0 -z-10">
    <Grainient
      colorBalance={0.0}
      warpStrength={0.4}
      warpFrequency={3.0}
      warpAmplitude={80.0}
      blendAngle={0.0}
      blendSoftness={0.08}
      rotationAmount={400.0}
      noiseScale={2.0}
      grainAmount={0.055}
      grainScale={2.0}
      contrast={1.3}
      gamma={1.0}
      saturation={0.8}
      centerX={0.0}
      centerY={0.0}
      zoom={0.9}
      color1="#0a1e30"
      color2="#0d3a40"
      color3="#030b10"
    />
  </div>
);

export default GrainientBackground;
