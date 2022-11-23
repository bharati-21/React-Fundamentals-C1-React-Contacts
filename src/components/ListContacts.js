import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListContacts = ({ contacts, removeContact }) => {
	const [searchText, setSearchText] = useState("");

	const handleRemoveContact = (contact) => {
		removeContact(contact);
	};

	const handleSearchTextChange = (e) => {
		const text = e.target.value;
		setSearchText(text.trim());
	};

	const getFilteredContacts = () => {
		if (!searchText) {
			return contacts;
		}

		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(searchText.toLowerCase())
		);
	};

	const resetSearchText = () => setSearchText("");

	const filteredContacts = getFilteredContacts();

	return (
		<div className="list-contacts">
			<div className="list-contacts-top">
				<input
					type="text"
					className="search-contacts"
					placeholder="Search Contacts"
					value={searchText}
					onChange={handleSearchTextChange}
				/>
				<Link to="/create" className="add-contact">
					Add Contact
				</Link>
			</div>
			{filteredContacts.length !== contacts.length && (
				<div className="showing-contacts">
					<span>
						Now showing {filteredContacts.length} of{" "}
						{contacts.length}
					</span>
					<button onClick={resetSearchText}>Show all</button>
				</div>
			)}
			<ol className="contact-list">
				{filteredContacts.map((contact) => (
					<li key={contact.id} className="contact-list-item">
						<div
							className="contact-avatar"
							style={{
								backgroundImage: `url(${contact.avatarURL})`,
							}}
						></div>
						<div className="contact-details">
							<p className="contact-name">{contact.name}</p>
							<p className="contact-handle">{contact.handle}</p>
						</div>
						<button
							className="contact-remove"
							onClick={() => handleRemoveContact(contact)}
						>
							Remove
						</button>
					</li>
				))}
			</ol>
		</div>
	);
};

export { ListContacts };

ListContacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	removeContact: PropTypes.func.isRequired,
};
