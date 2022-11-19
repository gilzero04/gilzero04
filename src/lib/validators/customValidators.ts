export function passwordMatch(value: string, form: { values: { fld_password: any; }; }) {
	if (value !== form.values.fld_password) {
			return { passwordMatch: true };
	}
}