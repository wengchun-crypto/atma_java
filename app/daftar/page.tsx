"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function DaftarPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingRaw = localStorage.getItem("atma_registered_users");
    let usersList = [];
    if (existingRaw) {
      try {
        usersList = JSON.parse(existingRaw);
      } catch (err) {
        usersList = [];
      }
    }

    const exists = usersList.some((u: any) => u.email === email);
    if (exists || email === "admin@atmajava.com") {
      alert("Email sudah terdaftar!");
      return;
    }

    usersList.push({ email, password, username: email.split("@")[0] });
    localStorage.setItem("atma_registered_users", JSON.stringify(usersList));

    alert("Pendaftaran berhasil!");
    router.push("/");
  };

  return (
    <>
      <link rel="stylesheet" href="/css/daftar.css" />

      <Navbar />

      <section className="register-section">
        <div className="register-box">
          <h1>Selamat Datang!</h1>

          <p className="register-desc">
            Pilih salah satu metode pendaftaran di bawah ini untuk mendaftarkan akun ke Atma Java
          </p>

          <div className="social-login">
            <a href="#" className="google-btn" onClick={(e) => { e.preventDefault(); alert("Daftar Google"); }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icon_masuk/google.png" alt="" />
              Google
            </a>
            <a href="#" className="facebook-btn" onClick={(e) => { e.preventDefault(); alert("Daftar Facebook"); }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icon_masuk/facebook.png" alt="" />
              Facebook
            </a>
          </div>

          <div className="separator">
            <span></span>
            <p>ATAU</p>
            <span></span>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan Email"
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

            <button type="submit" name="register">
              Daftar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
