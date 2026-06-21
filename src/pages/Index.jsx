import Dashboard from '../components/Dashboard'
import { ExpenseProvider } from '../context/ExpenseContext'
import DashBoardLayout from '../layouts/DashBoardLayout'

const Index = () => {
  return (
    <ExpenseProvider>
        <DashBoardLayout>
            <Dashboard/>
        </DashBoardLayout>
    </ExpenseProvider>
  )
}

export default Index