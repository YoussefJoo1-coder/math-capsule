// @ts-nocheck
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const [code, setCode] =
    useState("");

  const login = () => {

    if (code === "ADMIN") {

      localStorage.setItem(
        "admin",
        "true"
      );
    }

    localStorage.setItem(
      "loggedIn",
      "true"
    );

    router.push(
      "/platform"
    );
  };

  return (
    <main
      style={{
        background:
          "black",
        color: "white",
        minHeight:
          "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems:
          "center",
        flexDirection:
          "column",
        gap: "20px"
      }}
    >

      <h1
        style={{
          color:
            "yellow",
          fontSize:
            "50px"
        }}
      >
        Math Capsule
      </h1>

      <input
        placeholder="Enter Code"
        value={code}
        onChange={(e) =>
          setCode(
            e.target.value
          )
        }
        style={{
          padding: "15px",
          width: "300px",
          borderRadius:
            "10px"
        }}
      />

      <button
        onClick={login}
        style={{
          padding:
            "15px 30px",
          background:
            "yellow",
          color:
            "black",
          border:
            "none",
          borderRadius:
            "10px",
          fontWeight:
            "bold"
        }}
      >
        Login
      </button>

    </main>
  );
}