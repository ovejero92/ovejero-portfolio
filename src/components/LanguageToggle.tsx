'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="theme-toggle"
            aria-label="Toggle language"
            style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
        >
            {language === 'es' ? 'EN' : 'ESP'}
        </button>
    );
}
