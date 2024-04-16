import { GraphQLClient, gql } from 'graphql-request';
import { hygraphApi } from './constans';

export const graphcms = new GraphQLClient(hygraphApi);

export const queryPsychologistHomePage = gql`
  {
    psychologists(first: 10) {
      tags {
        tags_de
        tags_en
        tags_pl
      }
      description {
        description_pl
        description_en
        description_de
      }
      title {
        title_de
        title_en
        title_pl
      }
      profileImage {
        url(transformation: { image: { resize: { height: 500, width: 400 } } })
      }
      languages
      name_surname
    }
  }
`;

export const queryTestimonialsHomePage = gql`
  {
    testimonials {
      date
      name_surname
      stars
      comment
      image {
        url(transformation: { image: { resize: { height: 100, width: 100 } } })
      }
      source
    }
  }
`;

export const queryFAQHomePage = gql`
  {
    faqs(where: { articleId: null }) {
      question
      answer
    }
  }
`;

export const queryBlogPostsHomePage = gql`
  {
    blogPosts(first: 10) {
      slug
      title
      short_description
      date
      reading_time
      image {
        url
      }
    }
  }
`;
