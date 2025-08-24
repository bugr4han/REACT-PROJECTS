function UserDisplay({ user }) {
  return (
    <div key={user.id} className="user-card">
      <h2 className="user-name">{user.name}</h2>
      <div className="user-info">
        <p>
          <span>Username:</span> {user.username}
        </p>
        <p>
          <span>Email:</span> {user.email}
        </p>
        <p>
          <span>Phone:</span> {user.phone}
        </p>
      </div>
    </div>
  );
}

export default UserDisplay;
