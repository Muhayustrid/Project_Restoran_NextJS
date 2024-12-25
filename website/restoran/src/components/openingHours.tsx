import { fetchOpeningHours } from '@/lib/api';

const OpeningHours = async () => {
  const openingHours = await fetchOpeningHours(); 
  return (
    <div>
      <h4>Opening Hours</h4>
      <ul>
        {openingHours.map((hour) => (
          <li key={hour.id}>
            <strong>{hour.day}:</strong> {hour.opening_time} - {hour.closing_time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpeningHours;
