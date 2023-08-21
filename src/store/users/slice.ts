import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Wes Bos",
		email: "wesbos@gmail.com",
		github: "wesbos",
	},
	{
		id: "2",
		name: "Alexis Guzman",
		email: "codingcodax@gmail.com",
		github: "codingcodax",
	},
	{
		id: "3",
		name: "Nagib Gonzalez",
		email: "nagibrodriguez@gmail.com",
		github: "inagib21",
	},
	{
		id: "4",
		name: "Oscar Estrada",
		email: "oestrada@gmail.com",
		github: "OscarStrada",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
