"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function MasukPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Default admin
    if (email === "admin@atmajava.com" && password === "password123") {
      localStorage.setItem(
        "atma_user",
        JSON.stringify({ email, username: "Admin Atma" })
      );
      window.dispatchEvent(new Event("atma_auth_update"));
      alert("Selamat Datang Kembali!");
      router.push("/");
      return;
    }

    // Check localStorage
    const saved = localStorage.getItem("atma_registered_users");
    if (saved) {
      try {
        const users = JSON.parse(saved);
        const match = users.find(
          (u: any) => u.email === email && u.password === password
        );
        if (match) {
          localStorage.setItem(
            "atma_user",
            JSON.stringify({ email: match.email, username: match.username || match.email })
          );
          window.dispatchEvent(new Event("atma_auth_update"));
          alert("Selamat Datang Kembali!");
          router.push("/");
          return;
        }
      } catch (err) {}
    }

    // Gagal
    setError(true);
  };

  return (
    <>
      <link rel="stylesheet" href="/css/masuk.css" />

      <Navbar />

      <section className="login-section">
        <div className="login-box">
          <h1>Selamat Datang Kembali!</h1>

          <p className="login-desc">
            Isi formulir di bawah ini untuk masuk ke Atma Java
          </p>

          {error && (
            <p className="error-text" style={{ color: "red", marginBottom: "15px" }}>
              Email atau Password salah!
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" name="login">
              Masuk
            </button>
          </form>

          <p className="daftar-text">
            Belum memiliki akun? <Link href="/daftar">Daftar</Link>
          </p>

          <div className="separator">
            <span></span>
            <p>ATAU</p>
            <span></span>
          </div>

          <div className="social-login">
            <a href="#" className="google-btn" onClick={(e) => { e.preventDefault(); alert("Login Google"); }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icon_masuk/google.png" alt="" />
              Google
            </a>
            <a href="#" className="facebook-btn" onClick={(e) => { e.preventDefault(); alert("Login Facebook"); }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icon_masuk/facebook.png" alt="" />
              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
