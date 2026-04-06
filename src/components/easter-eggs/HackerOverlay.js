import React, { useEffect, useState, useRef } from "react";

const LINES = [
  "$ ssh root@production-server",
  "Connecting to 192.168.1.42...",
  "Authentication successful.",
  "$ sudo rm -rf /node_modules",
  "Removing 847,293 files...",
  "$ npm install --force",
  "added 1337 packages in 4.2s",
  "$ git push --force origin main",
  "Enumerating objects: 42, done.",
  "remote: Deploying to production...",
  "$ echo 'All systems operational'",
  "All systems operational ✓",
  "$ cat /etc/secrets.txt",
  "Access denied. Nice try. 😏",
];

const HackerOverlay = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (currentLine >= LINES.length) return;

    const line = LINES[currentLine];
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setLines((prev) => {
          const copy = [...prev];
          copy[currentLine] = (copy[currentLine] || "") + line[currentChar];
          return copy;
        });
        setCurrentChar((c) => c + 1);
      }, 20 + Math.random() * 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="fixed inset-0 z-[998] bg-black/95 flex items-center justify-center p-8">
      <div
        ref={containerRef}
        className="w-full max-w-2xl h-96 overflow-auto bg-black border border-green-900 rounded-lg p-4 font-mono text-sm text-green-400"
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-1">
            {line}
            {i === currentLine && <span className="animate-pulse">▋</span>}
          </div>
        ))}
        {currentLine >= LINES.length && (
          <div className="mt-2 text-green-600">Connection closed.</div>
        )}
      </div>
    </div>
  );
};

export default HackerOverlay;
