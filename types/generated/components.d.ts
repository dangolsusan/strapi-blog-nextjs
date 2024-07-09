import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.header': SharedHeader;
    }
  }
}
