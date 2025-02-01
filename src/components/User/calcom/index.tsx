import React from "react";
import Cal from "@calcom/embed-react";

export default function App() {
  return (
    <div className='App'>
      <h1>Following is an inline cal.com embed</h1>
      <Cal calLink='mmnqtu/introductory-call'></Cal>
    </div>
  );
}
