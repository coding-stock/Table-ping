type Props = {
  params: Promise<{ id: string }>;
};

import TablePage from './TablePage';

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <TablePage id={id} />;
}