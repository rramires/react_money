import styled from 'styled-components'

export const HeaderContainer = styled.header`
	background-color: ${(props) => props.theme['gray-900']};

	padding: 1.5rem 0;
`

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 70rem;
	margin: 0 auto;
	padding: 0 1.5rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const NewTransactionButton = styled.button`
	height: 3.125rem;
	border: 0;
	padding: 0 1.25rem;
	border-radius: 0.375rem;

	background: ${(props) => props.theme['green-500']};
	color: ${(props) => props.theme.white};
	font-weight: bold;

	cursor: pointer;

	&:hover {
		background: ${(props) => props.theme['green-700']};
		color: ${(props) => props.theme['gray-100']};
		transition: background-color 0.2s;
	}
`
