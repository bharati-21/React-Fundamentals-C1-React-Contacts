import PropTypes from "prop-types";

const ListContacts = ({ contacts, removeContact }) => {
	const handleRemoveContact = (contact) => {
		removeContact(contact);
	};

	return (
		<ol className="contact-list">
			{contacts.map((contact) => (
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
	);
};

export { ListContacts };

ListContacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	removeContact: PropTypes.func.isRequired,
};
