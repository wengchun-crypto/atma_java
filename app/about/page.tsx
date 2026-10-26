import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/about.css" />

      <Navbar />

      <section className="about">
        <h1>About Us</h1>

        <div className="about-hero">
          <div className="about-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img_logo/logoatma.png" alt="Logo Atma Java" />
          </div>

          <div className="about-hero-content">
            <div className="about-tagline">
              &ldquo;Dalam bahasa Sansekerta, Atma berarti &quot;jiwa&quot; atau &quot;napas&quot;. Gunung-gunung di Pulau Jawa adalah napas bagi ekosistem dan budaya di sekitarnya. Nama ini merepresentasikan website yang menjadi &quot;jiwa&quot; dari informasi gunung di Jawa—menyajikan data dengan penuh penghormatan terhadap alam.&rdquo;
            </div>

            <div className="about-makna-box">
              <h2>Makna Slogan</h2>
              <div className="makna-sub">
                <strong>&ldquo;Jejak Data&rdquo;:</strong>
                <p>
                  Bukan sekadar bercerita tentang keindahan gunung, tetapi kami juga menelusuri data, angka, dan fakta ilmiah yang tertinggal sebagai &quot;jejak&quot; dari waktu ke waktu.
                </p>
              </div>
              <div className="makna-sub">
                <strong>&ldquo;Di Balik Fenomena&rdquo;:</strong>
                <p>
                  Fenomena adalah apa yang kita lihat di permukaan—keindahan puncak, letusan, atau upacara adat. &quot;Di Balik&quot; artinya kami menyelami, menganalisis, dan mengungkap cerita, alasan, dan kebenaran yang tidak terlihat secara langsung.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="aspirasi">
          <h2>ASPIRASI KAMI</h2>
          <p>
            &ldquo;Menjadi jurnal digital terkemuka yang mengabadikan esensi pegunungan Jawa melalui harmoni data, edukasi, dan estetika.&rdquo;
          </p>
        </div>

        <div className="langkah">
          <h2>LANGKAH KAMI</h2>
          <ul>
            <li>
              <strong>Literasi Alam:</strong> Menyediakan basis data geologi dan profil gunung secara akurat untuk keamanan dan pengetahuan.
            </li>
            <li>
              <strong>Konservasi Narasi:</strong> Mendokumentasikan kekayaan ekosistem dan warisan budaya yang membentuk identitas setiap puncak.
            </li>
            <li>
              <strong>Etika Penjelajahan:</strong> Menginspirasi standar keselamatan dan kesadaran lingkungan bagi para penggiat alam.
            </li>
            <li>
              <strong>Estetika Informasi:</strong> Menghadirkan ruang informasi yang bersih dan eksklusif untuk pengalaman pengguna yang mendalam.
            </li>
          </ul>
        </div>

        <div className="team-section">
          <div className="team-left">
            <h2>TIM/KONTRIBUTOR</h2>
            <div className="team-container-flex">
              <div className="team-names">
                <div className="member-item">1. Benita Maharani Roja.</div>
                <div className="member-item">2. Haya Salsabil Fadiyah.</div>
                <div className="member-item">3. Krinca Bilqis Athariga.</div>
                <div className="member-item">4. Sindi Dwi Kartika.</div>
                <div className="member-item">5. Wiqie Silviana Ernesia N.</div>
              </div>
              <div className="team-contacts">
                <div className="contact-title">
                  CONTACT <i className="fab fa-instagram"></i>
                </div>
                <div className="member-item">
                  <a href="https://instagram.com/goisseigo" target="_blank" rel="noopener noreferrer">
                    @goisseigo
                  </a>
                </div>
                <div className="member-item">
                  <a href="https://instagram.com/hayl_yaya" target="_blank" rel="noopener noreferrer">
                    @hayl_yaya
                  </a>
                </div>
                <div className="member-item">
                  <a href="https://instagram.com/xyhzcawkl" target="_blank" rel="noopener noreferrer">
                    @xyhzcawkl
                  </a>
                </div>
                <div className="member-item">
                  <a href="https://instagram.com/ssnndw._" target="_blank" rel="noopener noreferrer">
                    @ssnndw._
                  </a>
                </div>
                <div className="member-item">
                  <a href="https://instagram.com/wiq1e" target="_blank" rel="noopener noreferrer">
                    @wiq1e
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
