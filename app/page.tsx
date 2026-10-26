import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* Load exact CSS */}
      <link rel="stylesheet" href="/css/style.css" />

      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-text">
          <h1>
            Menyentuh Atma,<br />
            Merasai Nafas<br />
            Tanah Jawa
          </h1>

          <p>
            &ldquo;Sebuah upaya untuk mengabadikan kemegahan pegunungan Jawa melalui dokumentasi yang bersih, jujur, dan berwibawa. Atma Java menyajikan data teknis yang berpadu dengan narasi estetika, menciptakan ruang bagi para penjelajah untuk memahami jiwa dari setiap puncak yang mereka tuju.&rdquo;
          </p>
        </div>

        <div className="info-box">
          <div className="info-item">
            <h2>45 +</h2>
            <span>&ldquo;Puncak Terdata&rdquo;</span>
          </div>

          <div className="info-item">
            <h2>3,676 m</h2>
            <span>&ldquo;Atap Tertinggi (Semeru)&rdquo;</span>
          </div>

          <div className="info-item">
            <h2>30 +</h2>
            <span>&ldquo;Hutan Lindung&rdquo;</span>
          </div>
        </div>
      </section>

      {/* TITLE */}
      <section className="title-section">
        <h2>Sang Penjelajah</h2>
        <p>Temukan Jalur yang Membawamu Menuju Jiwa Pegunungan Jawa</p>
      </section>

      {/* CARD GUNUNG */}
      <section className="card-container">
        <div className="card">
          <Link href="/sumbing-page1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img_gunung/sumbing.jpg" alt="Sumbing" />
            <div className="card-content">
              <h3>Gunung Sumbing</h3>
              <p>Jawa Tengah</p>
              <span>Ketinggian 3.371 MDPL</span>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link href="/merapi-page1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img_gunung/merapi.jpg" alt="Merapi" />
            <div className="card-content">
              <h3>Gunung Merapi</h3>
              <p>Jawa Tengah</p>
              <span>Ketinggian 2.930 MDPL</span>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link href="/salak-page1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img_gunung/salak.jpg" alt="Salak" />
            <div className="card-content">
              <h3>Gunung Salak</h3>
              <p>Jawa Barat</p>
              <span>Ketinggian 3.153 MDPL</span>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link href="/semeru-page1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img_gunung/semeru.jpg" alt="Semeru" />
            <div className="card-content">
              <h3>Gunung Semeru</h3>
              <p>Jawa Timur</p>
              <span>Ketinggian 3.676 MDPL</span>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link href="/slamet-page1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img_gunung/slamet.jpg" alt="Slamet" />
            <div className="card-content">
              <h3>Gunung Slamet</h3>
              <p>Jawa Tengah</p>
              <span>Ketinggian 3.428 MDPL</span>
            </div>
          </Link>
        </div>
      </section>

      {/* QUOTES */}
      <section className="quotes">
        <div className="quotes-box">
          <h2>Atma Java</h2>
          <p>&ldquo;Bagian dari Rangkaian Cincin Api Abadi.&rdquo;</p>
          <span>
            &ldquo;Lanskap menakjubkan Pulau Jawa adalah hasil ukiran kekuatan purba dari dasar bumi. Terletak di jantung Cincin Api Pasifik, setiap puncak menceritakan kisah pertemuan lempeng tektonik yang melahirkan kehidupan, budaya, dan kedalaman makna &apos;Atma&apos; itu sendiri.&rdquo;
          </span>
        </div>
      </section>

      <Footer />
    </>
  );
}
