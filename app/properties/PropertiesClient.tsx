'use client';
import { useRouter } from 'next/navigation';
import Container from '../components/Container';
import Heading from '../components/Heading';
import { SafeUser, safeListing, safeReservation } from '../types';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ListingCard from '../components/listings/ListingCard';

type Props = {
  listings: safeListing[];
  currentUser?: SafeUser | null;
};

function PropertiesClient({ listings, currentUser }: Props) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success('Property deleted successfully');
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId('');
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading title='Properties' subtitle='List of your properties' />
      <div className='mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:col-end-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel='Delete Property'
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}

export default PropertiesClient;
