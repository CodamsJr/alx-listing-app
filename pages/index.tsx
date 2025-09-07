import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="p-6">
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb clone listing page" />
      </Head>

      <header className="mb-6">
        <h1 className="text-3xl font-bold">Welcome to ALX Listing App</h1>
        <p className="text-gray-600">An Airbnb clone project scaffolded with Next.js, TypeScript, and TailwindCSS</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example usage of Card component */}
        <Card
          title="Sample Property"
          description="A beautiful place to stay during your travels."
          image="/assets/placeholder.jpg"
        />
        <Card
          title="Cozy Apartment"
          description="Perfect for a weekend getaway."
          image="/assets/placeholder.jpg"
        />
      </main>

      <footer className="mt-10">
        <Button label="Explore More" onClick={() => alert("Button clicked!")} />
      </footer>
    </div>
  );
}
