"use client";

import { useEffect, useRef } from "react";

// Adapted from Coetus's FluidBackground. Pure canvas + RAF — no dependencies.
// Sparse amber nodes orbit slowly-drifting centres; nearby nodes are connected
// by proximity-faded lines. One fixed "leader" node sits at viewport centre
// with a soft radial glow.

const ACCENT = "#f59e0b"; // --color-mxf-amber
const BG = "#0b0a08"; // --color-mxf-bg
const CONNECTION_DISTANCE = 180;
const NODE_COUNT = 38;

interface Node {
  x: number;
  y: number;
  radius: number;
  isLeader: boolean;
  angle: number;
  orbitSpeed: number;
  orbitRadius: number;
  orbitCenterX: number;
  orbitCenterY: number;
}

const hexToRgba = (hex: string, alpha: number): string => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return `rgba(245, 158, 11, ${alpha})`;
  const r = parseInt(m[1], 16);
  const g = parseInt(m[2], 16);
  const b = parseInt(m[3], 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const nodes: Node[] = [];

    nodes.push({
      x: width / 2,
      y: height / 2,
      radius: 4,
      isLeader: true,
      angle: 0,
      orbitSpeed: 0,
      orbitRadius: 0,
      orbitCenterX: width / 2,
      orbitCenterY: height / 2,
    });

    for (let i = 0; i < NODE_COUNT; i++) {
      const orbitCenterX = Math.random() * width;
      const orbitCenterY = Math.random() * height;
      const orbitRadius = 20 + Math.random() * 80;
      const angle = Math.random() * Math.PI * 2;
      nodes.push({
        x: orbitCenterX + Math.cos(angle) * orbitRadius,
        y: orbitCenterY + Math.sin(angle) * orbitRadius,
        radius: 1.5 + Math.random() * 1.5,
        isLeader: false,
        angle,
        orbitSpeed:
          (0.0008 + Math.random() * 0.001) * (Math.random() > 0.5 ? 1 : -1),
        orbitRadius,
        orbitCenterX,
        orbitCenterY,
      });
    }

    let animId = 0;
    let time = 0;

    function render() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const proximity = 1 - dist / CONNECTION_DISTANCE;
            const isLeaderEdge = nodes[i].isLeader || nodes[j].isLeader;
            const alpha = isLeaderEdge ? proximity * 0.3 : proximity * 0.28;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = hexToRgba(ACCENT, alpha);
            ctx.lineWidth = isLeaderEdge ? 0.8 : 0.5;
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        if (node.isLeader) {
          const glow = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            18
          );
          glow.addColorStop(0, hexToRgba(ACCENT, 0.25));
          glow.addColorStop(1, hexToRgba(ACCENT, 0));
          ctx.beginPath();
          ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = hexToRgba(ACCENT, 0.9);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = hexToRgba(ACCENT, 0.55);
          ctx.fill();
        }
      }
    }

    function tick() {
      time++;
      for (let i = 1; i < nodes.length; i++) {
        const n = nodes[i];
        n.angle += n.orbitSpeed;
        n.orbitCenterX += Math.sin(time * 0.0003 + i) * 0.08;
        n.orbitCenterY += Math.cos(time * 0.0004 + i) * 0.08;

        if (n.orbitCenterX < -100) n.orbitCenterX = width + 100;
        if (n.orbitCenterX > width + 100) n.orbitCenterX = -100;
        if (n.orbitCenterY < -100) n.orbitCenterY = height + 100;
        if (n.orbitCenterY > height + 100) n.orbitCenterY = -100;

        n.x = n.orbitCenterX + Math.cos(n.angle) * n.orbitRadius;
        n.y = n.orbitCenterY + Math.sin(n.angle) * n.orbitRadius;
      }

      render();
      animId = requestAnimationFrame(tick);
    }

    if (reducedMotion) {
      // Static frame — same composition, no animation.
      render();
    } else {
      tick();
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      nodes[0].x = width / 2;
      nodes[0].y = height / 2;
      nodes[0].orbitCenterX = width / 2;
      nodes[0].orbitCenterY = height / 2;
      if (reducedMotion) render();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
