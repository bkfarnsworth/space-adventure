import { useState } from "react";
import storyTree from "./storyTree";
import "./styles.css";

export default function App() {
  // useState is a helper function to keep track of what branch the user is at
  let [branch, setBranch] = useState(storyTree.root);
  // we can also keep track of the text they type in
  let [text, setText] = useState("");

  return (
    <div className="App">
      <h1>Welcome to Space Adventure</h1>
      <div>{branch.prompt}</div>
      <br />
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <br />
      <button onClick={() => handleSubmit(text, branch, setBranch, setText)}>
        Submit
      </button>
    </div>
  );
}

// when the user hits the submit button
// try to find a branch that matches the text they typed in
// if found, set the current branch to the matching branch
// else do something else...
function handleSubmit(submittedText, currentBranch, setBranch, setText) {
  let chosenBranch = currentBranch.branches.find((b) =>
    submittedText.includes(b.trigger)
  );
  if (chosenBranch) {
    setBranch(chosenBranch);
  } else {
    alert("no branch found, what should we show the user next?");
  }

  // clear out text for next round
  setText("");
}
