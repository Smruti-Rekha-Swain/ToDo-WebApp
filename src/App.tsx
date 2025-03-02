import { useState } from "react";
import Modal from "./components/Modal";
import Dummy from "./components/Dummy";
function App() {
  const [showModal, setShowModal] = useState(false);
  function add() {
    setShowModal(true);
  }

  return (
    <>
      <div className="absolute text-6xl left-3 top-3">ToDo</div>
      {showModal ? <Modal /> : null}
      <Dummy age={56}/>
      <button
        type="button"
        className="text-5xl absolute right-10 bottom-10"
        onClick={add}
      >
        <i className="bi bi-plus-circle-fill"></i>
      </button>
    </>
  );
}
export default App;
