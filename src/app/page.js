import Banner from '@/components/Banner';
import SummaryCards from '@/components/SummaryCards';
import FriendCard from '@/components/FriendCard';
import friendsData from '@/data/friends.json';

export const metadata = { title: 'KeenKeeper — Home' };

export default function HomePage() {
  return (
    <>
      <Banner />
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        <SummaryCards />
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Friends</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {friendsData.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}