import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationServiceService {
  shelters = [
    { name: 'Shelter A', latitude: 35.123, longitude: -85.456 },
    { name: 'Shelter B', latitude: 35.678, longitude: -85.789 },
    // 他の避難所データ
  ];
  getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('取得した位置情報:', position);
          resolve(position);
        },
        (error) => {
          console.error('位置情報の取得に失敗しました。', error);
          reject(error);
        }
      );
    });
  }
}
