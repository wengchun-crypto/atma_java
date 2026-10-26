"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { MOUNTAINS } from "@/lib/data";

function DetailGunungContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const id = idParam ? parseInt(idParam) : 1;

  const data = MOUNTAINS.find((m) => m.id === id) || MOUNTAINS[0];

  return (
    <>
      <link rel="stylesheet" href="/css/style.css" />

      <Navbar />

      <div style={{ padding: "100px 20px", fontFamily: "'Poppins', sans-serif" }}>
        <h1>Detail Gunung: {data.nama}</h1>

        <div className="content">
          <p>{data.deskripsi}</p>
        </div>

        <br />

        <a href={data.lokasi_maps} target="_blank" rel="noopener noreferrer">
          Buka Maps
        </a>

        <br />
        <br />

        <Link href="/jelajah">Kembali</Link>
      </div>
    </>
  );
}

export default function DetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailGunungContent />
    </Suspense>
  );
}
