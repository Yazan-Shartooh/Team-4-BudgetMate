import { ArrowLeftRight } from 'lucide-react';
import PagePlaceholder from '../components/PagePlaceholder';
import { pageRoutes } from '../types';

export default function TransactionsPage() {
  return <PagePlaceholder title="Transactions" description="Your money in motion. Every detail in one place."
    icon={ArrowLeftRight} heading="A home for every money move."
    message="Your full transaction history will appear here, with the tools to keep every entry up to date."
    action={{ to: pageRoutes.addTransaction, label: 'Add transaction' }}
    features={[
      { title: 'Record a transaction', description: 'Capture income or an expense with its category, date, and optional note.' },
      { title: 'Find what matters', description: 'Combine type, category, and month filters to narrow your history.' },
      { title: 'Keep it accurate', description: 'Edit a mistake or remove a duplicate and keep all related totals in sync.' },
    ]} />;
}
