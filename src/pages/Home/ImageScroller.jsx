import { useRef, useEffect } from "react";

export default function ImageScroller({ images }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const imageElements = [];

    const rowCount = 4;
    const spacingY = 150 / (rowCount + 1); // Vertical spacing between rows

    images.forEach((src, index) => {
      const imgContainer = document.createElement("div");
      imgContainer.className = "absolute";
      imgContainer.style.zIndex = "30";
      
      // Assign to a row in order
      const row = index % rowCount;
      const horizontalSpacing = 4; // percentage gap between images (smaller = tighter)
      const initialX = (index * horizontalSpacing) % 100;
      const initialY = spacingY * (row + 1); // fixed Y for row

      imgContainer.style.left = `${initialX}%`;
      imgContainer.style.top = `${initialY}%`;

      // Store speed (uniform across all for smooth motion)
      const speed = 0.1;
      imgContainer.dataset.speed = speed.toString();
      imgContainer.dataset.rowY = initialY.toString();

      // Optional rotation
      const rotation = 0;
     
      // Image element
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Floating image ${index + 1}`;
      img.width = 180;
      img.height = 180;
      img.style.opacity = "0.8";
      img.style.borderRadius = "12px";
      img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      img.style.objectFit = "cover";

      imgContainer.appendChild(img);
      container.appendChild(imgContainer);
      imageElements.push(imgContainer);
    });

    // Animate diagonally (left-top → right-bottom)
    const animate = () => {
      imageElements.forEach((el) => {
        let left = parseFloat(el.style.left);
        let top = parseFloat(el.style.top);
        const speed = parseFloat(el.dataset.speed || "0.1");

        left += speed;
        top += speed;

        // Wrap around when out of bounds
        if (left > 100 || top > 100) {
          left = -20; // start slightly off-screen for smooth entry
          top = parseFloat(el.dataset.rowY || "0");
        }

        el.style.left = `${left}%`;
        el.style.top = `${top}%`;

        // Continue rotation
        const currentRotation = el.style.transform.match(/rotate\(([^)]+)\)/) || ["", "0deg"];
        const rotation = parseFloat(currentRotation[1]) + 0.1;
        el.style.transform = `rotate(${rotation}deg)`;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      imageElements.forEach((el) => el.remove());
    };
  }, [images]);

  return <div ref={containerRef} className="w-full h-full relative overflow-hidden" />;
}
