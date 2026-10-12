import './App.css'

const buildInfo = [
  ['Commit', import.meta.env.VITE_COMMIT_SHA?.slice(0, 7) || 'local'],
  ['Message', import.meta.env.VITE_COMMIT_MESSAGE || 'Локальная разработка'],
  ['Branch', import.meta.env.VITE_BRANCH || 'local'],
  ['Build time', import.meta.env.VITE_BUILD_TIME || '—'],
]

function App() {
  return (
    <main>
      <h1>Frontend CI/CD demo</h1>
      <p>Эта страница собрана и опубликована через GitHub Actions.</p>

      <dl>
        {buildInfo.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </main>
  )
}

export default App
