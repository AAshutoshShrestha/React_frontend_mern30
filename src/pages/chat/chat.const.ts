export interface UserDetail {
	_id: string,
	name: string,
	email: string,
	image: string,
}

export interface SingleMessage {
	_id: string,
	sender: UserDetail,
	reciver: UserDetail,
	date: Date,
	message: string
}

export interface SingleUser {
	_id: string
	name: string
	email: string
	image: string
	message: SingleMessage[]
}