import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { Locale } from '@/config/i18n.ts';
import { useTranslation } from '@/hooks/use-translation.ts';

export default function VenueMap({ lang }: { lang: Locale }) {
  const { t } = useTranslation({ lng: lang });

  useEffect(() => {
    const container = L.DomUtil.get('map') as
      | (HTMLElement & { _leaflet_id: null })
      | undefined;

    if (container != null) {
      container._leaflet_id = null;
    }
    const map = L.map('map').setView([43.5926587, 1.4480319], 16);

    map.scrollWheelZoom.disable();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 20,
    }).addTo(map);

    const marker = L.marker([43.5926587, 1.4480319]).addTo(map);
    marker
      .bindPopup(
        `<b>${t('map.title')}</b><br>${t('map.description')}<br><a href="https://www.google.com/maps/place/43+Rue+Alfred+Dumeril,+31400+Toulouse,+Francie/@43.5926999,1.4454306,17z" target="_blank">${t('map.google-link')}</a>`
      )
      .openPopup();
  }, [t]);

  return (
    <div
      id='map'
      className='h-[60svh]'
    ></div>
  );
}
