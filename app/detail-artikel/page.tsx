"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/data";

function DetailContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const id = idParam ? parseInt(idParam) : 1;

  const data = ARTICLES.find((a) => a.id === id) || ARTICLES[0];
  const otherArticles = ARTICLES.filter((a) => a.id !== data.id);

  return (
    <>
      <link rel="stylesheet" href="/css/artikel1.css" />

      <Navbar />

      <section className="hero-artikel">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/assets/img_artikel/${data.gambar}`} alt="" />
      </section>

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
          {otherArticles.map((artikel) => (
            <Link
              key={artikel.id}
              href={`/detail-artikel?id=${artikel.id}`}
              className="artikel-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/assets/img_artikel/${artikel.gambar}`} alt="" />
              <div className="artikel-card-content">
                <h4>{artikel.judul}</h4>
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

export default function DetailArtikelPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailContent />
    </Suspense>
  );
}
