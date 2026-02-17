import { Aboutme } from "../AboutMe/Aboutme";
import { Contact } from "../Contact/Contact";
import { Home } from "../Home/Home";
import { Lebenslauf } from "../Lebenslauf/Lebenslauf";
import { Projects } from "../Projects/Projects";

export function MainPage() {
	return (
		<>
			<Home />
			<Aboutme />
			<Lebenslauf />
			<Projects />
			<Contact />
		</>
	)
}