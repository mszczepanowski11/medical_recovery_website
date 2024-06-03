import { GraphQLClient, gql } from 'graphql-request';
import { hygraphApi } from './constans';

export const graphcms = new GraphQLClient(hygraphApi);

export const querySpecialistsSlug = gql`
  {
    specialists {
      specialist_page_slug
      name_surname
      title {
        title_de
        title_en
        title_pl
      }
      languages
    }
  }
`;

export const querySpecialistsHomePage = gql`
  {
    specialists(first: 10) {
      tags {
        de
        en
        pl
      }
      short_description {
        de
        en
        pl
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
        de
        en
        pl
      }
      short_description {
        de
        en
        pl
      }
      therapy_long_min
      description {
        en
        pl
        de
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
      comments {
        name_surname
        comment {
          en
          pl
          de
        }
        source {
          en
          pl
          de
        }
        date
        stars
        url
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
      comment {
        en
        pl
        de
      }
      image {
        url(transformation: { image: { resize: { height: 100, width: 100 } } })
      }
      source {
        en
        pl
        de
      }
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
        en {
          raw
        }
        pl {
          raw
        }
        de {
          raw
        }
      }
    }
  }
`;

export const queryBlogPostsSlug = gql`
  {
    blogPosts {
      slug
      title {
        title_de
        title_en
        title_pl
      }
    }
  }
`;

export const queryBlogPostsHomePage = gql`
  {
    blogPosts(first: 3) {
      slug
      title {
        title_en
        title_pl
        title_de
      }
      short_description {
        de
        en
        pl
      }
      date
      reading_time
      image {
        url
      }
      tags {
        de
        en
        pl
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
        de
        en
        pl
      }
      short_description {
        de
        en
        pl
      }
      content {
        en {
          raw
          text
        }
        pl {
          raw
        }
        de {
          raw
        }
      }
      faq {
        question {
          de
          en
          pl
        }
        answer {
          de {
            raw
          }
          en {
            raw
          }
          pl {
            raw
          }
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
        de
        en
        pl
      }
      date
      reading_time
      image {
        url
      }
      tags {
        de
        en
        pl
      }
    }
  }
`;
