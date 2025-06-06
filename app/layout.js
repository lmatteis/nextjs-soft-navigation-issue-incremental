import Link from "next/link";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Link href="/" prefetch={false}>
          Home
        </Link>{" "}
        -{" "}
        <Link href="/foo" prefetch={false}>
          Foo
        </Link>
        {children}
      </body>
    </html>
  );
}
