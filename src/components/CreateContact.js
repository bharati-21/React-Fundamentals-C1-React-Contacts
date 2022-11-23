import { Link, useNavigate } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

const CreateContact = ({ createContact }) => {
    const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const values = serializeForm(e.target, { hash: true });

		createContact(values);
        navigate("/");
	};

	return (
		<div>
			<Link className="close-create-contact" to="/">
				Close
			</Link>
			<form className="create-contact-form" onSubmit={handleSubmit}>
				<ImageInput
					className="create-contact-avatar-input"
					name="avatarURL"
					maxHeight={64}
				/>
				<div className="create-contact-details">
					<input type="text" placeholder="Contact Name" name="name" />
					<input
						type="text"
						placeholder="Contact Handle"
						name="handle"
					/>
					<button>Add Contact</button>
				</div>
			</form>
		</div>
	);
};

export { CreateContact };
