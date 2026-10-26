import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-left">
          <div className="footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img_logo/logoatma.png" alt="logo" />
            <h2>Atma Java</h2>
          </div>
          <p>
            Menyajikan informasi alam dan ekosistem yang mengelilingi gunung di Pulau Jawa yang diposisikan sebagai jurnal digital eksklusif.
          </p>
        </div>

        <div className="footer-center">
          <div className="footer-contact">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              SMK Telkom Sandhy Putra Purwokerto berlokasi di Jl. DI Panjaitan 
              No.128, Karangreja, Purwokerto Kulon, Kec. Purwokerto Selatan, 
              Kabupaten Banyumas, Jawa Tengah
            </p>
          </div>
          <div className="footer-contact">
            <i className="fa-regular fa-envelope"></i>
            <p>@AtmaJava</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-menu">
            <div className="footer-column">
              <h3>Telusuri</h3>
              <p><Link href="/">Home</Link></p>
              <p><Link href="/jelajah">Jelajahi</Link></p>
              <p><Link href="/artikel">Artikel</Link></p>
              <p><Link href="/about">About Us</Link></p>
            </div>

            <div className="footer-column">
              <h3>Akun</h3>
              <p><Link href="/masuk">Masuk</Link></p>
              <p><Link href="/daftar">Daftar</Link></p>
            </div>

            <div className="footer-column">
              <h3>Komunitas</h3>
              <p>
                <a
                  href="https://www.instagram.com/atma.java?igsh=MW15NWF3MWduY3RyaA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        Copyright © 2026 Atma Java. All rights reserved.
      </div>
    </>
  );
}
