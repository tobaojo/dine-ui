export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 mobile-section sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Dine</h1>

        <div className="prose prose-lg text-gray-700 space-y-6">
          <p>
            Welcome to Dine, your premier destination for discovering and
            sharing exceptional dining experiences.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
          <p>
            We&apos;re committed to connecting food enthusiasts with restaurants
            that match their tastes and preferences.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Curated restaurant recommendations</li>
            <li>User reviews and ratings</li>
            <li>Reservation management</li>
            <li>Personalized dining suggestions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
