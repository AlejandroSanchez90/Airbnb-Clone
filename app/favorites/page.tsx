import EmptyState from '../components/EmptyState';
import ClientOnly from '../components/ClientOnly';

import { getCurrentUser } from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';
import FavoritesClient from './FavoritesClient';

type Props = {};

async function ListingPage({}: Props) {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState title='No favorites found' subtitle='Looks like you have no favorite listing' />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
}

export default ListingPage;
