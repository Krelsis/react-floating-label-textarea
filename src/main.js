import React from 'react';
import styled from 'styled-components';

const FloatingLabelTextarea = styled.div`
	width: 100%;
`;

const FloatingLabelTextareaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	height: 2em;
	border-bottom: 1px solid #ddd;
	font-size: inherit;
`;

const FloatingLabel = styled.label`
	padding: 0.5em;
	margin: 0;
	border: 0;
	position: absolute;
	color: #9b9b9b;
	bottom: 0;
	transition: all 0.2s ease-in-out;
	transform-origin: left top;
	font-size: 1em;
	cursor: text;
	pointer-events: none;
	width: 66.6%;
	transform: ${props =>
		props.active ? 'translate3d(0, -70%, 0) scale(0.70)' : 'none'};
`;

const FloatingTextarea = styled.textarea`
	margin: 0;
	margin-top: 6px;
	padding-left: 3px;
	padding-right: 3px;
	border: 2px solid #EEE;
	outline: none;
	font-size: 1em;
	padding: 1.25em;
	&::placeholder {
		color: #9b9b9b;
		opacity: ${props => (props.active ? 1 : 0)};
		transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);

	}
`;

export default class TextTextarea extends React.PureComponent {
	constructor(props) {
		super(props);
		if (!props.id && !props.name) {
			throw new Error('expected id but none present');
		}

		this.state = {
			active: props.value && props.value.length > 0
		};

		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}

	onFocus(event) {
		this.setState({ active: true });
		if (this.props.onFocus) {
			this.props.onFocus(event);
		}
	}

	onBlur(event) {
		this.setState({ active: event.target.value.length !== 0 });
		if (this.props.onBlur) {
			this.props.onBlur(event);
		}
	}

	render() {
		const { id, label, onBlur, onFocus, type, refs, className,textarea, ...otherProps }= this.props;
		const { active } = this.state;

		return (
			<FloatingLabelTextarea>
				<FloatingLabelTextareaContainer className={className}>
				<FloatingLabel className={className} htmlFor={id} active={active}>
					{label}
				</FloatingLabel>
				<FloatingTextarea
					active={active}
					className={className}
					id={id}
					onBlur={this.onBlur}
					onFocus={this.onFocus}
					ref={refs}
					type={type}
					{...otherProps}

				/>
				</FloatingLabelTextareaContainer>
			</FloatingLabelTextarea>
		);
	}
}
