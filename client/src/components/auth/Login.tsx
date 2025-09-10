import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      return setError("Please fill in all fields");
    }

    try {
      const result = await login(username, password);

      if (result.success) {
        console.log("Login successful:", result.user);
        navigate("/");
      } else if (result.error && result.error.status === 401) {
        console.log("Unauthorized");
        setError("Invalid username or password");
      } else {
        setError(result.error.message || "Login failed, please try again");
      }
    } catch (error) {
      setError("Error during login, please try again");
      console.error("Login error:", error);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          placeholder="Enter username: "
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Enter Password: "
          required
        />

        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};
