import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Letter from "./routes/Letter";
import { Comment } from "./routes/Comment";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />}>
    </Route>
    <Route
      path="*"
      element={
        <><App />
        <main style={{ padding: "1rem" }}>
          <p>There's Something here!</p>
          <Letter/>
        </main>
        </>
      }
    />
    <Route
      path="Comment/*"
      element={
        <><App />
        <main style={{ padding: "1rem" }}>
          <p>Tell me your toughts!</p>
          <Letter/>
        </main>
        </>
      }
    />
    <Route
      path="/HELPME"
      element={
        <><App />
        <main style={{ padding: "1rem" }}>
          <p>Tell me your toughts!</p>
          <Comment id="3" />
        </main>
        </>
      }
    />
</Routes>
  </BrowserRouter>,
  rootElement
);