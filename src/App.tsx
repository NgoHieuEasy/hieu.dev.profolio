import "./App.css";
import ContactFloating from "./components/ContactFloating";
import Home from "./pages/Home";
import ToastComponent from "./zustand/useToast";

function App() {
  return (
    <div>
      <Home />
      <ToastComponent />
      <ContactFloating />
    </div>
  );
}

export default App;
