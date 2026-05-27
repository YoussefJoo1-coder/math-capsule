"use client";

export default function Page() {
  const loggedIn =
    typeof window !== "undefined" &&
    localStorage.getItem("loggedIn");

  if (!loggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Platform Page
    </div>
  );
}