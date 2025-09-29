import { useEffect, useState, type ReactNode } from 'react'
import { TransactionsContext, type Transaction } from './TransactionsContext'

interface TransactionsProviderProps {
	children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	async function loadTransactions() {
		const response = await fetch('http://localhost:3000/transactions')
		const data = await response.json()
		setTransactions(data)
	}

	useEffect(() => {
		loadTransactions()
	}, [])

	return (
		<TransactionsContext.Provider value={{ transactions }}>
			{children}
		</TransactionsContext.Provider>
	)
}
