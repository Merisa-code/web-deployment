export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-100">
      <h1 className="text-5xl font-bold text-blue-800">
        CI/CD Assignment Website
      </h1>

      <p className="mt-4 text-xl text-gray-700">
        Deployed using AWS Amplify and GitHub Actions
      </p>
    </main>
  );
}