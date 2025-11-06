// Импортирование кастомного CSS
import '../scss/styles.scss'

// Импортирование только необходимых модулей
import {Modal, Button} from 'bootstrap'

// Импортирование функции DateTime из модуля luxon
import { DateTime } from 'luxon';

// Выставляем текущее время в поле с id="time"
setInterval(() => {
    time.textContent = DateTime
    .local()
    .setLocale('ru')
    .toFormat('dd.LL.y HH:mm:ss');
}, 1000);