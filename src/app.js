import bridge from '@vkontakte/vk-bridge';

// Инициализация VK Bridge
bridge.send('VKWebAppInit');

// Проверка, что пользователь авторизован
bridge.send('VKWebAppGetUserInfo')
  .then(data => {
    console.log('User Info:', data);
  })
  .catch(error => {
    console.error('User Info Error:', error);
  });

// Функция для открытия сайта через прокси
function openWebsite() {
  const proxyUrl = 'http://46.47.197.210:3128/?url=https://kood.kurgan-med.ru';

  bridge.send('VKWebAppOpenWebView', { url: proxyUrl })
    .then(response => {
      console.log('Website opened successfully', response);
    })
    .catch(error => {
      console.error('Error opening website', error);
    });
}

// Кнопка для открытия сайта
const button = document.createElement('button');
button.innerText = 'Open kood.ru';
button.onclick = openWebsite;
document.getElementById('app').appendChild(button);
