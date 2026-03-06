import DashboardLayout from '@/components/layout/DashboardLayout'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div style={{ padding: '20px' }}>
        <h1>Dashboard Loaded Successfully!</h1>
        <p>Your system is now live. You can add widgets later one by one.</p>
      </div>
    </DashboardLayout>
  )
}
