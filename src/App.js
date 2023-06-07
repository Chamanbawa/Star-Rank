import { useState } from "react";
import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";
import "./style/index.css";
function App() {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <main>
      <section className="container center">
        <Dialog isVisible={open} handleToClose={closeDialog} />
        <StarRating />
        <button onClick={openDialog} className="open">
          {" "}
          Open Dialog
        </button>
      </section>
    </main>
  );
}

export default App;
