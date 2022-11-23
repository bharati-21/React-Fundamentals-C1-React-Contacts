import { useEffect, useState } from "react";
import "../css/App.css";
import { ListContacts } from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";

const App = () => {
	const [contacts, setContacts] = useState([]);

	const fetchContacts = async () => {
		const response = await ContactsAPI.getAll();
		setContacts(response);
	};

	useEffect(() => {
		fetchContacts();
	}, []);

	const removeContact = async (contact) => {
		await ContactsAPI.remove(contact);
		setContacts((prevContacts) =>
			prevContacts.filter((prevContact) => prevContact.id !== contact.id)
		);
	};

	return (
		<div>
			<ListContacts contacts={contacts} removeContact={removeContact} />
		</div>
	);
};

export default App;
