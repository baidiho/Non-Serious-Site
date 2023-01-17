export default function typewriterScript() {
	const elementText = document.querySelector(".text-wrapper p");
	const mockText =
		"My name is Ihor. If you are looking this site now, you propably have seen my CV or GitHub account. " +
		"This site was made for fun, exprerience and portfolio. I've tried to show that i know something features." +
		"Give me a job.";
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
