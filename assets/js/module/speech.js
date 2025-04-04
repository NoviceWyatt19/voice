const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

class Speech{
  #isRecognize = true;
  #recognition;
  constructor() {
    const recognition = new SpeechRecognition();
    recognition.continuos = true;

    this.#recognition.addEventListener('end', ev => {
      if (this.#isRecognize) {
        #recognition.start();
      }
    });

    this.#recognition.addEventListener('result', ev => {
      resultCallbackFnc(ev); //fixme 구현 안 함: 보고하기
    });

  }// constructor

  recognize() {
    this.#isRecognize = true;
    this.#recognition.start();
  }

  stop() {
    this.#isRecognize = false;
    this.#recognition.stop();
  }

  speak(text){
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(desc);

    utterThis.pitch = 0.7; // pitch.value;
    utterThis.rate = 1.3; // rate.value;
    synth.speak(utterThis);
  }

} // class

export default Speech;