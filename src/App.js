import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div className="App">
      <Navbar />
      <Footer />
    </motion.div>
  );
}

export default App;
