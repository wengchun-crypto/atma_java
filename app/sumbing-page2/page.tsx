import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOUNTAINS } from "@/lib/data";

export default function SumbingPage2() {
  const data = MOUNTAINS.find((m) => m.slug === "gunung-sumbing")!;

  return (
    <>
      <link rel="stylesheet" href="/css/sumbing-page.css" />

      <Navbar />

      <div className="main-card">
        <div
          className="image-header"
          style={{ backgroundImage: `url('/assets/img_gunung/${data.gambar}.jpg')` }}
        >
          <div className="coordinate-box">
            <p>
              <i className="fa-solid fa-location-dot"></i> {data.titik_koordinat}
            </p>
          </div>
        </div>

        <div className="content-container">
          <h1 className="mountain-title">{data.nama}</h1>

          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: data.deskripsi_page2 }}
          />

          <div className="pagination-wrapper">
            <div className="pagination">
              <Link href="/sumbing-page1" title="Kembali ke Halaman 1">
                <i className="fa-solid fa-arrow-left"></i>
              </Link>

              <Link href="/sumbing-page1">
                1
              </Link>

              <Link className="active" href="/sumbing-page2">
                2
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
