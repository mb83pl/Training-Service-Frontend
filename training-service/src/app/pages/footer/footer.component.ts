import { Component } from '@angular/core';
import {faThumbsUp,faUser,faEnvelope,faMapMarker} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
  faUser = faUser;
  faThumbsUp = faThumbsUp;
  faEnvelope = faEnvelope;
  faMapMarker = faMapMarker;
}
