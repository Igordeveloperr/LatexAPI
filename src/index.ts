import { BaseAPI } from './api/base';

async function example() {
    // Создаем экземпляр API
    const api = new BaseAPI('https://www.overleaf.com/'); // Замените на реальный URL Overleaf

    // Пример использования API с куками (альтернативный способ аутентификации)
    try {
        const auth = await api.cookiesLogin("__stripe_mid=cb2e9ac3-d94d-4288-9663-17644c34dab130e70e; overleaf_session2=s%3At6fnMaH286xsZf2HenpAjESVQl177Kij.Hk6Z8SPJYjWn3WHL%2BQuX3unyhf7XGMAchpSIQVqdj4E");
        
        if (auth.identity) {
            const data = await api.getProjectsJson(auth.identity);
            console.log(data);
            await api.close();
        } else {
            console.log('No identity found for logout');
        }
    } catch (error) {
        console.error('Error during API operations:', error);
    }
}

example();
