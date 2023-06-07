function Dialog(props) {
  return (
    <>
      {props.isVisible && (
        <dialog className="dialogue-container">
          <div className="dialog">
            <h4>Welcome 👏</h4>
            <p>Close the Dialog to give rating to your movie. or Do inspect to check the HTML/JSX.
              
            </p>
            <button onClick={props.handleToClose}>Close</button>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Dialog;
