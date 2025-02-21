import { useEffect, useRef } from "react";

export function CrosshairCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size (cursor size)
    const size = 27;
    const lineLength = 60; // Length of each line
    const gap = 6; // Gap at the intersection
    const center = size / 2;
    canvas.width = size;
    canvas.height = size;

    // Function to create a gradient
    function createGradient(ctx, x1, y1, x2, y2) {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, "orange");
      gradient.addColorStop(1, "darkorange");
      return gradient;
    }

    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    // Draw horizontal lines (left & right)
    ctx.strokeStyle = createGradient(ctx, center - lineLength, center, center + lineLength, center);
    ctx.beginPath();
    ctx.moveTo(center - lineLength, center); // Left
    ctx.lineTo(center - gap, center); // Stop before center
    ctx.moveTo(center + gap, center); // Start after center
    ctx.lineTo(center + lineLength, center); // Right
    ctx.stroke();

    // Draw vertical lines (top & bottom)
    ctx.strokeStyle = createGradient(ctx, center, center - lineLength, center, center + lineLength);
    ctx.beginPath();
    ctx.moveTo(center, center - lineLength); // Top
    ctx.lineTo(center, center - gap); // Stop before center
    ctx.moveTo(center, center + gap); // Start after center
    ctx.lineTo(center, center + lineLength); // Bottom
    ctx.stroke();

    // Draw center dot
    ctx.fillStyle = "darkorange";
    ctx.beginPath();
    ctx.arc(center, center, 1, 0, Math.PI * 2);
    ctx.fill();

    // Convert canvas to data URL
    const cursorURL = canvas.toDataURL();

    // Apply cursor globally
    document.body.style.cursor = `url(${cursorURL}) ${center} ${center}, auto`;
  }, []);

  return <canvas ref={canvasRef} style={{ display: "none" }} />;
}



export function HoverCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size (cursor size)
    const size = 27;
    const lineLength = 60; // Length of each line
    const gap = 6; // Gap at the intersection
    const center = size / 2;
    canvas.width = size;
    canvas.height = size;

    // Function to create a gradient
    function createGradient(ctx, x1, y1, x2, y2) {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, "orange");
      gradient.addColorStop(1, "darkorange");
      return gradient;
    }

    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    // Draw horizontal lines (left & right)
    ctx.strokeStyle = createGradient(ctx, center - lineLength, center, center + lineLength, center);
    ctx.beginPath();
    ctx.moveTo(center - lineLength, center); // Left
    ctx.lineTo(center - gap, center); // Stop before center
    ctx.moveTo(center + gap, center); // Start after center
    ctx.lineTo(center + lineLength, center); // Right
    ctx.stroke();

    // Draw vertical lines (top & bottom)
    ctx.strokeStyle = createGradient(ctx, center, center - lineLength, center, center + lineLength);
    ctx.beginPath();
    ctx.moveTo(center, center - lineLength); // Top
    ctx.lineTo(center, center - gap); // Stop before center
    ctx.moveTo(center, center + gap); // Start after center
    ctx.lineTo(center, center + lineLength); // Bottom
    ctx.stroke();

    // Draw center dot
    ctx.fillStyle = "darkorange";
    ctx.beginPath();
    ctx.arc(center, center, 1, 0, Math.PI * 2);
    ctx.fill();

    const radius = 16; // Ensures lines touch the circle

    // Draw outer circle stroke (ensuring lines touch it)
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Convert to Data URL
    const cursorURL = canvas.toDataURL();

    // Apply custom cursor only on hover
    const hoverElements = document.querySelectorAll(".custom-cursor-hover");
    hoverElements.forEach((element) => {
      element.style.cursor = `url(${cursorURL}) 16 16, auto`;
    });
  }, []);

  return <canvas ref={canvasRef} style={{ display: "none" }} />;
}