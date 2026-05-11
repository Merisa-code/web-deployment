export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Cloud Computing & CI/CD Deployment</h1>
      <p><strong>Student:</strong> TSAKO WABA MERISA | Cloud Computing</p>
      
      <section style={{ marginTop: '20px' }}>
        <h2>Cloud Computing</h2>
        <p>
          It is the on-demand delivery of compute power, database, storage, 
          and other IT resources via the internet with pay-as-you-go pricing.
        </p>
      </section>

      <div style={{ background: '#f0f0f0', padding: '15px', marginTop: '20px' }}>
        <h3>Deployment Pipeline (CI/CD)</h3>
        <p>1. <strong>Source:</strong> Code is pushed to GitHub.</p>
        <p>2. <strong>Build:</strong> AWS Amplify runs the YAML commands.</p>
        <p>3. <strong>Deploy:</strong> The site is hosted on a Virtual Environment.</p>
      </div>
    </main>
  );
}

