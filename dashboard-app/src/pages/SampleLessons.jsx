import Layout from '../components/layout/Layout'

function SampleLessons() {
  const breadcrumbs = [
    { label: 'Sample Lessons', path: null }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-hero font-semibold text-text-primary mb-4">
            Sample Lessons
          </h1>
          <p className="text-secondary text-text-secondary">
            🚧 Under Construction 🚧
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SampleLessons
