import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { Locale } from '@/config/i18n.ts';
import { useTranslation } from '@/hooks/use-translation.ts';

export default function VenueMap({ lang }: { lang: Locale }) {
  const { t } = useTranslation({ lng: lang });

  return <MapContainer
    center={[43.5926587, 1.4480319]}
    zoom={16}
    maxZoom={20}
    className='h-[60svh]'
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
    <Marker position={[43.5926587, 1.4480319]}>
      <Popup autoPan={true}>
        <b>{t('map.title')}</b>
        <br />{t('map.description')}
        <br />
        <a
          href='https://www.google.com/maps/place/43+Rue+Alfred+Dumeril,+31400+Toulouse,+Francie/@43.5926999,1.4454306,17z'
          target='_blank'>
          {t('map.google-link')}
        </a>
      </Popup>
    </Marker>
  </MapContainer>;
}
