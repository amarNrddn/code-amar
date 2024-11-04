import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { configs } from '../../configs';
import './style.css';

const GithubCalendar = () => {
   const [totalContributions, setTotalContributions] = useState(0)
   const [follower, setFollower] = useState(0)
   const [repo, setRepo] = useState(0)

   const getActivity = async () => {
      const query = `
         query {
            user(login: "amarNrddn") {
               contributionsCollection(from: "2023-11-01T00:00:00Z", to: "${new Date().toISOString()}") {
                  totalCommitContributions
                  totalPullRequestContributions
                  totalIssueContributions
                  totalRepositoryContributions
               }
            }
         }
      `;

      try {
         const response = await axios.post(
            'https://api.github.com/graphql',
            { query },
            {
               headers: {
                  Authorization: `Bearer ${configs.token}`,
                  'Content-Type': 'application/json'
               }
            }
         );
         const contributionsData = response.data.data.user.contributionsCollection;
         const total =
            contributionsData.totalCommitContributions +
            contributionsData.totalPullRequestContributions +
            contributionsData.totalIssueContributions +
            contributionsData.totalRepositoryContributions;

         setTotalContributions(total);
      } catch (error) {
         console.log(error);
      }
   };

   const getProfile = async () => {
      try {
         const response = await axios.get('https://api.github.com/users/amarNrddn', {
            headers: {
               Authorization: `token ${configs.token}`
            }
         });

         setFollower(response.data.followers)
         setRepo(response.data.public_repos)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getActivity();
      getProfile()
   }, []);

   return (
      <div className='grid grid-cols-2 md:flex gap-4 mb-5 mt-4'>
         <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
            <p className="text-sm">Total</p>
            <p className='text-xl font-semibold text-green-500'>{totalContributions}</p>
         </div>
         <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
            <p className="text-sm">Repositories</p>
            <p className='text-xl font-semibold text-green-500'>{repo}</p>
         </div>
         <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
            <p className="text-sm">Followers</p>
            <p className='text-xl font-semibold text-green-500'>{follower}</p>
         </div>
         <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
            <p className="text-sm">Average</p>
            <p className='text-xl font-semibold text-green-500'>1<span className='text-gray-500 text-sm'>/day</span></p>
         </div>
      </div>
   );
};

export default GithubCalendar;
