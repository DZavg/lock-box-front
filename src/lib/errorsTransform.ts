export default function (errors: any) {
	for (const key in errors) {
		errors[key] = errors[key][0]
	}

	return errors
}
