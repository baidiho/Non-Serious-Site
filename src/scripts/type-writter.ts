export default function typewriterScript() {
  const elementText = document.querySelector(".text-wrapper p");
  const mockText =
    "My name is Ihor. If you are looking this site now, you propably have seen my CV or GitHub account. " +
    "This isn't serious site. I've tried to show that i know something features of Front-End development. As you can see i am not designer and in some aspects this site doesn`t pretty. Excuse me for this designers pain, that you have felt xD. " +
    "Take me to work, please.";
  let i: number = 0;
  function recursion(): any {
    if (i > mockText.length) {
      return (elementText.innerHTML = mockText);
    } else {
      elementText.innerHTML = `${mockText.slice(0, i)}|`;
      i++;
      return setTimeout(() => recursion(), 18);
    }
  }
  recursion();
}
