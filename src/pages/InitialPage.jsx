import React, {useState} from "react";

import { Container, AreaContainer, ButtonTalk } from "./style";

const InitialPage = () => {

  const [text, setText] = useState("...");
  const [recording, setRecording] = useState(false);

  const recognition = createRecognition();

  const handlePressButton = (e) => {
    if (!recognition) {
      return;
    }
    recording ? recognition.stop() : recognition.start();
    setRecording(recording ? false : true);

  }

  function createRecognition(e) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = SpeechRecognition ? new SpeechRecognition() : null;

    if (!recognition) {
      setText("Speech Recognition is not found");
      return null;
    }

    recognition.lang = "pt_BR";

    recognition.onstart = () => console.log('started');
    recognition.onend = () => console.log('finished');
    recognition.onerror = e => console.log('error ', e);
    recognition.onresult = (e) => setText(e.results[0][0].transcript);

    return recognition;
  }

  return(
    <Container>
      <AreaContainer>
        {text}
      </AreaContainer>
      <ButtonTalk recording={recording} onClick={(e) => handlePressButton(e)}>
        {!recording ? (
          <strong>Aperte para falar</strong>
        ) : (
          <strong>Aperte para pausar</strong>
        )}
      </ButtonTalk>
    </Container>
  )
}

export default InitialPage;