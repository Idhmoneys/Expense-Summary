//Expense Summary
//Given a list of expenses, calculate useful totals and identify the largest expense. The final summary should reuse the smaller helper functions.

// should return the total amount spent.
function calculateTotal(expenses) {
  return expenses.reduce((acc, curr) => {
    acc += curr.amount;
    return acc;
  }, 0)
}

// should return the total for one category.
function calculateCategoryTotal(expenses, category) {
	return expenses.reduce((acc, curr)=>{
	 acc += curr.category === category ? curr.amount : 0;
	  return acc 
	}, 0)
}

// should return the full expense object with the largest amount.
function findLargestExpense(expenses) {
	return expenses.reduce((acc, curr)=>{
	  return acc.amount < curr.amount ? curr : acc
	})
}

// should return total, foodTotal, transportTotal, and largestExpense.
function createExpenseSummary(expenses) {
  const largestExpense = findLargestExpense(expenses);
  const transportTotal = calculateCategoryTotal(expenses, 'transport');
  const foodTotal = calculateCategoryTotal(expenses, 'food');
  const total = calculateTotal(expenses);
  return {total, foodTotal, transportTotal, largestExpense}
}

const expenses = [
	{ id: 1, category: 'food', amount: 24 },
	{ id: 2, category: 'transport', amount: 15 },
	{ id: 3, category: 'food', amount: 18 },
	{ id: 4, category: 'books', amount: 40 }
];
console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));

console.log(
	{
		total: 97,
		foodTotal: 42,
		transportTotal: 15,
		largestExpense: { id: 4, category: 'books', amount: 40 }
	},
	42,
	0,
	{ id: 4, category: 'books', amount: 40 }
);
// findLargestExpense should return the whole expense object, not only the amount.
