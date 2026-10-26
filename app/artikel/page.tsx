import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/data";

export default function ArtikelPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/artikel.css" />

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
        <h2>Pustaka Atma</h2>
        <p>
          &ldquo;Ruang literasi untuk mendalami etika pendakian dan wawasan
          konservasi. Temukan panduan bijak dan kabar terbaru dari
          ekosistem pegunungan Jawa.&rdquo;
        </p>
      </section>

      <section className="card-container">
        {ARTICLES.map((artikel) => (
          <Link
            key={artikel.id}
            href={`/detail-artikel?id=${artikel.id}`}
            className="card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/assets/img_artikel/${artikel.gambar}`} alt="artikel" />
            <div className="card-content">
              <h3>{artikel.judul}</h3>
              <p>{artikel.quote}</p>
              <span>▶</span>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </>
  );
}
