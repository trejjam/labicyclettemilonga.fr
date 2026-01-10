import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { Locale } from '@/config/i18n.ts';
import { useTranslation } from '@/hooks/use-translation.ts';
import { Marker as LeafletMarker, DivIcon as LeafletDivIcon } from 'leaflet';

export default function MarathonVenueMap({ lang }: { lang: Locale }) {
  const { t } = useTranslation({ lng: lang });
  const markerRef = useRef<LeafletMarker>(null);
  const afterPartyMarkerRef = useRef<LeafletMarker>(null);
  const [markerRefReady, setMarkerRefReady] = useState(false);
  const [, setAfterPartyMarkerRefReady] = useState(false);

  useEffect(() => {
    markerRef.current?.openPopup();
  }, [markerRefReady]);

  const greenIcon = new LeafletDivIcon({
    className: 'custom-green-marker',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 50 82" role="img" aria-label="map marker">
      <path d="M25 1 C12 1 2 11 2 24 C2 41 15 58 25 82 C35 58 48 41 48 24 C48 11 38 1 25 1 Z"
            fill="#25B541" stroke="#ffffff" stroke-width="2"/>
      <circle cx="25" cy="24" r="8" fill="#ffffff"/>
    </svg>`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  return (
    <MapContainer
      center={[43.5852438, 1.4494853]}
      zoom={14}
      maxZoom={20}
      className='h-[60svh]'
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker
        position={[43.5926587, 1.4480319]}
        riseOnHover={true}
        ref={(r) => {
          markerRef.current = r;
          setMarkerRefReady(true);
        }}
      >
        <Popup>
          <b>{t('map.title')}</b>
          <br />
          {t('map.description')}
          <br />
          <a
            href='https://www.google.com/maps/place/43+Rue+Alfred+Dumeril,+31400+Toulouse,+Francie/@43.5926999,1.4454306,17z'
            target='_blank'
          >
            {t('map.google-link')}
          </a>
        </Popup>
      </Marker>
      <Marker
        position={[43.5778289, 1.4509386]}
        icon={greenIcon}
        riseOnHover={true}
        ref={(r) => {
          afterPartyMarkerRef.current = r;
          setAfterPartyMarkerRefReady(true);
        }}
      >
        <Popup>
          <b>After party: milonga La Dos</b>
          <br />
          {t('map.afterparty-description')}
          <br />
          <a
            href='https://www.google.com/maps/place/4+Av.+de+Rangueil,+31400+Toulouse/@43.5616849,1.4655156,17z'
            target='_blank'
          >
            {t('map.google-link')}
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
