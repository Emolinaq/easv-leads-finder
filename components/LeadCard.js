import Link from 'next/link';

const LeadCard = ({ lead }) => {
  return (
    <div className="p-4 border-b border-gray-200 hover:bg-gray-700">
      <Link href={`/details/${lead.id}`}>
        <h2 className="text-xl font-semibold text-gray-200">{lead.name}</h2>
        <p className="text-gray-600">{lead.sector} - {lead.location}</p>
      </Link>
    </div>
  );
};

export default LeadCard;