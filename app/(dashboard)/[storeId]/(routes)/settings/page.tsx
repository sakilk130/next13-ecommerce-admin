import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

import prismadb from '@/lib/prismadb';
import SettingsForm from './components/settings-form';

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
  const { storeId } = params;
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) {
    redirect('/');
  }

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingsPage;