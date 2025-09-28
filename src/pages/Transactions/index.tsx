import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
	PriceHighLight,
	TransactionsContainer,
	TransactionsTable,
} from './styles'

interface Transaction {
	id: number
	description: string
	type: 'income' | 'outcome'
	price: number
	category: string
	createdAt: string
}

export function Transactions() {
	/* 
	// Using promises
	useEffect(() => {
		fetch('http://localhost:3000/transactions')
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
	}, []) */

	const [transactions, setTransactions] = useState<Transaction[]>([])

	// Using async
	async function loadTransactions() {
		const response = await fetch('http://localhost:3000/transactions')
		const data = await response.json()
		//console.log(data)
		setTransactions(data)
	}

	useEffect(() => {
		loadTransactions()
	}, [])

	return (
		<div>
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
											{transaction.price}
										</PriceHighLight>
									</td>
									<td>{transaction.category}</td>
									<td>{transaction.createdAt}</td>
								</tr>
							)
						})}
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</div>
	)
}
