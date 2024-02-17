import logo from './logo.svg';
import './App.css';
import Post from './Post';
function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">TopNews</a>
        <nav>
          <a href="">Login</a>
          <a href=""> Register </a>
        </nav>
      </header>
      <Post/>

    </main>
  );
}

export default App;
