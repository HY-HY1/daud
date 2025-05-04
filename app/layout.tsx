import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daud McDonald - Your Voice for St Paul's",
  description: "Daud McDonald is a dedicated community leader and Chairman of the St Paul's Residents' Association, working to improve the quality of life for all residents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="text-black">
        {children}
        </div>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} Daud McDonald. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300 transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-300 transition">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
