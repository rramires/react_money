import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
	background-color: #00000075;
	position: fixed;
	width: 100vw;
	height: 100vh;
	inset: 0; // top: 0, botton: 0 right: 0, left: 0
`

export const CloseButton = styled(Dialog.Close)`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;

	background: transparent;
	color: ${(props) => props.theme['gray-500']};
	border: 0;
	line-height: 0;
	cursor: pointer;
`

export const Content = styled(Dialog.Content)`
	background-color: ${(props) => props.theme['gray-800']};
	position: fixed;
	min-width: 32rem;
	// centralizes
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	padding: 2.5rem 3rem;
	border-radius: 6px;

	& form {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& input {
			border-radius: 6px;
			border: 0;
			background: ${(props) => props.theme['gray-900']};
			color: ${(props) => props.theme['gray-300']};
			padding: 1rem;

			&::placeholder {
				color: ${(props) => props.theme['gray-300']};
			}
		}

		& button[type='submit'] {
			margin-top: 1.5rem;
			height: 3.625rem;
			border-radius: 6px;
			border: 0;
			background: ${(props) => props.theme['green-500']};
			color: ${(props) => props.theme.white};
			font-weight: bold;
			cursor: pointer;

			&:hover {
				background: ${(props) => props.theme['green-700']};
				color: ${(props) => props.theme['gray-100']};
				transition:
					background-color 0.2s,
					color 0.1s;
			}
		}
	}
`

export const TransactionType = styled(RadioGroup.Root)`
	margin-top: 0.5rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`

interface TransactionTypeButtonProps {
	$variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
	RadioGroup.Item,
)<TransactionTypeButtonProps>`
	background: ${(props) => props.theme['gray-700']};
	color: ${(props) => props.theme['gray-300']};

	padding: 1rem;
	border: 0;
	border-radius: 6px;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	& svg {
		color: ${(props) =>
			props.$variant === 'income'
				? (props) => props.theme['green-300']
				: (props) => props.theme['red-300']};
	}

	&[data-state='unchecked']:hover {
		background: ${(props) => props.theme['gray-600']};
		transition: background-color 0.2s;
	}

	&[data-state='checked'] {
		color: ${(props) => props.theme.white};
		background: ${(props) =>
			props.$variant === 'income'
				? (props) => props.theme['green-500']
				: (props) => props.theme['red-500']};

		& svg {
			color: ${(props) => props.theme.white};
		}
	}
`
