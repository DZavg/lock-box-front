export default function deleteDuplicateFields(form: object, initialForm: Record<string, any>) {
	return (
		form &&
		initialForm &&
		Object.fromEntries(
			Object.entries(form).filter(([key, value]) => value.trim() !== initialForm[key].trim() || ''),
		)
	)
}
