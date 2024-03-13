import { Component } from '@angular/core';
import { CurrentPositionService } from '../current-position.service';
import { Observable } from 'rxjs';
import { LocationServiceService } from '../location-service.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent {
  articles: string[] = [
    '須賀川市',
    '郡山市',
    '白河市',
    '二本松市',
    '本宮市',
    '田村町',
    '大玉村',
    '鏡石町',
    '天栄村',
    '磐梯町',
    '猪苗代町',
    '石川町',
    '玉川村',
    '平田村',
    '浅川町',
    '古殿町',
    '三春町',
    '小野町',
  ];
  opened = false;
  userIp: string;

  constructor(
    private currentPositionService: CurrentPositionService,
    private locationServiceService: LocationServiceService
  ) {
    this.userIp = this.currentPositionService.userIp;
  }
}
