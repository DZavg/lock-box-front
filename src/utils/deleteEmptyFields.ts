export default function deleteEmptyFields(form: object) {
	return form && Object.fromEntries(Object.entries(form).filter(([_key, value]) => !!value))
}
