import { Wallet } from 'lucide-react';
import PagePlaceholder from '../components/PagePlaceholder';

export default function BudgetsPage() {
  return <PagePlaceholder title="Budgets" description="Give every category a little direction."
    icon={Wallet} heading="Plan with purpose."
    message="Your monthly category budgets will help you see how much is spent and what is still available."
    features={[
      { title: 'Set a monthly plan', description: 'Set, update, or remove a budget for each expense category.' },
      { title: 'Follow your spending', description: 'See spent amounts, remaining funds, and the percentage used.' },
      { title: 'Know where you stand', description: 'Recognize On track, Near limit, Exceeded, and No budget categories.' },
    ]} />;
}
