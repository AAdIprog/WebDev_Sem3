import  { useEffect, useState } from 'react'

const App = () => {
  const [apiData, setApiData] = useState([]) // master list
  const [searchText, setSearchText] = useState('')
  const [completedOnly, setCompletedOnly] = useState(false)
  const [firstTenOnly, setFirstTenOnly] = useState(false)
  const [userFilter, setUserFilter] = useState(null) // number or null

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((r) => r.json())
      .then((data) => {
        setApiData(data)
      })
      .catch((err) => console.error(err))
  }, [])

  const handleDelete = (id) => {
    // update the master list; do not mutate directly
    setApiData((prev) => prev.filter((t) => t.id !== id))
  }

  const handleUserFilter = (id) => {
    setUserFilter((prev) => (prev === id ? null : id))
  }

  // derive visible todos based on master list and filters
  const filtered = apiData.filter((t) => {
    if (completedOnly && t.completed !== true) return false
    if (userFilter && t.userId !== userFilter) return false
    if (
      searchText &&
      !t.title.toLowerCase().includes(searchText.toLowerCase())
    )
      return false
    return true
  })

  const visible = firstTenOnly ? filtered.slice(0, 10) : filtered

  return (
    <div style={{ padding: 12 }}>
      <h1>Todos</h1>

      <div style={{ marginBottom: 12 }}>
        <input
          placeholder="Search titles..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ padding: 6, width: 240, marginRight: 8 }}
        />

        <label style={{ marginRight: 8 }}>
          <input
            type="checkbox"
            checked={completedOnly}
            onChange={(e) => setCompletedOnly(e.target.checked)}
          />{' '}
          Completed only
        </label>

        <button onClick={() => setFirstTenOnly((p) => !p)} style={{
          marginRight: 8
        }}>
          {firstTenOnly ? 'Showing first 10' : 'Show first 10'}
        </button>

        <button onClick={() => { setSearchText(''); setCompletedOnly(false); setFirstTenOnly(false); setUserFilter(null); }}>
          Reset
        </button>
      </div>

      <div style={{ marginBottom: 12 }}>
        <strong>Filter by user:</strong>{' '}
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => handleUserFilter(id)}
            style={{
              marginLeft: 8,
              background: userFilter === id ? '#0366d6' : undefined,
              color: userFilter === id ? '#fff' : undefined,
              padding: '6px 10px',
            }}
          >
            User {id}
          </button>
        ))}
      </div>

      <div>
        {visible.map((d) => (
          <div key={d.id} style={{ borderBottom: '1px solid #eee', padding: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0 }}>{d.title}</h3>
                <div style={{ fontSize: 12, color: '#555' }}>
                  id: {d.id} &nbsp;|&nbsp; userId: {d.userId} &nbsp;|&nbsp; completed:{' '}
                  {d.completed ? 'true' : 'false'}
                </div>
              </div>
              <div>
                <button onClick={() => handleDelete(d.id)} style={{ marginRight: 8 }}>Delete</button>
              </div>
            </div>
          </div>
        ))}

        {visible.length === 0 && <p>No todos to show.</p>}
      </div>
    </div>
  )
}

export default App