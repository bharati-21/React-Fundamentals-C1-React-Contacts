import { useEffect, useState } from "react";
import "../css/App.css";
import { ListContacts } from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";
import { CreateContact } from "./CreateContact";
import { Route, Routes } from "react-router-dom";

const App = () => {
	const [contacts, setContacts] = useState([]);
	const [screen, setScreen] = useState("list");

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
		<Routes>
			<Route
				path="/"
				element={
					<ListContacts
						contacts={contacts}
						removeContact={removeContact}
						onNavigate={() => {
							setScreen("create");
						}}
					/>
				}
			/>
			<Route path="/create" element={<CreateContact />} />
		</Routes>
	);
};

export default App;
