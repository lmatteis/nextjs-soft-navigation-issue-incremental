// Function to generate a large number (approximately 400KB when rendered)
function generateLargeNumber() {
  // Generate a number with 100,000 digits
  const digits = Array.from({ length: 100000 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");
  return digits;
}

export default async function LargeNumberDisplay() {
  const largeNumber = generateLargeNumber();

  await new Promise((resolve) => setImmediate(resolve));

  return (
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
      {largeNumber}
    </pre>
  );
}
