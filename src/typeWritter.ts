export default function typewriterScript() {
	const elementText = document.querySelector(".text-wrapper p");
	const mockText =
		"My name is Ihor. If you are looking this site now, you propably have seen my CV or GitHub account. " +
		"This site was made for fun, exprerience and portfolio. I've tried to use all junior's features such as" +
		" adaptive and responsible design, Intercetion, animations and etc.I've add description with what feature was used there to all sections.";
	let i: number = 0;
	function recursion(): any {
		if (i > mockText.length) {
			return (elementText.innerHTML = mockText);
		} else {
			elementText.innerHTML = `${mockText.slice(0, i)}|`;
			i++;
			return setTimeout(() => recursion(), 15);
		}
	}
	recursion();
}
