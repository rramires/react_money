import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { TransactionsProvider } from '../../contexts/TransactionsProvider'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

import {
	PriceHighLight,
	TransactionsContainer,
	TransactionsTable,
} from './styles'

import { useContext } from 'react'

export function Transactions() {
	const { transactions } = useContext(TransactionsContext)

	return (
		<div>
			<TransactionsProvider>
				<Header />
				<Summary />

				<TransactionsContainer>
					<SearchForm />
					<TransactionsTable>
						<tbody>
							{transactions.map((transaction) => {
								return (
									<tr key={transaction.id}>
										<td>{transaction.description}</td>
										<td>
											<PriceHighLight
												$variant={transaction.type}
											>
												{transaction.type ===
													'outcome' && '- '}
												{priceFormatter(
													transaction.price,
												)}
											</PriceHighLight>
										</td>
										<td>{transaction.category}</td>
										<td>
											{dateFormatter(
												transaction.createdAt,
											)}
										</td>
									</tr>
								)
							})}
						</tbody>
					</TransactionsTable>
				</TransactionsContainer>
			</TransactionsProvider>
		</div>
	)
}
