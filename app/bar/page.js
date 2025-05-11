import { Suspense } from "react";

// Function to generate a large number (approximately 400KB when rendered)
function generateLargeNumber() {
  // Generate a number with 100,000 digits
  const digits = Array.from({ length: 100000 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");
  return digits;
}

export default async function Page() {
  const largeNumber = generateLargeNumber();

  return (
    <div className="mt-8 rounded-lg bg-gray-800 p-4">
      <h2 className="mb-2 text-lg font-semibold text-gray-300">Bar</h2>
      <Suspense>
        <pre className="max-h-96 overflow-auto text-xs text-gray-400">
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
          {largeNumber}
        </pre>
      </Suspense>
      Done!
    </div>
  );
}
