import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/fr'; // Pour la localisation en français

// Extension des plugins
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

// Configuration de la locale
dayjs.locale('fr');
