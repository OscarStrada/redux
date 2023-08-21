import { Button, Card, TextInput, Title } from "@tremor/react";

const CreateNewUser = () => {
	return (
		<Card className="mt-4">
			<Title>Create new user</Title>

			<form action="">
				<TextInput placeholder="Aqui el nombre" />
				<TextInput placeholder="Aqui el email" />
				<TextInput placeholder="Aqui el usuario de github" />

				<div>
					<Button type="submit" className="mt-4">
						Crear usuario
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default CreateNewUser;
