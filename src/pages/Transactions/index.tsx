import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
	PriceHighLight,
	TransactionsContainer,
	TransactionsTable,
} from './styles'

export function Transactions() {
	return (
		<div>
			<Header />
			<Summary />

			<TransactionsContainer>
				<SearchForm />
				<TransactionsTable>
					<tbody>
						<tr>
							<td>Desenvolvimento de site</td>
							<td>
								<PriceHighLight variant='income'>
									R$ 12.000,00
								</PriceHighLight>
							</td>
							<td>Venda</td>
							<td>13/04/2025</td>
						</tr>
						<tr>
							<td>Hamburguer</td>
							<td>
								<PriceHighLight variant='outcome'>
									- R$ 59,00
								</PriceHighLight>
							</td>
							<td>Alimentação</td>
							<td>10/04/2025</td>
						</tr>
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</div>
	)
}
