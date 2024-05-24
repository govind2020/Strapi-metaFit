import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButtonComponent extends Schema.Component {
  collectionName: 'components_button_button_components';
  info: {
    displayName: 'ButtonComponent';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Button: Attribute.Component<'button.button-component'>;
  };
}

export interface FooterFooterComponent extends Schema.Component {
  collectionName: 'components_footer_footer_components';
  info: {
    displayName: 'footerComponent';
    description: '';
  };
  attributes: {
    FooterLogo: Attribute.Media;
    email: Attribute.Email;
    phoneNumber: Attribute.BigInteger;
    Address: Attribute.Text;
    copyRIght: Attribute.String;
    footerMenu: Attribute.Component<'footer.footer-menu', true>;
    footerSocial: Attribute.Component<'footer.social-link', true>;
  };
}

export interface FooterFooterMenu extends Schema.Component {
  collectionName: 'components_footer_footer_menus';
  info: {
    displayName: 'footerMenu';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    socailMenuId: Attribute.Integer;
    target: Attribute.Enumeration<['_self', '_blank']>;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Media;
    socailLinks: Attribute.Component<'footer.social-link', true>;
    footerMenu: Attribute.Component<'footer.footer-menu', true>;
  };
}

export interface FooterSocialLink extends Schema.Component {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'socialLink';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank']>;
    socialImage: Attribute.Media;
    socialMenuId: Attribute.Integer;
  };
}

export interface HeaderMenuMenu extends Schema.Component {
  collectionName: 'components_header_menu_menus';
  info: {
    displayName: 'menu';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank']>;
  };
}

export interface HomePageBannerComponent extends Schema.Component {
  collectionName: 'components_home_page_banner_components';
  info: {
    displayName: 'Banner-Component';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'home-page.banner-image'>;
    Heading: Attribute.Text;
    paragraph: Attribute.Text;
  };
}

export interface HomePageBannerImage extends Schema.Component {
  collectionName: 'components_home_page_banner_images';
  info: {
    displayName: 'BannerImage';
  };
  attributes: {
    bannerImage: Attribute.Media;
    locaityArea: Attribute.String;
    gymType: Attribute.String;
  };
}

export interface MetafitHeader extends Schema.Component {
  collectionName: 'components_metafit_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    headerMenu: Attribute.Component<'metafit.menu', true>;
  };
}

export interface MetafitLinkComponent extends Schema.Component {
  collectionName: 'components_metafit_link_components';
  info: {
    displayName: 'linkComponent';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_self']>;
    linkId: Attribute.Integer;
  };
}

export interface MetafitMenu extends Schema.Component {
  collectionName: 'components_metafit_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    Menu: Attribute.Component<'metafit.link-component', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button-component': ButtonButtonComponent;
      'button.button': ButtonButton;
      'footer.footer-component': FooterFooterComponent;
      'footer.footer-menu': FooterFooterMenu;
      'footer.footer': FooterFooter;
      'footer.social-link': FooterSocialLink;
      'header-menu.menu': HeaderMenuMenu;
      'home-page.banner-component': HomePageBannerComponent;
      'home-page.banner-image': HomePageBannerImage;
      'metafit.header': MetafitHeader;
      'metafit.link-component': MetafitLinkComponent;
      'metafit.menu': MetafitMenu;
    }
  }
}
