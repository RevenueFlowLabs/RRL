import Link from "next/link"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ width: '250px', background: '#f4f4f4', padding: '20px' }}>
        <nav>
          <Link href="/"><h3>Revenue Recovery</h3></Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  )
}
