import { graphcms, queryPsychologistHomePage } from './queries';

export const getSpecialistData = async () => {
  const response = graphcms.request(queryPsychologistHomePage);

  if (!response)
    throw new Error('Something went wrong with fetching specialists');
  return response;
};
