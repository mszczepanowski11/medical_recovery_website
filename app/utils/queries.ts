import { GraphQLClient, gql } from 'graphql-request';
import { hygraphApi } from './constans';

export const graphcms = new GraphQLClient(hygraphApi);

export const querySpecialistsHomePage = gql`
  {
    specialists(first: 10) {
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
      title {
        title_de
        title_en
        title_pl
      }
      profile_image {
        url(transformation: { image: { resize: { height: 500, width: 400 } } })
        alt
        caption
        title
      }
      languages
      name_surname
      specialist_page_slug
      calendar
    }
  }
`;

export const querySpecialistPage = (slug: string) => gql`
  {
    specialist(where: { specialist_page_slug: "${slug}" }) {
      calendar
      languages
      name_surname
      profile_image {
        alt
        caption
        title
        url
      }
      specialist_page_slug
      title {
        title_de
        title_en
        title_pl
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
      therapy_long_min
      description {
        description_en
        description_pl
        description_de
      }
      services {
        service_name {
          en
          pl
          de
        }
        service_url {
          en
          pl
          de
        }
      }
      experience {
        en
        pl
        de
      }
      education {
        en
        pl
        de
      }
      cheapest_price {
        en
        pl
        de
      }
      locals {
        localization {
          pl
          en
          de
        }
        description {
          de
          en
          pl
        }
      }
      therapy_types {
        de
        en
        pl
      }
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
        en
        pl
        de
      }
      answer {
        en
        pl
        de
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
          en
          pl
          de
        }
        answer {
          en
          pl
          de
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
