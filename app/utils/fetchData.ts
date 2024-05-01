import {
  graphcms,
  queryBlogPostContent,
  queryBlogPostsHomePage,
  queryFAQHomePage,
  queryNewestsBlogPosts,
  querySpecialistPage,
  querySpecialistsHomePage,
  queryTestimonialsHomePage,
} from './queries';

export const fetchSpecialistsDataHomePage = async () => {
  const response = graphcms.request(querySpecialistsHomePage);

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

export const fetchTestimonialsDataHomePage = async () => {
  const response: Promise<{ testimonials: TestimonialType[] }> =
    graphcms.request(queryTestimonialsHomePage);

  if (!response)
    throw new Error('Something went wrong with fetching specialists');
  return response;
};

export const fetchFAQQuestionsHomePage = () => {
  const response: Promise<{ faqs: any[] }> = graphcms.request(queryFAQHomePage);

  if (!response)
    throw new Error('Something went wrong with fetching specialists');
  return response;
};

export const fetchBlogPostsHomePage = () => {
  const response: Promise<{ blogPosts: any[] }> = graphcms.request(
    queryBlogPostsHomePage,
  );

  if (!response)
    throw new Error('Something went wrong with fetching specialists');
  return response;
};

export const fetchBlogPostContent = (slug: string) => {
  const response: Promise<{ blogPost: any }> = graphcms.request(
    queryBlogPostContent(slug),
  );

  if (!response)
    throw new Error('Something went wrong with fetching specialists');
  return response;
};

export const fetchNewestsBlogPosts = (slug: string) => {
  const response: Promise<{ blogPosts: any[] }> = graphcms.request(
    queryNewestsBlogPosts(slug),
  );

  if (!response)
    throw new Error('Something went wrong with fetching specialists');
  return response;
};

export const fetchSpecialistPage = (slug: string) => {
  const response: Promise<{ specialist: any }> = graphcms.request(
    querySpecialistPage(slug),
  );

  if (!response)
    throw new Error('Something went wrong with fetching specialists');
  return response;
};
