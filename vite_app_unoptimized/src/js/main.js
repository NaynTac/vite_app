// Импортирование кастомного CSS
import '../scss/styles.scss'

// Импортирование всего Bootstrap
import * as bootstrap from 'bootstrap'

// Импортирование функции DateTime из модуля luxon
import { DateTime } from 'luxon';

// Выставляем текущее время в поле с id="time"
setInterval(() => {
    time.textContent = DateTime
    .local()
    .setLocale('ru')
    .toFormat('dd.LL.y HH:mm:ss');
}, 1000);