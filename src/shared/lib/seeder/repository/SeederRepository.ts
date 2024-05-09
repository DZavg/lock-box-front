export interface SeederRepository {
	getOne(): any

	getMany(count: number): any
}
