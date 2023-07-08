import prismadb from '@/lib/prismadb';
import React from 'react';

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const { storeId } = params;
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
    },
  });
  return <div>Active store: {store?.name}</div>;
};

export default DashboardPage;
