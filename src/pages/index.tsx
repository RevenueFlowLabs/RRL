export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>Revenue Recovery Labs</h1>
      <p>System is Live. Dashboard is ready at /dashboard</p>
      <a href="/dashboard" style={{ color: 'blue', textDecoration: 'underline' }}>Go to Dashboard</a>
    </div>
  )
}