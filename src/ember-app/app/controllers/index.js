import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отель.caption'),
          title: i18n.t('forms.application.sitemap.отель.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-комната-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-kursovaya-rabota-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-kursovaya-rabota-комната-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-карта-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-kursovaya-rabota-карта-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-kursovaya-rabota-карта-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-считыватель-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-kursovaya-rabota-считыватель-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-kursovaya-rabota-считыватель-l.title'),
            icon: 'list',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.персонал.caption'),
            title: i18n.t('forms.application.sitemap.отель.персонал.title'),
            children: [{
              link: 'i-i-s-kursovaya-rabota-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-kursovaya-rabota-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-kursovaya-rabota-сотрудник-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-kursovaya-rabota-должности-l',
              caption: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-kursovaya-rabota-должности-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-kursovaya-rabota-должности-l.title'),
              icon: 'table',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.клиенты.caption'),
            title: i18n.t('forms.application.sitemap.отель.клиенты.title'),
            children: [{
              link: 'i-i-s-kursovaya-rabota-гость-l',
              caption: i18n.t('forms.application.sitemap.отель.клиенты.i-i-s-kursovaya-rabota-гость-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.клиенты.i-i-s-kursovaya-rabota-гость-l.title'),
              icon: 'paperclip',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.документация.caption'),
            title: i18n.t('forms.application.sitemap.отель.документация.title'),
            children: [{
              link: 'i-i-s-kursovaya-rabota-регистрац-ключа-l',
              caption: i18n.t('forms.application.sitemap.отель.документация.i-i-s-kursovaya-rabota-регистрац-ключа-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документация.i-i-s-kursovaya-rabota-регистрац-ключа-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-kursovaya-rabota-вход-в-номер-l',
              caption: i18n.t('forms.application.sitemap.отель.документация.i-i-s-kursovaya-rabota-вход-в-номер-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документация.i-i-s-kursovaya-rabota-вход-в-номер-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})