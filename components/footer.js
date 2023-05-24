import React from "react";
import Container from "./container";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className=" bg-palette-white text-black">
      <Container>
        <div className=" border-t border-balck py-4">
          <div className="flex flex-wrap text-[10px]">
            <div className="space-x-4 mb-1 md:mb-0">
              <a
                href="https://www.350lab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-gray-500 focus:text-gray-500"
              >
                Maintained by 350lab Studio
              </a>
              <Link href="/legal">Legal notice</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
