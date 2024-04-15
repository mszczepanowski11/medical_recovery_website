import {
  graphcms,
  queryFAQHomePage,
  queryPsychologistHomePage,
  queryTestimonialsHomePage,
} from './queries';

export const fetchSpecialistsData = async () => {
  const response = graphcms.request(queryPsychologistHomePage);

  if (!response)
    throw new Error('Something went wrong with fetching specialists');
  return response;
};

export type TestimonialType = {
  name_surname: string;
  comment: string;
  source?: string;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
  date: string;
  image: { url: string };
};

export const fetchTestimonialsData = async () => {
  const response: Promise<{ testimonials: TestimonialType[] }> =
    graphcms.request(queryTestimonialsHomePage);

  if (!response)
    throw new Error('Something went wrong with fetching specialists');
  return response;
};

export const fetchFAQQuestions = () => {
  const response: Promise<{ faqs: any[] }> = graphcms.request(queryFAQHomePage);

  if (!response)
    throw new Error('Something went wrong with fetching specialists');
  return response;
};
