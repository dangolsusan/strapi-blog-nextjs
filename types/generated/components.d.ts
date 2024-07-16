import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'faq';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    theme: Attribute.Enumeration<['primary', 'secondary']>;
    faq: Attribute.Component<'shared.question-answer', true>;
  };
}

export interface BlocksRelatedBlogs extends Schema.Component {
  collectionName: 'components_blocks_related_blogs';
  info: {
    displayName: 'relatedBlogs';
  };
  attributes: {
    blogs: Attribute.Relation<
      'blocks.related-blogs',
      'oneToMany',
      'api::blog.blog'
    >;
    header: Attribute.Component<'shared.header'>;
  };
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    header: Attribute.Component<'shared.header', true>;
    members: Attribute.Relation<
      'blocks.team',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface BlocksTestimonials extends Schema.Component {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    text: Attribute.String;
    users_permissions_user: Attribute.Relation<
      'blocks.testimonials',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    theme: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    footer: Attribute.Component<'shared.footer-col', true>;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedFooterCol extends Schema.Component {
  collectionName: 'components_shared_footer_cols';
  info: {
    displayName: 'footerCol';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    label: Attribute.String;
    theme: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
  };
}

export interface SharedQuestionAnswer extends Schema.Component {
  collectionName: 'components_shared_question_answers';
  info: {
    displayName: 'QuestionAnswer';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.faq': BlocksFaq;
      'blocks.related-blogs': BlocksRelatedBlogs;
      'blocks.team': BlocksTeam;
      'blocks.testimonials': BlocksTestimonials;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'shared.footer-col': SharedFooterCol;
      'shared.header': SharedHeader;
      'shared.link': SharedLink;
      'shared.question-answer': SharedQuestionAnswer;
    }
  }
}
