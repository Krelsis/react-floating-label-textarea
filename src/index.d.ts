declare module "@krelsis/react-floating-label-textarea"
{
	import * as React from "react";

	export interface ReactFloatingLabelTextareaProps extends React.HTMLProps<HTMLDivElement> {
		[key: string]: any;
		label: string;

		onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
		onFocus: (event: React.ChangeEvent<HTMLInputElement>) => void;
		onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
	}

	declare class FloatingLabelTextarea<T = { [key: string]: any }> extends React.Component<ReactFloatingLabelTextareaProps> { }
	export default FloatingLabelTextarea;
}