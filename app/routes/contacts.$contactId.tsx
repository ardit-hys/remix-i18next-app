import { Form } from '@remix-run/react';
import { useState, type FunctionComponent } from 'react';

import type { ContactRecord } from '../data';
import { useTranslation } from 'react-i18next';

export let handle = { i18n: "home" };

export default function Contact() {
    const [lang, setLang] = useState<string>('en');
  
    const contact = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://placehold.co/200x200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  const { i18n, t } = useTranslation("contact");
  const language = i18n.resolvedLanguage;

  return (
    <div id="contact">
      <div>
        {language}
        <button onClick={() => changeLanguage('en')}>
            English
        </button>
        <button onClick={() => changeLanguage('es')}>
            Spanish
        </button>
        <h1>{t('greeting')}</h1>
      </div>
    </div>
  );
}

const Favorite: FunctionComponent<{
  contact: Pick<ContactRecord, 'favorite'>;
}> = ({ contact }) => {
  const favorite = contact.favorite;

  return (
    <Form method="post">
      <button
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        name="favorite"
        value={favorite ? 'false' : 'true'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
};
