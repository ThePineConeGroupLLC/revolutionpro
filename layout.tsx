import "./globals.css";

export const metadata = {
  title: "The Rural Revolution",
  description: "Rebuilding small-town economies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}