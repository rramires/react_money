import styled from 'styled-components'

export const SearchFormContainer = styled.form`
	display: flex;
	gap: 1rem;

	input {
		flex: 1;
		padding: 1rem;

		border: 0;
		border-radius: 6px;

		background: ${(props) => props.theme['gray-900']};
		color: ${(props) => props.theme['gray-300']};

		&::placeholder {
			color: ${(props) => props.theme['gray-500']};
		}
	}

	button {
		display: flex;
		align-items: center;

		padding: 1rem;
		gap: 0.75rem;
		border-radius: 6px;

		background: transparent;
		border: 1px solid ${(props) => props.theme['green-300']};

		color: ${(props) => props.theme['green-300']};
		font-weight: bold;

		&:hover {
			background: ${(props) => props.theme['green-500']};
			border-color: ${(props) => props.theme['green-500']};
			color: ${(props) => props.theme['white']};

			transition:
				background-color 0.2s,
				border-color 0.2s,
				color 0.2s;
		}
	}
`
