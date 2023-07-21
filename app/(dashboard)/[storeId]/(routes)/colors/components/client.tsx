'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { ColorColumn, columns } from './columns';
import { ApiList } from '@/components/ui/api-list';

interface ColorsClientProps {
  data: ColorColumn[];
}

const ColorsClient: FC<ColorsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        />
        <Button
          type="button"
          onClick={() => router.push(`/${params.storeId}/colors/new`)}
        >
          <Plus size={16} className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API Calls for Colors" />
      <Separator />
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  );
};

export { ColorsClient };
