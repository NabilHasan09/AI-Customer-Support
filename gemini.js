const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

// Investment Information Stored in a Single String

const investmentInfo = `
When investing, it is important to consider when to start investing your money, as in the long run your money will grow to have more value than it’s present value. In simple terms, investing is a way of using money to grow your money.
The importance of investing is to make sure your money always has value; also can be used for a lot of applications (retirement, major purchases, etc.). 
Money sitting around usually results in a loss of money, due to the money not making money and fighting against things like inflation. In simple terms, investing is a way of using money to grow your money.
The importance of investing is to make sure your money always has value; also can be used for a lot of applications (retirement, major purchases, etc.). 
Money sitting around usually results in a loss of money, due to the money not making money and fighting against things like inflation. In simple terms, investing is a way of using money to grow your money.
The importance of investing is to make sure your money always has value; also can be used for a lot of applications (retirement, major purchases, etc.). 
Money sitting around usually results in a loss of money, due to the money not making money and fighting against things like inflation. In simple terms, investing is a way of using money to grow your money.
The importance of investing is to make sure your money always has value; also can be used for a lot of applications (retirement, major purchases, etc.). 
Money sitting around usually results in a loss of money, due to the money not making money and fighting against things like inflation. Stocks: A way to have ownership within a company.
Typically not smart to own one company/industry due to zero variety (what if it falls behind)
Investing in ETF’s is a smart way to have ownership of multiple companies/industries.
Crypto: another way to invest publicly through investment of currencies
Crypto is usually very risky, even Bitcoin and ETH can fall at times
Good amount of crypto are scams, and usually will have zero values. Roth vs. Regular Accounts:
Both taxable, however a ROTH IRA/401K allows for money to be taxed upfront, while regular accounts get taxed as soon as they are touched upon age. An account you can open on your own accord.
While it is your money, cannot typically touch it until you are 59 ½ years old (taxes)
Only allowed to have a IRA if you make under a specified amount of money. An employer sponsored retirement account
Typically reserved for full time positions with jobs.
Take some of your paycheck to contribute to retirement, and possibly get a employer match.
Certificate of Deposit (but typically called CD’s)
A way to lock your money up for a set amount of time.
Like a savings account, but can’t access your money until time has passed.
Example: Putting away $1,000 in a account with a 10% interest rate for 1 year (1,000*.1 = $100 profit) making it $1,000.
`

const budgetinfo = `WHY BUDGETING MATTERSSummary of your income and expenses for a given period of time
Can create a budget for a month, a quarter, or a year, depending on your needs
It helps you manage money effectively, reduces financial stress, and increases savings over time.
You can achieve goals like traveling, paying off debts, or saving for future needs.ncome
Salaries
Allowances
Freelance workExpenses
Fixed Expenses
Monthly costs that don’t change (rent, utilities, Variable Expenses
Expenses that vary (groceries, entertainment, and dining out)Setting Financial GoalsGoals provide a purpose for your budget, helping you prioritize spending and focus on savings.
Short-term (0-1 year) – emergency fund, vacation.
Medium-term (1-5 years) – saving for a car, student loan payments
Long-term (5+ years) – retirement, home ownership
SMART Goals
Specific, Measurable, Achievable, Relevant, and Time-bound goals
Example: “Save $1,000 in 6 months for a trip” (specific, achievable, and time-bound)

List Income and Expenses: Break down monthly income and expected expenses.
Set Spending Limits: Allocate a percentage of income to categories (housing, groceries, savings).
Allocate for Savings: Aim for at least 10-20% of income for savings.
Tools for Budgeting
Apps: Mint, You Need a Budget (YNAB), PocketGuard
Spreadsheets: Excel, Google Sheets
50% Needs (housing, food, utilities): Essential expenses for basic living.
30% Wants (dining out, hobbies): Non-essential, but enjoyable expenses.
20% Savings (emergency fund, investments): Allocate this portion to savings or debt repayment.
Example Scenario
Monthly income = $2,000
50% Needs = $1,000
30% Wants = $600
20% Savings = $400Daily Log: Apps or journals for daily expenses.
Weekly Review: Check your progress and adjust as needed.
Monthly Adjustments: Tweak the budget based on changes in income or expenses.
Tips for Staying on Track
Build an Emergency Fund: Aim for 3-6 months of expenses as a safety net.
Automate Savings: Set up automatic transfers to your savings account.
Cut Down on Unnecessary Expenses: Review subscriptions, avoid impulse buys.
Reward Yourself: Celebrate small achievements to stay motivated.
Underestimating Expenses: Overestimate to avoid surprise costs.
Ignoring Small Purchases: Small amounts add up over time.
Not Reviewing Regularly: Life changes, and so should your budget.
Being Too Strict: Allow room for flexibility so you don’t feel restricted.`

const debtmanagement = `There are different kinds of debt. The ones high school students will encounter most often are credit cards and student loans. Credit cards let you buy things now and pay later, but with interest. Student loans help cover college costs and are typically paid back over time, with interest. Example: If you borrow $1,000 with a 5% interest rate, you’ll owe $1,050 after one year. Interest is what you pay to borrow money. The higher the interest rate, the more you pay. With compound interest, the interest you owe grows over time, even on previous interest. Example: Let’s say you borrow $100 with a 10% interest rate. After one year, you owe $110. If you don’t pay it off, the interest keeps building on that new total. Understanding interest is key to managing debt wisely.Credit cards require a small monthly payment, called a minimum payment, but only paying the minimum can keep you in debt longer. Example: Imagine you owe $500 on a credit card with a 20% interest rate. If you only pay the minimum, it could take years to pay off and cost you much more than $500. Paying more than the minimum helps reduce debt faster. There are two main strategies for paying off debt: The Snowball Method and The Avalanche Method. With the Snowball Method, you pay off your smallest debt first for a quick win, then move to the next. With the Avalanche Method, you pay off the debt with the highest interest rate first to save money on interest. Example: If you have three debts at 5%, 10%, and 15%, the Avalanche Method has you pay off the 15% one first, while the Snowball starts with the smallest balance. Not all debt is bad. Good debt, like student loans, can be an investment in your future because it helps you gain skills for better job opportunities. Bad debt, like high-interest credit card debt, costs a lot without adding value. Understanding this difference can help you make smart choices about borrowing
A budget is a plan for how to spend your money. Sticking to a budget can help you avoid unnecessary debt. Start by setting aside money for essentials, savings, and then for things you want. Example: If you earn $100 a week, you might budget $50 for needs, $20 for savings, and $30 for fun. This way, you don’t overspend and end up in debt.
Before taking on debt, understand the terms, interest rates, and any fees. Read the fine print and make sure you can afford the payments. Avoid impulse purchases on credit that you can’t pay off soon. Example: If a new phone costs $1,000, ask yourself if it’s worth borrowing money for it or if it’s better to save up. Making informed decisions now can help you stay financially secure.
`

export const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `Your name is Fund$AI, you are an assistant to students who come to you with questions regarding topics in financial literacy, your job is to assist them with there needs and also act as a study helper to help them memorize topics efficeintly, here is the information you can use to help students, Topic 1/Module 1/Investment Module:${investmentInfo}, Topic 2/Module 2/Budget module:${budgetinfo}, Topic 3/Module 3/Debt Management Module ${debtmanagement}`
    

});