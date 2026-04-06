import { useState, useEffect } from 'react'

const UserList = () => {
    // Manage fetched data using the useState Hook
    const [users, setUsers] = useState([])
    // Show a loading indicator while data is being fetched
    const [loading, setLoading] = useState(true)
    // Handle API errors and display error messages
    const [error, setError] = useState(null)

    // Perform API calls using the useEffect Hook for side effects
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Ensure the API call runs only once on component load using dependency array in useEffect
                // Fetch data asynchronously using JavaScript fetch API or async/await
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                
                const data = await response.json()
                setUsers(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, []) // Empty dependency array ensures it runs once on mount

    // Show a loading indicator while data is being fetched using conditional rendering
    if (loading) {
        return (
            <div className="loader-container">
                <span className="loader"></span>
                <p style={{ marginTop: '1rem', color: '#cbd5e1' }}>Fetching universe records...</p>
            </div>
        )
    }

    // Handle API errors and display error messages using error state
    if (error) {
        return (
            <div className="error-container">
                <div className="error-card">
                    <h2>Oops! Connection Error</h2>
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()} style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        background: '#ef4444',
                        color: 'white',
                        cursor: 'pointer'
                    }}>
                        Retry Connection
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="user-grid">
            {/* Display the retrieved data dynamically using list rendering with map() */}
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <span className="badge">ID: {user.id}</span>
                    <h3 className="user-name">{user.name}</h3>
                    <div className="user-info">
                        <span className="info-label">Email:</span>
                        <span>{user.email}</span>
                    </div>
                    <div className="user-info">
                        <span className="info-label">Company:</span>
                        <span>{user.company.name}</span>
                    </div>
                    <div className="user-info">
                        <span className="info-label">Website:</span>
                        <span>{user.website}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserList
