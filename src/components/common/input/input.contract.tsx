import { BaseSyntheticEvent } from "react";

export enum INPUT_TYPE {
	TEXT = 'text',
	NUMBER = 'number',
	PASSWORD = 'password',
	TEL= 'tel',
	EMAIL = 'email',
}

export type handelChangeType = (e:BaseSyntheticEvent) => {}

export interface ITextInputComponent{
	type ?: string,
	name : string,
	defaultValue ?: string,
	control : any,
	msg?: string | null | undefined,
}