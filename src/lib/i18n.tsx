import React, { createContext, useContext, useState, useEffect } from "react";
import { es, en } from "@/translations";
import type { Translations } from "@/translations/es";

type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

const translations: Record<Language, Translations> = {
    es,
    en,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        // Try to get saved language from localStorage
        const saved = localStorage.getItem("preferred-language");
        return (saved as Language) || "es"; // Default to Spanish
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("preferred-language", lang);
    };

    const value: LanguageContextType = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
