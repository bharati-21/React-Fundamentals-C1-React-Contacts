const ListContacts = ({ contacts }) => {
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
					<button className="contact-remove">Remove</button>
				</li>
			))}
		</ol>
	);
};

export { ListContacts };
