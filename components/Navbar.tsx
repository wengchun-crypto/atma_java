"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("atma_user");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(parsed.username || parsed.email);
      } catch (e) {
        // ignore
      }
    }

    const handler = () => {
      const s = localStorage.getItem("atma_user");
      if (s) {
        try {
          const p = JSON.parse(s);
          setUser(p.username || p.email);
        } catch (e) {}
      } else {
        setUser(null);
      }
    };

    window.addEventListener("atma_auth_update", handler);
    return () => window.removeEventListener("atma_auth_update", handler);
  }, []);

  const handleLogout = () => {
    if (confirm("Yakin ingin keluar?")) {
      localStorage.removeItem("atma_user");
      setUser(null);
      window.dispatchEvent(new Event("atma_auth_update"));
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img_logo/logoatma.png" alt="logo Atma Java" />
        </Link>
      </div>

      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/jelajah">Jelajah</Link>
        </li>
        <li>
          <Link href="/artikel">Artikel</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>

      <div className="nav-button">
        {user ? (
          <div className="user-menu" style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", fontSize: "14px", color: "#5d4336" }}>
              Halo, <b>{user}</b>
            </span>
            <button className="btn-masuk" onClick={handleLogout} style={{ cursor: "pointer" }}>
              Keluar
            </button>
          </div>
        ) : (
          <>
            <Link href="/masuk" style={{ textDecoration: "none" }}>
              <button className="btn-masuk">Masuk</button>
            </Link>
            <Link href="/daftar" style={{ textDecoration: "none" }}>
              <button className="btn-daftar">Daftar</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
