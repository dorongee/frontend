'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log('위치정보 사용 불가능');
    }
  });
  return (
    <section>
      <p>test</p>
    </section>
  );
}
