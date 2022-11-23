import { useEffect, useState } from "react";
import "../css/App.css";
import { ListContacts } from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";
import { CreateContact } from "./CreateContact";
import { Route, Routes } from "react-router-dom";

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

	const createContact = async (contact) => {
		const response = await ContactsAPI.create(contact);
		setContacts((prevContacts) => [...prevContacts, response]);
	};

	return (
		<Routes>
			<Route
				path="/"
				element={
					<ListContacts
						contacts={contacts}
						removeContact={removeContact}
					/>
				}
			/>
			<Route
				path="/create"
				element={<CreateContact createContact={createContact} />}
			/>
		</Routes>
	);
};

export default App;
