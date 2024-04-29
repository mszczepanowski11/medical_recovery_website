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
    faqs {
      question {
        question_de
        question_en
        question_pl
      }
      answer {
        answer_de
        answer_en
        answer_pl
      }
    }
  }
`;

export const queryBlogPostsHomePage = gql`
  {
    blogPosts(first: 10) {
      slug
      title {
        title_en
        title_pl
        title_de
      }
      short_description {
        short_description_de
        short_description_en
        short_description_pl
      }
      date
      reading_time
      image {
        url
      }
      tags {
        tags_de
        tags_en
        tags_pl
      }
    }
  }
`;

export const queryBlogPostContent = (slug: string) => gql`
  {
    blogPost(where: {slug: "${slug}"}) {
      slug
      author
      title {
        title_en
        title_pl
        title_de
      }
      date
      reading_time
      image {
        url
      }
      tags {
        tags_de
        tags_en
        tags_pl
      }
      short_description {
        short_description_de
        short_description_en
        short_description_pl
      }
      content {
        content_en {
          raw
        }
        content_pl {
          raw
        }
        content_de {
          raw
        }
      }
      faq {
        question {
          question_de
          question_en
          question_pl
        }
        answer {
          answer_de
          answer_en
          answer_pl
        }
      }
    }
  }
`;

export const queryNewestsBlogPosts = (slug: string) => gql`
  {
    blogPosts(orderBy: date_ASC, first: 2, where: { slug_not: "${slug}" }) {
      slug
      title {
        title_en
        title_pl
        title_de
      }
      short_description {
        short_description_de
        short_description_en
        short_description_pl
      }
      date
      reading_time
      image {
        url
      }
      tags {
        tags_de
        tags_en
        tags_pl
      }
    }
  }
`;
