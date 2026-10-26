import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOUNTAINS } from "@/lib/data";

export default function JelajahPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/jelajah.css" />

      <Navbar />

      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>
            Menyentuh Atma,<br />
            Merasai Nafas<br />
            Tanah Jawa
          </h1>
          <p>
            &ldquo;Sebuah upaya untuk mengabadikan kemegahan pegunungan Jawa melalui dokumentasi yang bersih, jujur, dan berwibawa. Atma Jawa menyajikan data teknis yang berpadu dengan narasi estetika, menciptakan ruang bagi para penjelajah untuk memahami jiwa dari setiap puncak yang mereka tuju.&rdquo;
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

      <section className="title-section">
        <h2>Titik Awal Perjalanan</h2>
        <p>&ldquo;Setiap langkah besar dimulai dari koordinat yang tepat&rdquo;</p>
      </section>

      <div className="line-map">
        <i className="fa-solid fa-location-dot"></i>
        <hr />
      </div>

      <section className="mountain-section">
        {MOUNTAINS.map((data) => (
          <div key={data.id} className="mountain-card">
            <div className="mountain-name">{data.nama_gunung}</div>

            <a
              href={data.lokasi_maps}
              target="_blank"
              rel="noopener noreferrer"
              className="search-btn"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}
