import "./globals.css"; // Include your global styles
import Head from "next/head";

export const metadata = {
  title: "Voltas Engineering",
  description: "Voltas Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-montserrat">
        {children}
      </body>
    </html>
  );
}
