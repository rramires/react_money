import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { useTheme } from 'styled-components'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContext } from 'react'

export function Summary() {
	const theme = useTheme()

	const { transactions } = useContext(TransactionsContext)

	const summary = transactions.reduce(
		(acc, transaction) => {
			switch (transaction.type) {
				case 'income':
					acc.income += transaction.price
					acc.total += transaction.price
					break
				case 'outcome':
					acc.outcome += transaction.price
					acc.total -= transaction.price
					break
			}
			return acc
		},
		{
			income: 0,
			outcome: 0,
			total: 0,
		},
	)

	return (
		<SummaryContainer>
			<SummaryCard>
				<header>
					<span>Entradas</span>
					<ArrowCircleUp size={32} color={theme['green-300']} />
				</header>
				<strong>{summary.income}</strong>
			</SummaryCard>
			<SummaryCard>
				<header>
					<span>Saídas</span>
					<ArrowCircleDown size={32} color={theme['red-300']} />
				</header>
				<strong>{summary.outcome}</strong>
			</SummaryCard>
			<SummaryCard $variant='green'>
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} color={theme['white']} />
				</header>
				<strong>{summary.total}</strong>
			</SummaryCard>
		</SummaryContainer>
	)
}
