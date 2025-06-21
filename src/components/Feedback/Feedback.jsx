import React from 'react';
import { FiStar, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

const feedbackData = [
    { id: 1, rider: 'Kashish Singh', driver: 'Priya Sharma', rideId: 'RD565', rating: 5, comment: 'Very professional and polite driver. The ride was smooth and comfortable. Highly recommended!', sentiment: 'Positive' },
    { id: 2, rider: 'Riya Sharma', driver: 'Anita Verma', rideId: 'RD566', rating: 4, comment: 'Good ride, but the driver was a bit late for pickup.', sentiment: 'Neutral' },
    { id: 3, rider: 'Sneha Patel', driver: 'Sunita Patel', rideId: 'RD567', rating: 5, comment: 'Excellent service! The car was clean and the driver was very friendly.', sentiment: 'Positive' },
    { id: 4, rider: 'Ananya Reddy', driver: 'Meera Singh', rideId: 'RD568', rating: 2, comment: 'The driver took a longer route and the car was not clean. Disappointed with the experience.', sentiment: 'Negative' },
];

const RatingStars = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <FiStar key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
    </div>
);

const SentimentIndicator = ({ sentiment }) => {
    const sentimentClasses = {
        Positive: 'bg-green-100 text-green-800',
        Neutral: 'bg-yellow-100 text-yellow-800',
        Negative: 'bg-red-100 text-red-800',
    };
    const Icon = sentiment === 'Positive' ? FiThumbsUp : sentiment === 'Negative' ? FiThumbsDown : null;

    return (
        <div className="flex items-center">
            <div className="w-4 h-4 mr-2 flex items-center justify-center">
                {Icon && <Icon className={`h-full w-full ${sentimentClasses[sentiment].replace('bg-', 'text-')}`} />}
            </div>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${sentimentClasses[sentiment]}`}>{sentiment}</span>
        </div>
    );
};

const StatCard = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-gray-600 mb-2">{title}</h3>
        {children}
    </div>
);

export const Feedback = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Feedback & Ratings</h1>
        <p className="text-sm text-gray-500 mt-1">Review and manage user and driver feedback.</p>
      </header>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Average Rating">
              <div className="flex items-center">
                  <FiStar className="h-8 w-8 text-yellow-400 fill-current mr-2"/>
                  <p className="text-4xl font-bold">4.6</p>
              </div>
          </StatCard>
          <StatCard title="Total Feedback">
              <p className="text-4xl font-bold mt-2">1,234</p>
          </StatCard>
          <StatCard title="Sentiment">
              <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center">
                      <FiThumbsUp className="h-6 w-6 text-green-500 mr-2"/>
                      <p className="text-2xl font-bold">85%</p>
                  </div>
                  <div className="flex items-center">
                      <FiThumbsDown className="h-6 w-6 text-red-500 mr-2"/>
                      <p className="text-2xl font-bold">15%</p>
                  </div>
              </div>
          </StatCard>
      </div>
      
      {/* Feedback Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4">All Feedback</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="py-2 px-3 font-medium">Rider</th>
                <th className="py-2 px-3 font-medium">Driver</th>
                <th className="py-2 px-3 font-medium">Rating</th>
                <th className="py-2 px-3 font-medium">Comment</th>
                <th className="py-2 px-3 font-medium">Sentiment</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((item) => (
                <tr key={item.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="py-3 px-3 font-medium text-gray-800">{item.rider}</td>
                  <td className="py-3 px-3 text-gray-600">{item.driver}</td>
                  <td className="py-3 px-3"><RatingStars rating={item.rating} /></td>
                  <td className="py-3 px-3 text-gray-600 max-w-md">{item.comment}</td>
                  <td className="py-3 px-3"><SentimentIndicator sentiment={item.sentiment} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
