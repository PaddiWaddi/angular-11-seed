import { Injectable } from '@angular/core';
import { OverlayService } from './overlay.service';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private overlayService: OverlayService) {}
}
