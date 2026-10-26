import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/data";

export default function Artikel1Page() {
  const data = ARTICLES[0];
  const otherArticles = ARTICLES.filter((a) => a.id !== 1);

  return (
    <>
      <link rel="stylesheet" href="/css/artikel1.css" />

      <Navbar />

      <div className="hero-artikel">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/assets/img_artikel/${data.gambar}`} alt="Banner Artikel" />
      </div>

      <section className="artikel-detail">
        <h1>{data.judul}</h1>

        <div className="artikel-content">
          <div className="quote-box" style={{ whiteSpace: "pre-line" }}>
            {data.quote}
          </div>

          <div
            className="isi-artikel"
            dangerouslySetInnerHTML={{ __html: data.isi }}
          />
        </div>
      </section>

      <section className="artikel-lain">
        <h3>Artikel lain yang mungkin anda suka</h3>

        <div className="artikel-card-container">
          {otherArticles.map((data_artikel) => (
            <Link
              key={data_artikel.id}
              href={`/detail-artikel?id=${data_artikel.id}`}
              className="artikel-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/assets/img_artikel/${data_artikel.gambar}`} alt="artikel" />
              <div className="artikel-card-content">
                <h4>{data_artikel.judul}</h4>
                <button type="button">
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
