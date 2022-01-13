import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <p>Hello world</p>
      <p>
        <Link href="/about">About Us</Link>{" "}
      </p>
    </div>
  );
}
