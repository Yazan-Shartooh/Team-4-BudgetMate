import { ChartNoAxesCombined } from 'lucide-react';
import PagePlaceholder from '../components/PagePlaceholder';

export default function MonthlyReportPage() {
  return <PagePlaceholder title="Monthly report" description="Step back. See the whole month."
    icon={ChartNoAxesCombined} heading="Turn everyday entries into perspective."
    message="Choose a month to understand your savings, your biggest spending category, and how your plan compares."
    features={[
      { title: 'The monthly summary', description: 'Income, expenses, savings, and savings rate for the selected month.' },
      { title: 'Spending by category', description: 'Category totals and percentages that explain where your money goes.' },
      { title: 'Plan versus reality', description: 'Compare actual spending with each monthly category budget.' },
    ]} />;
}
